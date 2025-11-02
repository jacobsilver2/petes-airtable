import React from "react"
import { getGalleryData } from "../../lib/airtable"
import { AirtableRecord } from "../../types"
import GalleryClient from "./GalleryClient"

export const revalidate = 60 // Revalidate every 60 seconds

export default async function GalleryPage() {
  const galleryData = await getGalleryData()

  // Filter for display=true and sort by order
  const filteredData = galleryData
    .filter((node: AirtableRecord) => node.data.display)
    .sort((a: AirtableRecord, b: AirtableRecord) => {
      const orderA = a.data.order || 0
      const orderB = b.data.order || 0
      return orderA - orderB
    })

  return <GalleryClient galleryData={filteredData} />
}
