"use server"

import { getServerBase } from "../../lib/airtable-server"
import type { CalendarEvent, AirtableAttachment } from "../../types"

const EVENTS_BASE = "app4Eb0X39KtGToOS"

type EventFields = CalendarEvent["fields"]

function asString(value: unknown): string {
  return typeof value === "string" ? value : ""
}

function asOptionalString(value: unknown): string | undefined {
  return typeof value === "string" ? value : undefined
}

function asStringArray(value: unknown): string[] | undefined {
  if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
    return value
  }
  return undefined
}

function asBooleanArray(value: unknown): boolean[] | undefined {
  if (Array.isArray(value) && value.every((v) => typeof v === "boolean")) {
    return value
  }
  return undefined
}

function asBoolean(value: unknown): boolean | undefined {
  return typeof value === "boolean" ? value : undefined
}

function asNumber(value: unknown): number | undefined {
  return typeof value === "number" ? value : undefined
}

function asAttachments(value: unknown): AirtableAttachment[] | undefined {
  if (!Array.isArray(value)) return undefined
  const result: AirtableAttachment[] = []
  for (const item of value) {
    if (
      item &&
      typeof item === "object" &&
      "url" in item &&
      typeof item.url === "string"
    ) {
      result.push({
        url: item.url,
        filename: "filename" in item ? asString(item.filename) : "",
        type: "type" in item ? asString(item.type) : "",
        size: "size" in item ? asNumber(item.size) ?? 0 : 0,
        width: "width" in item ? asNumber(item.width) : undefined,
        height: "height" in item ? asNumber(item.height) : undefined,
      })
    }
  }
  return result.length > 0 ? result : undefined
}

function toEventFields(fields: Record<string, unknown>): EventFields {
  return {
    Name: asString(fields.Name),
    Date: asString(fields.Date),
    "Act Image": asAttachments(fields["Act Image"]),
    Image_URL: asStringArray(fields.Image_URL),
    "Act Hosted": asBooleanArray(fields["Act Hosted"]),
    "Act Blurb": asStringArray(fields["Act Blurb"]),
    "Act Website": asStringArray(fields["Act Website"]),
    "Act Soundcloud": asStringArray(fields["Act Soundcloud"]),
    "All Day": asBoolean(fields["All Day"]),
    Ticketed: asBoolean(fields.Ticketed),
    "Ticket Price": asNumber(fields["Ticket Price"]),
    "Ticket Link": asOptionalString(fields["Ticket Link"]),
  }
}

export async function getTodaysEvents(): Promise<EventFields[]> {
  try {
    const base = getServerBase(EVENTS_BASE)
    const records = await base("Events").select({ view: "Today" }).firstPage()
    return records.map((record) => toEventFields(record.fields))
  } catch (err) {
    console.error("getTodaysEvents failed:", err)
    return []
  }
}

const INSTAGRAM_HANDLE = /^[A-Za-z0-9._]{1,30}$/
const ACT_ID_BATCH = 100

function toInstagramUrl(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined
  const trimmed = value.trim()
  if (!trimmed) return undefined
  if (/instagram\.com\//i.test(trimmed)) {
    return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  }
  if (/^https?:\/\//i.test(trimmed)) return trimmed
  const handle = trimmed.replace(/^@/, "")
  return INSTAGRAM_HANDLE.test(handle)
    ? `https://www.instagram.com/${handle}/`
    : undefined
}

async function getInstagramByActId(
  actIds: string[]
): Promise<Map<string, string>> {
  const result = new Map<string, string>()
  if (actIds.length === 0) return result
  try {
    const base = getServerBase(EVENTS_BASE)
    for (let i = 0; i < actIds.length; i += ACT_ID_BATCH) {
      const batch = actIds.slice(i, i + ACT_ID_BATCH)
      const records = await base("Acts")
        .select({
          fields: ["Instagram"],
          filterByFormula: `OR(${batch
            .map((id) => `RECORD_ID()='${id}'`)
            .join(",")})`,
        })
        .all()
      for (const record of records) {
        const url = toInstagramUrl(record.fields.Instagram)
        if (url) result.set(record.id, url)
      }
    }
  } catch (err) {
    console.error("getInstagramByActId failed:", err)
  }
  return result
}

export async function getAllEvents(): Promise<CalendarEvent[]> {
  try {
    const base = getServerBase(EVENTS_BASE)
    const records = await base("Events").select({ view: "Future" }).all()
    const events = records.map((record) => ({
      id: record.id,
      actIds: asStringArray(record.fields["Act (link)"]) ?? [],
      fields: toEventFields(record.fields),
    }))
    const needsInstagram = new Set<string>()
    for (const event of events) {
      if (!event.fields["Act Website"]?.[0]) {
        event.actIds.forEach((id) => needsInstagram.add(id))
      }
    }
    const instagramByAct = await getInstagramByActId(Array.from(needsInstagram))
    return events.map(({ id, actIds, fields }) => {
      const instagram = actIds
        .map((actId) => instagramByAct.get(actId))
        .find((url) => url !== undefined)
      return {
        id,
        fields: instagram ? { ...fields, "Act Instagram": instagram } : fields,
      }
    })
  } catch (err) {
    console.error("getAllEvents failed:", err)
    return []
  }
}
