import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../src/components/layout"
import createEventsAndSeriesHtml from "../src/utility/createEventsAndSeriesHtml"
import { getEventsAndSeriesData } from "../lib/airtable"
import { AirtableRecord } from "../types"

interface EventsAndSeriesPageProps {
  eventsData: AirtableRecord[]
}

export const getServerSideProps: GetServerSideProps<EventsAndSeriesPageProps> = async () => {
  const eventsData = await getEventsAndSeriesData()
  
  // Sort by order field if it exists
  const sortedData = eventsData.sort((a: AirtableRecord, b: AirtableRecord) => {
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

const EventsAndSeriesPage: React.FC<EventsAndSeriesPageProps> = ({ eventsData }) => {
  const myhtml = eventsData.map((node) => createEventsAndSeriesHtml({ ...node.data, id: node.id }))
  
  return (
    <>
      <Layout
        fluid="/images/EventsHeaderImage.jpeg"
      >
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export default EventsAndSeriesPage