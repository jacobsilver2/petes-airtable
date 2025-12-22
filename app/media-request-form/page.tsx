"use client"

import React, { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import PageLayout from "../../src/components/PageLayout"
import MediaRequestForm from "../../src/components/Forms/mediaRequestForm"

function MediaRequestFormContent() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id") || ""
  const date = searchParams.get("date") || ""
  const time = searchParams.get("time") || ""
  const email = searchParams.get("email") || ""
  const eventId = searchParams.get("eventId") || ""

  return (
    <div className="container">
      <h1 className="has-text-danger" style={{ textAlign: "center" }}>
        Media Request Form
      </h1>
      <MediaRequestForm
        id={id}
        date={date}
        time={time}
        actEmail={email}
        eventId={eventId}
      />
    </div>
  )
}

export default function MediaRequestFormPage() {
  return (
    <PageLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <MediaRequestFormContent />
      </Suspense>
    </PageLayout>
  )
}
