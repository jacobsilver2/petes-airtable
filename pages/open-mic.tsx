import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../src/components/layout"
import createHtml from "../src/utility/createHtml"
import { getOpenMicData } from "../lib/airtable"
import { AirtableRecord } from "../types"

interface OpenMicPageProps {
  openMicData: AirtableRecord[]
}

export const getServerSideProps: GetServerSideProps<OpenMicPageProps> = async () => {
  const openMicData = await getOpenMicData()
  
  // Sort by order field if it exists
  const sortedData = openMicData.sort((a: AirtableRecord, b: AirtableRecord) => {
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

const OpenMicPage: React.FC<OpenMicPageProps> = ({ openMicData }) => {
  const html = openMicData.map((node) => createHtml(node))
  
  return (
    <>
      <Layout>
        <div>{html}</div>
      </Layout>
    </>
  )
}

export default OpenMicPage