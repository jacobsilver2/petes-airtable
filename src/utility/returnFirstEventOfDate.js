import moment from "moment"

export default function returnArrayOfFirstEventOfTheDay(events) {
  let prevDate = ""
  const firstEventsOfTheDay = []
  events.map(event => {
    if (!moment(event.fields.Date).isSame(prevDate, "day")) {
      firstEventsOfTheDay.push(event.id)
    }
    prevDate = event.fields.Date
  })
  return firstEventsOfTheDay
}
