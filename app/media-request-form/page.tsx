import React from "react"
import PageLayout from "../../src/components/PageLayout"
import MediaRequestForm from "../../src/components/Forms/mediaRequestForm"
import { getActInfo } from "../actions/act-media"

interface PageProps {
  searchParams: Promise<{
    id?: string
    date?: string
    time?: string
    email?: string
    eventId?: string
  }>
}

export default async function MediaRequestFormPage({ searchParams }: PageProps) {
  const params = await searchParams
  const id = params.id || ""
  const date = params.date || ""
  const time = params.time || ""
  const email = params.email || ""
  const eventId = params.eventId || ""

  const actInfo = id ? await getActInfo(id, eventId || undefined) : null

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
          initialActName={actInfo?.name || ""}
          initialTicketed={actInfo?.ticketed || false}
        />
      </div>
    </PageLayout>
  )
}
