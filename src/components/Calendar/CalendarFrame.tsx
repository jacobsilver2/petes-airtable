import React from "react"
import styles from "./CalendarStyles.module.css"
import CalendarEvent from "./CalendarEvent"
import { getRandomImage } from "../../utility/getRandomImage"
import formatCalendarDate from "../../utility/formatCalendarDate"
import formatCalendarTime from "../../utility/formatCalendarTime"
import { CalendarFrameProps } from "../../types"

const CalendarFrame: React.FC<CalendarFrameProps> = ({ events, data: { allFile }, firstEvents }) => {
  const myEvents = events.map((event) => {
    return (
      <CalendarEvent
        isFirstEvent={firstEvents.includes(event.id)}
        date={formatCalendarDate(event.fields.Date)}
        time={formatCalendarTime(event.fields.Date)}
        // image={
        //   Boolean(event.fields.Image_URL)
        //     ? event.fields.Image_URL[0]
        //     : getRandomImage(allFile.nodes)
        // }
        image={
          event.fields["Act Image"]
            ? event.fields["Act Image"][0].url
            : getRandomImage(allFile.nodes)
        }
        title={
          // if event is ticketed
          event.fields.Ticketed && event.fields["Ticket Price"]
            ? `${event.fields.Name} - $${event.fields["Ticket Price"]}`
            : event.fields.Name
        }
        hosted={
          event.fields["Act Hosted"] ? Boolean(event.fields["Act Hosted"][0]) : false
        }
        blurb={event.fields["Act Blurb"] ? event.fields["Act Blurb"][0] : undefined}
        website={
          event.fields["Act Website"] ? event.fields["Act Website"][0] : undefined
        }
        soundcloud={
          event.fields["Act Soundcloud"]
            ? event.fields["Act Soundcloud"][0]
            : undefined
        }
        id={event.id}
        key={event.id}
        allDay={event.fields["All Day"] ? String(event.fields["All Day"]) : undefined}
      />
    )
  })

  return <div className={styles.wrapper}>{myEvents}</div>
}

export default CalendarFrame
