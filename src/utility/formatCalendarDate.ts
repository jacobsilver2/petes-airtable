import moment from "moment"

export default function formatCalendarDate(date: string | Date): string {
  return moment.utc(date).format("MMMM Do (dddd)")
}

export function formatCalendarDate2(date: string | Date): string {
  return moment.utc(date).format("dddd, MMMM Do")
}
