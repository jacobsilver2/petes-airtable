import React from "react"
import Layout from "../src/components/layout"
import createEventsAndSeriesHtml from "../src/utility/createEventsAndSeriesHtml"
import { getEventsAndSeriesData } from "../lib/airtable"

export async function getServerSideProps() {
  const eventsData = await getEventsAndSeriesData()
  
  // Sort by order field if it exists
  const sortedData = eventsData.sort((a, b) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return {
    props: {
      eventsData: sortedData,
    },
  }
}

const EventsAndSeriesPage = ({ eventsData }) => {
  const myhtml = eventsData.map((node) => createEventsAndSeriesHtml(node.data))
  
  return (
    <>
      <Layout
        fluid="/images/EventsHeaderImage.jpeg"
        fullheight={false}
      >
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export default EventsAndSeriesPage