import React, { useState, useEffect } from "react"
import { getTodaysEvents as getAnniversaryEvents } from "../services/getCalendarEvents"
import formatCalendarTime from "../utility/formatCalendarTime"
import formatCalendarDate from "../utility/formatCalendarDate"
import { airtableAnniversaryEventsUrl } from "../utility/airtableUrls"
import getFirstEventdIds from "../utility/returnFirstEventOfDate"

function AnniversaryShows() {
  const [events, setevents] = useState([])
  const [firstEventIds, setFirstEventIds] = useState([])
  useEffect(() => {
    new Promise((resolve, reject) => {
      getAnniversaryEvents(
        `${airtableAnniversaryEventsUrl}&view=Grid%20view`,
        resolve,
        reject
      )
    }).then(response => {
      setevents(response.data.records)
      setFirstEventIds(getFirstEventdIds(response.data.records))
    })
  }, [])
  const html = events.map(event => (
    <div key={event.id} style={{ fontSize: "1.53em" }}>
      {firstEventIds.includes(event.id) && (
        <h1
          style={{ paddingTop: "1em" }}
          className="has-text-centered has-text-weight-bold has-text-warning"
        >
          {formatCalendarDate(event.fields.Date)}
        </h1>
      )}
      <h2 className="has-text-danger has-text-centered has-text-weight-bold">
        {`${formatCalendarTime(event.fields.Date)} ${event.fields.Act}`}
      </h2>
    </div>
  ))
  return <>{html}</>
}

export default AnniversaryShows
