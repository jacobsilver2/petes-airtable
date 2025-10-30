import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../src/components/layout"
import createHtml from "../src/utility/createHtml"
import { getHistoryData } from "../lib/airtable"
import { AirtableRecord } from "../types"

interface HistoryPageProps {
  historyData: AirtableRecord[]
}

export const getServerSideProps: GetServerSideProps<HistoryPageProps> = async () => {
  const historyData = await getHistoryData()
  
  // Filter for display=true and sort by order
  const filteredData = historyData
    .filter((node: AirtableRecord) => node.data.display)
    .sort((a: AirtableRecord, b: AirtableRecord) => {
      const orderA = a.data.order || 0
      const orderB = b.data.order || 0
      return orderA - orderB
    })

  return {
    props: {
      historyData: filteredData,
    },
  }
}

const HistoryPage: React.FC<HistoryPageProps> = ({ historyData }) => {
  const html = historyData.map((node) => createHtml(node))
  
  return (
    <>
      <Layout
        fluid="/images/HistoryHeader.jpg"
      >
        <div>{html}</div>
      </Layout>
    </>
  )
}

export default HistoryPage