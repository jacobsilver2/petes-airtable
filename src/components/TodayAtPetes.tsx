import React from "react"
import formatCalendarTime from "../utility/formatCalendarTime"
import type { CalendarEvent } from "../../types"

interface TodayAtPetesProps {
  events: CalendarEvent["fields"][]
}

const TodayAtPetes: React.FC<TodayAtPetesProps> = ({ events }) => {
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
