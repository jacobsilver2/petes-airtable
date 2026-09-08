import type { Config } from "@netlify/functions"
import { v2 as cloudinary } from "cloudinary"

const AIRTABLE_BASE = "app4Eb0X39KtGToOS"
const AIRTABLE_TABLE = "Acts"
const IMAGE_FIELD = "Image"
const URL_FIELD = "Image_URL"
const CLOUDINARY_FOLDER = "petes-act-images"

const MAX_RECORDS_PER_RUN = 8
const CLOUDINARY_MAX_IMAGE_BYTES = 10 * 1024 * 1024

interface AirtableAttachment {
  id: string
  url: string
  filename?: string
  size?: number
}

interface AirtableRecord {
  id: string
  fields: Record<string, unknown>
}

function firstAttachment(value: unknown): AirtableAttachment | null {
  if (
    Array.isArray(value) &&
    value.length > 0 &&
    typeof value[0] === "object" &&
    value[0] !== null &&
    "url" in value[0] &&
    "id" in value[0]
  ) {
    return value[0] as AirtableAttachment
  }
  return null
}

function publicIdFor(attachmentId: string): string {
  return `${CLOUDINARY_FOLDER}/act_${attachmentId}`
}

async function fetchActs(token: string): Promise<AirtableRecord[]> {
  const records: AirtableRecord[] = []
  let offset: string | undefined
  do {
    const params = new URLSearchParams({ pageSize: "100" })
    if (offset) params.set("offset", offset)
    const res = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE}/${AIRTABLE_TABLE}?${params}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    if (!res.ok) {
      throw new Error(`Airtable read failed: ${res.status} ${await res.text()}`)
    }
    const body = (await res.json()) as {
      records: AirtableRecord[]
      offset?: string
    }
    records.push(...body.records)
    offset = body.offset
  } while (offset)
  return records
}

function needsSync(record: AirtableRecord): AirtableAttachment | null {
  const attachment = firstAttachment(record.fields[IMAGE_FIELD])
  if (!attachment) return null
  const currentUrl = record.fields[URL_FIELD]
  const alreadySynced =
    typeof currentUrl === "string" &&
    currentUrl.includes(publicIdFor(attachment.id))
  return alreadySynced ? null : attachment
}

async function uploadToCloudinary(
  sourceUrl: string,
  attachmentId: string
): Promise<string> {
  const result = await cloudinary.uploader.upload(sourceUrl, {
    public_id: publicIdFor(attachmentId),
    overwrite: true,
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
        records: [{ id: recordId, fields: { [URL_FIELD]: url } }],
      }),
    }
  )
  if (!res.ok) {
    throw new Error(`Airtable write failed: ${res.status} ${await res.text()}`)
  }
}

export default async (): Promise<void> => {
  const token = Netlify.env.get("GATSBY_AIRTABLE_API")
  const cloudName = Netlify.env.get("CLOUDINARY_CLOUD_NAME")
  const apiKey = Netlify.env.get("CLOUDINARY_API_KEY")
  const apiSecret = Netlify.env.get("CLOUDINARY_API_SECRET")

  if (!token || !cloudName || !apiKey || !apiSecret) {
    console.error("sync-act-images: missing required environment variables")
    return
  }

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
    secure: true,
  })

  const acts = await fetchActs(token)
  const pending: { record: AirtableRecord; attachment: AirtableAttachment }[] =
    []
  for (const record of acts) {
    const attachment = needsSync(record)
    if (attachment) pending.push({ record, attachment })
  }

  const batch = pending.slice(0, MAX_RECORDS_PER_RUN)
  console.log(
    `sync-act-images: ${pending.length} acts need sync, processing ${batch.length} this run`
  )

  let synced = 0
  for (const { record, attachment } of batch) {
    if (
      typeof attachment.size === "number" &&
      attachment.size > CLOUDINARY_MAX_IMAGE_BYTES
    ) {
      console.warn(
        `sync-act-images: skipping ${record.id} (${attachment.filename ?? "image"}): ${attachment.size} bytes exceeds Cloudinary ${CLOUDINARY_MAX_IMAGE_BYTES} limit`
      )
      continue
    }
    try {
      const url = await uploadToCloudinary(attachment.url, attachment.id)
      await writeBack(token, record.id, url)
      synced++
      console.log(`sync-act-images: synced ${record.id} -> ${url}`)
    } catch (err) {
      console.error(`sync-act-images: failed ${record.id}:`, err)
    }
  }

  console.log(
    `sync-act-images: done, synced ${synced}/${batch.length} (${
      pending.length - synced
    } still pending)`
  )
}

export const config: Config = {
  schedule: "*/30 * * * *",
}
