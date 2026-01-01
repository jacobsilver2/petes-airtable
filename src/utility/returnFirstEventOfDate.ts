import moment from "moment"
import type { AirtableRecord } from "../types"

interface EventWithDate {
  id: string
  fields: {
    Date: string
    [key: string]: any
  }
}

export default function returnArrayOfFirstEventOfTheDay(
  events: EventWithDate[]
): string[] {
  let prevDate = ""
  const firstEventsOfTheDay: string[] = []
  events.forEach((event) => {
    if (!moment(event.fields.Date).isSame(prevDate, "day")) {
      firstEventsOfTheDay.push(event.id)
    }
    prevDate = event.fields.Date
  })
  return firstEventsOfTheDay
}
