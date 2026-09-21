import "server-only"
import Airtable from "airtable"

const getApiKey = (): string | undefined => {
  return process.env.AIRTABLE_API || process.env.GATSBY_AIRTABLE_API
}

export const getServerBase = (baseId: string): Airtable.Base => {
  const apiKey = getApiKey()
  if (!apiKey) {
    throw new Error("Airtable API key not configured")
  }
  return new Airtable({ apiKey }).base(baseId)
}
