import React from "react"
import PageLayout from "../src/components/PageLayout"
import ContentRenderer from "../src/components/ContentRenderer"
import TodayAtPetes from "../src/components/TodayAtPetes"
import Button from "../src/components/Button"
import { getHomeData } from "../lib/airtable"
import { checkEnvironment, isDevelopment } from "../lib/env-check"
import { AirtableRecord } from "../types"

// Force dynamic rendering for homepage (shows today's events)
export const dynamic = 'force-dynamic'
export const revalidate = 0

export default async function HomePage() {
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

  return (
    <PageLayout fluid="/images/outside.jpeg">
      <div>
        <Button title="FULL CALENDAR" link="/calendar" />
        <TodayAtPetes />
        <ContentRenderer data={sortedData} />
      </div>
    </PageLayout>
  )
}
