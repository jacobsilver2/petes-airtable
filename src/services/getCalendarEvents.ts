import Airtable from "airtable"
import type { CalendarEvent } from "../../types"

// Get API key from environment
const getApiKey = (): string | undefined => {
  return process.env.NEXT_PUBLIC_AIRTABLE_API
}

export const getAllEvents = async (): Promise<Airtable.Record<any>[]> => {
  const apiKey = getApiKey()
  if (!apiKey) {
    console.warn("Airtable API key not available")
    return []
  }

  const base = new Airtable({ apiKey }).base("app4Eb0X39KtGToOS")

  return new Promise((resolve, reject) => {
    const allRecords: Airtable.Record<any>[] = []
    base("Events")
      .select({
        view: "Future",
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            allRecords.push(record)
          })
          fetchNextPage()
        },
        (err) => {
          if (err) {
            reject(err)
            return
          }
          resolve(allRecords)
        }
      )
  })
}

export const getTodaysEvents = async (): Promise<CalendarEvent["fields"][]> => {
  const apiKey = getApiKey()
  if (!apiKey) {
    console.warn("Airtable API key not available")
    return []
  }

  const base = new Airtable({ apiKey }).base("app4Eb0X39KtGToOS")

  return new Promise((resolve, reject) => {
    base("Events")
      .select({
        view: "Today",
      })
      .firstPage((err, records) => {
        if (err) {
          reject(err)
          return
        }
        resolve(
          records?.map(
            (record) => record.fields as unknown as CalendarEvent["fields"]
          ) || []
        )
      })
  })
}
