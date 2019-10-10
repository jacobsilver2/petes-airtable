import moment from "moment"

export default function formatCalendarDate(date) {
  return moment.utc(date).format("MMMM Do (dddd)")
}

export function formatCalendarDate2(date) {
  return moment.utc(date).format("dddd, MMMM Do")
}
