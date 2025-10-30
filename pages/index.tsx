import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../src/components/layout"
import createHtml from "../src/utility/createHtml"
import TodayAtPetes from "../src/components/TodayAtPetes"
import Button from "../src/components/Button"
import { getHomeData } from "../lib/airtable"
import { checkEnvironment, isDevelopment } from "../lib/env-check"
import { AirtableRecord } from "../types"

interface IndexPageProps {
  homeData: AirtableRecord[]
}

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
  // Check environment variables in development
  if (isDevelopment()) {
    checkEnvironment()
  }
  
  const homeData = await getHomeData()
  
  // Sort by order field if it exists
  const sortedData = homeData.sort((a: AirtableRecord, b: AirtableRecord) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return {
    props: {
      homeData: sortedData,
    },
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ homeData }) => {
  const html = homeData.map((node) => createHtml(node))
  
  return (
    <Layout fluid="/images/outside.jpeg">
      <div>
        <Button title="FULL CALENDAR" link="/calendar" />
        <TodayAtPetes />
        {html}
      </div>
    </Layout>
  )
}

export default IndexPage