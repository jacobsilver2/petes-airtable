import moment from "moment"

export default function formatCalendarTime(time) {
  return moment.utc(time).format("h:mma")
}
