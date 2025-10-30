import React from "react"
import Layout from "../src/components/layout"
import createEventsAndSeriesHtml from "../src/utility/createEventsAndSeriesHtml"
import BookingForm from "../src/components/Forms/BookingForm"
import { getBookingData } from "../lib/airtable"

export async function getServerSideProps() {
  const bookingData = await getBookingData()
  
  // Sort by order field if it exists
  const sortedData = bookingData.sort((a, b) => {
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

const BookingPage = ({ bookingData }) => {
  const myhtml = bookingData.map((node) => createEventsAndSeriesHtml(node.data))
  
  return (
    <>
      <Layout
        fluid="/images/music_room_low_angle.jpeg"
        fullheight={false}
      >
        <div>{myhtml}</div>
        <BookingForm />
      </Layout>
    </>
  )
}

export default BookingPage