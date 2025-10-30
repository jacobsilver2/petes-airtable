import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../src/components/layout"
import createEventsAndSeriesHtml from "../src/utility/createEventsAndSeriesHtml"
import BookingForm from "../src/components/Forms/BookingForm"
import { getBookingData } from "../lib/airtable"
import { AirtableRecord } from "../types"

interface BookingPageProps {
  bookingData: AirtableRecord[]
}

export const getServerSideProps: GetServerSideProps<BookingPageProps> = async () => {
  const bookingData = await getBookingData()
  
  // Sort by order field if it exists
  const sortedData = bookingData.sort((a: AirtableRecord, b: AirtableRecord) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return {
    props: {
      bookingData: sortedData,
    },
  }
}

const BookingPage: React.FC<BookingPageProps> = ({ bookingData }) => {
  const myhtml = bookingData.map((node) => createEventsAndSeriesHtml({ ...node.data, id: node.id }))
  
  return (
    <>
      <Layout
        fluid="/images/music_room_low_angle.jpeg"
      >
        <div>{myhtml}</div>
        <BookingForm />
      </Layout>
    </>
  )
}

export default BookingPage