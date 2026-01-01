"use client"

import React from "react"
import createMenuHtml from "../utility/createMenuHtml"
import { AirtableRecord } from "../../types"

interface MenuRendererProps {
  data: AirtableRecord[]
}

export default function MenuRenderer({ data }: MenuRendererProps) {
  const html = data.map((node) => createMenuHtml({ ...node.data, id: node.id }))
  return <>{html}</>
}
