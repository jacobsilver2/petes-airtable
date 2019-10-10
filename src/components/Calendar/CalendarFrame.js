import React from "react"
import moment from "moment"
import { Wrapper, Events } from "./CalendarStyles"
import CalendarEvent from "./CalendarEvent"
import getRandomImage from "../../utility/getRandomImage"
import formatCalendarDate from "../../utility/formatCalendarDate"
import formatCalendarTime from "../../utility/formatCalendarTime"
import { formatCalendarDate2 } from "../../utility/formatCalendarDate"

const CalendarFrame = ({ events, data: { allFile } }) => {
  let prevDate = ""
  const renderedEvents = []
  events.forEach(event => {
    const theEvent = (
      <CalendarEvent
        isFirstEvent={!moment(event.fields.Date).isSame(prevDate, "day")}
        date={formatCalendarDate(event.fields.Date)}
        dateTwo={formatCalendarDate2(event.fields.Date)}
        time={formatCalendarTime(event.fields.Date)}
        image={
          event.fields["Act Image"]
            ? event.fields["Act Image"][0].url
            : getRandomImage(allFile.nodes)
        }
        title={event.fields.Name}
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
      />
    )
    renderedEvents.push(theEvent)
    prevDate = event.fields.Date
  })

  return <Wrapper>{renderedEvents}</Wrapper>
}

export default CalendarFrame
