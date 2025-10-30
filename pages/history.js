import React from "react"
import Layout from "../src/components/layout"
import createHtml from "../src/utility/createHtml"
import { getHistoryData } from "../lib/airtable"

export async function getServerSideProps() {
  const historyData = await getHistoryData()
  
  // Filter for display=true and sort by order
  const filteredData = historyData
    .filter(node => node.data.display)
    .sort((a, b) => {
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

const HistoryPage = ({ historyData }) => {
  const html = historyData.map((node) => createHtml(node))
  
  return (
    <>
      <Layout
        fluid="/images/HistoryHeader.jpg"
        fullheight={false}
      >
        <div>{html}</div>
      </Layout>
    </>
  )
}

export default HistoryPage