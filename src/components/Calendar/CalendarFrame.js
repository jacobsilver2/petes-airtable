import React from "react"
// import moment from "moment"
import { Wrapper } from "./CalendarStyles"
import CalendarEvent from "./CalendarEvent"
import getRandomImage from "../../utility/getRandomImage"
import formatCalendarDate from "../../utility/formatCalendarDate"
import formatCalendarTime from "../../utility/formatCalendarTime"
// import { formatCalendarDate2 } from "../../utility/formatCalendarDate"

const CalendarFrame = ({ events, data: { allFile }, firstEvents }) => {
  const myEvents = events.map(event => (
    <CalendarEvent
      isFirstEvent={firstEvents.includes(event.id)}
      date={formatCalendarDate(event.fields.Date)}
      time={formatCalendarTime(event.fields.Date)}
      image={
        event.fields["Act Image"]
          ? event.fields["Act Image"][0].url
          : getRandomImage(allFile.nodes)
      }
      title={event.fields.Name}
      hosted={
        event.fields["Act Hosted"] ? event.fields["Act Hosted"][0] : false
      }
      blurb={event.fields["Act Blurb"] ? event.fields["Act Blurb"][0] : null}
      website={
        event.fields["Act Website"] ? event.fields["Act Website"][0] : null
      }
      soundcloud={
        event.fields["Act Soundcloud"]
          ? event.fields["Act Soundcloud"][0]
          : null
      }
      id={event.id}
      key={event.id}
      allDay={event.fields["All Day"] ? event.fields["All Day"] : null}
    />
  ))

  return <Wrapper>{myEvents}</Wrapper>
}

export default CalendarFrame
