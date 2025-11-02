import React from "react"
import PageLayout from "../../src/components/PageLayout"
import MediaRequestFormEarlyEvent from "../../src/components/Forms/mediaRequestFormEarlyEvent"


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
