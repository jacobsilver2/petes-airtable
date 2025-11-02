import React from "react"
import { getContactData } from "../../lib/airtable"
import { AirtableRecord } from "../../types"
import ContactClient from "./ContactClient"


export default async function ContactPage() {
  const contactData = await getContactData()

  // Sort by order field if it exists
  const sortedData = contactData.sort((a: AirtableRecord, b: AirtableRecord) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return <ContactClient contactData={sortedData} />
}
