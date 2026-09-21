"use server"

import { getServerBase } from "../../lib/airtable-server"

const EVENTS_BASE = "app4Eb0X39KtGToOS"

export interface ActInfo {
  name: string
  ticketed: boolean
}

export interface ActMediaSubmission {
  actId?: string
  eventId?: string
  act: string
  firstName: string
  lastName: string
  email: string
  website: string
  instagram: string
  spotify: string
  blurb: string
  imageUrl?: string
  ticketLink?: string
}

export interface ActActionResult {
  ok: boolean
  error?: string
}

export async function getActInfo(
  actId: string,
  eventId?: string
): Promise<ActInfo | null> {
  try {
    const base = getServerBase(EVENTS_BASE)
    const actRecord = await base("Acts").find(actId)
    const name =
      typeof actRecord.fields.Name === "string" ? actRecord.fields.Name : ""

    let ticketed = false
    if (eventId) {
      const eventRecord = await base("Events").find(eventId)
      ticketed = eventRecord.fields.Ticketed === true
    }

    return { name, ticketed }
  } catch (err) {
    console.error(`getActInfo ${actId} failed:`, err)
    return null
  }
}

export async function submitActMedia(
  submission: ActMediaSubmission
): Promise<ActActionResult> {
  try {
    const base = getServerBase(EVENTS_BASE)

    if (submission.eventId) {
      const eventFields: Record<string, string> = { Name: submission.act }
      if (submission.ticketLink) {
        eventFields["Ticket Link"] = submission.ticketLink
      }
      await base("Events").update([
        { id: submission.eventId, fields: eventFields },
      ])
    }

    if (submission.actId) {
      const actFields: Record<string, string> = {
        Name: submission.act,
        "First Name": submission.firstName,
        "Last Name": submission.lastName,
        Email: submission.email,
        Website: submission.website,
        Instagram: submission.instagram,
        Spotify: submission.spotify,
        Blurb: submission.blurb,
      }
      if (submission.imageUrl) {
        actFields.Image_URL = submission.imageUrl
      }
      await base("Acts").update([{ id: submission.actId, fields: actFields }])
    }

    return { ok: true }
  } catch (err) {
    console.error(`submitActMedia ${submission.actId} failed:`, err)
    return { ok: false, error: "Submission failed" }
  }
}
