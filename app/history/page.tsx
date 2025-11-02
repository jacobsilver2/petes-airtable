import React from "react"
import PageLayout from "../../src/components/PageLayout"
import ContentRenderer from "../../src/components/ContentRenderer"
import { getHistoryData } from "../../lib/airtable"
import { AirtableRecord } from "../../types"


export default async function HistoryPage() {
  const historyData = await getHistoryData()

  // Filter for display=true and sort by order
  const filteredData = historyData
    .filter((node: AirtableRecord) => node.data.display)
    .sort((a: AirtableRecord, b: AirtableRecord) => {
      const orderA = a.data.order || 0
      const orderB = b.data.order || 0
      return orderA - orderB
    })

  return (
    <PageLayout fluid="/images/HistoryHeader.jpg">
      <div>
        <ContentRenderer data={filteredData} />
      </div>
    </PageLayout>
  )
}
