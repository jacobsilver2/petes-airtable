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

export async function getAllEvents(): Promise<CalendarEvent[]> {
  try {
    const base = getServerBase(EVENTS_BASE)
    const records = await base("Events").select({ view: "Future" }).all()
    return records.map((record) => ({
      id: record.id,
      fields: toEventFields(record.fields),
    }))
  } catch (err) {
    console.error("getAllEvents failed:", err)
    return []
  }
}
