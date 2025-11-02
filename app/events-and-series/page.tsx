import React from "react"
import PageLayout from "../../src/components/PageLayout"
import EventsRenderer from "../../src/components/EventsRenderer"
import { getEventsAndSeriesData } from "../../lib/airtable"
import { AirtableRecord } from "../../types"


export default async function EventsAndSeriesPage() {
  const eventsData = await getEventsAndSeriesData()

  // Sort by order field if it exists
  const sortedData = eventsData.sort((a: AirtableRecord, b: AirtableRecord) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return (
    <PageLayout fluid="/images/EventsHeaderImage.jpeg">
      <div>
        <EventsRenderer data={sortedData} />
      </div>
    </PageLayout>
  )
}
