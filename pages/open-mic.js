import React from "react"
import Layout from "../src/components/layout"
import createHtml from "../src/utility/createHtml"
import { getOpenMicData } from "../lib/airtable"

export async function getServerSideProps() {
  const openMicData = await getOpenMicData()
  
  // Sort by order field if it exists
  const sortedData = openMicData.sort((a, b) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return {
    props: {
      openMicData: sortedData,
    },
  }
}

const OpenMicPage = ({ openMicData }) => {
  const html = openMicData.map((node) => createHtml(node))
  
  return (
    <>
      <Layout fullheight={false}>
        <div>{html}</div>
      </Layout>
    </>
  )
}

export default OpenMicPage