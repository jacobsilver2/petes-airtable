"use client"

import createHtml from "../utility/createHtml"
import { AirtableRecord } from "../../types"

interface ContentRendererProps {
  data: AirtableRecord[]
}

export default function ContentRenderer({ data }: ContentRendererProps) {
  const html = data.map((node) => createHtml(node))
  return <>{html}</>
}
