"use client"

import React from "react"
import { useSearchParams } from "next/navigation"
import PageLayout from "../../src/components/PageLayout"
import MediaRequestForm from "../../src/components/Forms/mediaRequestForm"

export default function MediaRequestFormPage() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id") || ""
  const date = searchParams.get("date") || ""
  const time = searchParams.get("time") || ""
  const email = searchParams.get("email") || ""
  const eventId = searchParams.get("eventId") || ""

  return (
    <PageLayout>
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
    </PageLayout>
  )
}
