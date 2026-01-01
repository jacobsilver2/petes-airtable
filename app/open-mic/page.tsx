import React from "react"
import PageLayout from "../../src/components/PageLayout"
import ContentRenderer from "../../src/components/ContentRenderer"
import { getOpenMicData } from "../../lib/airtable"
import { AirtableRecord } from "../../types"


export default async function OpenMicPage() {
  const openMicData = await getOpenMicData()

  // Sort by order field if it exists
  const sortedData = openMicData.sort((a: AirtableRecord, b: AirtableRecord) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return (
    <PageLayout>
      <div>
        <ContentRenderer data={sortedData} />
      </div>
    </PageLayout>
  )
}
