import React, { useState, useEffect } from "react"
import { getTodaysEvents } from "../services/getCalendarEvents"
import formatCalendarTime from "../utility/formatCalendarTime"

const TodayAtPetes = () => {
  const [events, setEvents] = useState([])

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
      {events.map((event) => (
        <h2
          key={event.id}
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
