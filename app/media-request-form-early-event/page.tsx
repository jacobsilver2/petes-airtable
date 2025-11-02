import React from "react"
import PageLayout from "../../src/components/PageLayout"
import MediaRequestFormEarlyEvent from "../../src/components/Forms/mediaRequestFormEarlyEvent"

export const revalidate = 60 // Revalidate every 60 seconds

export default function MediaRequestFormEarlyEventPage() {
  return (
    <PageLayout>
      <div className="container">
        <h1 className="has-text-danger" style={{ textAlign: "center" }}>
          Media Request Form - Early Event
        </h1>
        <MediaRequestFormEarlyEvent />
      </div>
    </PageLayout>
  )
}
