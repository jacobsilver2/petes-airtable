"use client"

import React from "react"
import createEventsAndSeriesHtml from "../utility/createEventsAndSeriesHtml"
import { AirtableRecord } from "../../types"

interface EventsRendererProps {
  data: AirtableRecord[]
}

export default function EventsRenderer({ data }: EventsRendererProps) {
  const html = data.map((node) => createEventsAndSeriesHtml({ ...node.data, id: node.id }))
  return <>{html}</>
}
