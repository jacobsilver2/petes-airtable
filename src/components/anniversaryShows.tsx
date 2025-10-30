import React, { useState, useEffect } from "react"
import { getTodaysEvents as getAnniversaryEvents } from "../services/getCalendarEvents"
import formatCalendarTime from "../utility/formatCalendarTime"
import formatCalendarDate from "../utility/formatCalendarDate"
import getFirstEventdIds from "../utility/returnFirstEventOfDate"
import type { CalendarEvent } from '../../types'

function AnniversaryShows(): React.JSX.Element {
  const [events, setevents] = useState<CalendarEvent['fields'][]>([])
  const [firstEventIds, setFirstEventIds] = useState<string[]>([])
  
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getAnniversaryEvents()
        setevents(response)
        // Convert fields to records format for getFirstEventdIds
        const recordsFormat = response.map((fields, index) => ({
          id: `event-${index}`,
          fields
        }))
        setFirstEventIds(getFirstEventdIds(recordsFormat))
      } catch (error) {
        console.error('Error fetching anniversary events:', error)
      }
    }
    
    fetchEvents()
  }, [])
  const html = events.map((eventFields, index) => {
    const eventId = `event-${index}`
    return (
      <div key={eventId} style={{ fontSize: "1.53em" }}>
        {firstEventIds.includes(eventId) && (
          <h1
            style={{ paddingTop: "1em" }}
            className="has-text-centered has-text-weight-bold has-text-warning"
          >
            {formatCalendarDate(eventFields.Date)}
          </h1>
        )}
        <h2 className="has-text-danger has-text-centered has-text-weight-bold">
          {`${formatCalendarTime(eventFields.Date)} ${eventFields.Name}`}
        </h2>
      </div>
    )
  })
  return <>{html}</>
}

export default AnniversaryShows
