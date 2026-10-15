"use server"

import type { FieldSet } from "airtable/lib/field_set"
import { getServerBase } from "../../lib/airtable-server"
import type { SpamTrapData } from "../../src/utility/spamTrap"

const MAIN_BASE = "appNuB0fX4vQbOqdy"

const FORM_TABLES = {
  booking: { base: MAIN_BASE, table: "booking submission form" },
  eventBooking: { base: MAIN_BASE, table: "event booking form" },
  general: { base: MAIN_BASE, table: "general inquiry form" },
  mediaInquiries: { base: MAIN_BASE, table: "media inquiries form" },
  photoshoot: { base: MAIN_BASE, table: "photoshoot form" },
  privateParty: { base: MAIN_BASE, table: "private party form" },
  publicParty: { base: MAIN_BASE, table: "public party form" },
  mediaRequestEarly: { base: MAIN_BASE, table: "Media Request Form Early Event" },
}

const MIN_FILL_MS = 3000

export type FormKey = keyof typeof FORM_TABLES

export interface FormActionResult {
  ok: boolean
  error?: string
}

function isLikelySpam(trap: SpamTrapData | undefined): boolean {
  if (typeof trap?.honeypot !== "string" || typeof trap.elapsedMs !== "number") {
    return true
  }
  return trap.honeypot.length > 0 || trap.elapsedMs < MIN_FILL_MS
}

export async function submitForm(
  formKey: FormKey,
  fields: FieldSet,
  trap?: SpamTrapData
): Promise<FormActionResult> {
  const target = FORM_TABLES[formKey]
  if (!target) {
    return { ok: false, error: "Unknown form" }
  }
  if (isLikelySpam(trap)) {
    console.warn(`submitForm ${formKey}: dropped likely spam submission`)
    return { ok: true }
  }
  try {
    const base = getServerBase(target.base)
    await base(target.table).create([{ fields }])
    return { ok: true }
  } catch (err) {
    console.error(`submitForm ${formKey} failed:`, err)
    return { ok: false, error: "Submission failed" }
  }
}
