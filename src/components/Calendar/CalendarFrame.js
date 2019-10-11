import React, { useEffect } from "react"
import moment from "moment"
import { Wrapper, Events } from "./CalendarStyles"
import CalendarEvent from "./CalendarEvent"
import getRandomImage from "../../utility/getRandomImage"
import formatCalendarDate from "../../utility/formatCalendarDate"
import formatCalendarTime from "../../utility/formatCalendarTime"
import { formatCalendarDate2 } from "../../utility/formatCalendarDate"

const CalendarFrame = ({ events, data: { allFile }, firstEvents }) => {
  // let prevDate = ""
  // const renderedEvents = []
  const myEvents = events.map(event => (
    <CalendarEvent
      isFirstEvent={firstEvents.includes(event.id)}
      date={formatCalendarDate(event.fields.Date)}
      dateTwo={formatCalendarDate2(event.fields.Date)}
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
    />
  ))

  // events.forEach(event => {
  //   const theEvent = (
  //     <CalendarEvent
  //       // isFirstEvent={!moment(event.fields.Date).isSame(prevDate, "day")}
  //       isFirstEvent={}
  //       date={formatCalendarDate(event.fields.Date)}
  //       dateTwo={formatCalendarDate2(event.fields.Date)}
  //       time={formatCalendarTime(event.fields.Date)}
  //       image={
  //         event.fields["Act Image"]
  //           ? event.fields["Act Image"][0].url
  //           : getRandomImage(allFile.nodes)
  //       }
  //       title={event.fields.Name}
  //       blurb={event.fields["Act Blurb"] ? event.fields["Act Blurb"][0] : null}
  //       website={
  //         event.fields["Act Website"] ? event.fields["Act Website"][0] : null
  //       }
  //       soundcloud={
  //         event.fields["Act Soundcloud"]
  //           ? event.fields["Act Soundcloud"][0]
  //           : null
  //       }
  //       id={event.id}
  //       key={event.id}
  //     />
  //   )
  //   renderedEvents.push(theEvent)
  //   prevDate = event.fields.Date
  // })

  return <Wrapper>{myEvents}</Wrapper>
}

export default CalendarFrame
