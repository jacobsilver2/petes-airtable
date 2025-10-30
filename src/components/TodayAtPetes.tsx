import React, { useState, useEffect } from "react"
import { getTodaysEvents } from "../services/getCalendarEvents"
import formatCalendarTime from "../utility/formatCalendarTime"
import type { CalendarEvent } from "../../types"

const TodayAtPetes: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent["fields"][]>([])

  useEffect(() => {
    const getEvents = async () => {
      const eventsFromServer = await getTodaysEvents()
      setEvents(eventsFromServer)
    }
    getEvents()
  }, [])

  return (
    <>
      <h1
        style={{ fontSize: "2em", marginBottom: "0.5em" }}
        className="has-text-danger has-text-centered has-text-weight-bold"
      >
        TONIGHT AT PETE'S
      </h1>
      {events.map((event, index) => (
        <h2
          key={index}
          style={{ fontSize: "1.53em" }}
          className="has-text-danger has-text-centered has-text-weight-bold"
        >
          {`${formatCalendarTime(event.Date)} ${event.Name.toUpperCase()}`}
        </h2>
      ))}
    </>
  )
}

export default TodayAtPetes
