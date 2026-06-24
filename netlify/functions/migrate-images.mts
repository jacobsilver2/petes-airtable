import type { Config } from "@netlify/functions"
import { v2 as cloudinary } from "cloudinary"

const AIRTABLE_BASE = "app4Eb0X39KtGToOS"
const AIRTABLE_TABLE = "Events"
const SOURCE_FIELD = "Act Image"
const TARGET_FIELD = "Cloudinary_Image"
const CLOUDINARY_FOLDER = "petes-act-images"

const MAX_RECORDS_PER_RUN = 8

interface AirtableAttachment {
  url: string
  filename?: string
}

interface AirtableRecord {
  id: string
  fields: Record<string, unknown>
}

function isAttachmentArray(value: unknown): value is AirtableAttachment[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === "object" &&
    value[0] !== null &&
    "url" in value[0]
  )
}

async function fetchEventsNeedingMigration(
  token: string
): Promise<AirtableRecord[]> {
  const params = new URLSearchParams({
    view: "Future",
    maxRecords: "100",
  })
  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}?${params}`,
    { headers: { Authorization: `Bearer ${token}` } }
  )
  if (!res.ok) {
    throw new Error(`Airtable read failed: ${res.status} ${await res.text()}`)
  }
  const body = (await res.json()) as { records: AirtableRecord[] }
  return body.records.filter((record) => {
    const alreadyMigrated =
      typeof record.fields[TARGET_FIELD] === "string" &&
      (record.fields[TARGET_FIELD] as string).length > 0
    return !alreadyMigrated && isAttachmentArray(record.fields[SOURCE_FIELD])
  })
}

async function uploadToCloudinary(sourceUrl: string): Promise<string> {
  const result = await cloudinary.uploader.upload(sourceUrl, {
    folder: CLOUDINARY_FOLDER,
    resource_type: "image",
  })
  return result.secure_url
}

async function writeBack(
  token: string,
  recordId: string,
  url: string
): Promise<void> {
  const res = await fetch(
    `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [{ id: recordId, fields: { [TARGET_FIELD]: url } }],
      }),
    }
  )
  if (!res.ok) {
    throw new Error(`Airtable write failed: ${res.status} ${await res.text()}`)
  }
}

export default async (req: Request): Promise<void> => {
  const token = Netlify.env.get("GATSBY_AIRTABLE_API")
  const cloudName = Netlify.env.get("CLOUDINARY_CLOUD_NAME")
  const apiKey = Netlify.env.get("CLOUDINARY_API_KEY")
  const apiSecret = Netlify.env.get("CLOUDINARY_API_SECRET")

  if (!token || !cloudName || !apiKey || !apiSecret) {
    console.error("migrate-images: missing required environment variables")
    return
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  })

  const pending = await fetchEventsNeedingMigration(token)
  const batch = pending.slice(0, MAX_RECORDS_PER_RUN)
  console.log(
    `migrate-images: ${pending.length} pending, processing ${batch.length} this run`
  )

  let migrated = 0
  for (const record of batch) {
    const attachments = record.fields[SOURCE_FIELD]
    if (!isAttachmentArray(attachments)) continue
    try {
      const url = await uploadToCloudinary(attachments[0].url)
      await writeBack(token, record.id, url)
      migrated++
      console.log(`migrate-images: migrated ${record.id} -> ${url}`)
    } catch (err) {
      console.error(`migrate-images: failed ${record.id}:`, err)
    }
  }

  console.log(
    `migrate-images: done, migrated ${migrated}/${batch.length} (${
      pending.length - migrated
    } still pending)`
  )
}

export const config: Config = {
  schedule: "*/30 * * * *",
}
