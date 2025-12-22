import React from "react"
import PageLayout from "../../src/components/PageLayout"
import CalendarFrame from "../../src/components/Calendar/CalendarFrame"
import { getAllEvents } from "../../src/services/getCalendarEvents"
import getFirstEventIds from "../../src/utility/returnFirstEventOfDate"

// Force dynamic rendering for calendar page (shows live events)
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function CalendarPage() {
  // Fetch events on the server
  const events = await getAllEvents()
  const firstEventIds = getFirstEventIds(events)

  const randomImages: string[] = []
  for (let i = 1; i <= 29; i++) {
    randomImages.push(`/images/random/rand${i}.png`)
  }

  return (
    <PageLayout fluid={null}>
      <div className="container">
        <h1 className="has-text-danger" style={{ textAlign: "center" }}>
          SHOWTIMES
        </h1>
        <p style={{ textAlign: "center" }}>
          All shows are free and 21+ to attend (unless otherwise listed)
        </p>
        <p style={{ textAlign: "center" }}>($10 suggested donation)</p>
        <CalendarFrame
          events={events}
          data={{ allFile: { nodes: randomImages } }}
          firstEvents={firstEventIds}
        />
      </div>
    </PageLayout>
  )
}
