import React from "react"
import PageLayout from "../../src/components/PageLayout"
import EventsRenderer from "../../src/components/EventsRenderer"
import BookingForm from "../../src/components/Forms/BookingForm"
import { getBookingData } from "../../lib/airtable"
import { AirtableRecord } from "../../types"


export default async function BookingPage() {
  const bookingData = await getBookingData()

  // Sort by order field if it exists
  const sortedData = bookingData.sort((a: AirtableRecord, b: AirtableRecord) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return (
    <PageLayout fluid="/images/music_room_low_angle.jpeg">
      <div>
        <EventsRenderer data={sortedData} />
      </div>
      <BookingForm />
    </PageLayout>
  )
}
