import moment from "moment"

export default function formatCalendarTime(time: string | Date): string {
  return moment.utc(time).format("h:mma")
}
