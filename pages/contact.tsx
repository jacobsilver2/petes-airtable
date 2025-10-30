import React, { useState } from "react"
import { GetServerSideProps } from "next"
import Layout from "../src/components/layout"
import GeneralForm from "../src/components/Forms/GeneralForm"
import BookingForm from "../src/components/Forms/BookingForm"
import PhotoShootForm from "../src/components/Forms/PhotoshootForm"
import EventBookingForm from "../src/components/Forms/EventBookingForm"
import PrivatePartyForm from "../src/components/Forms/PrivatePartyForm"
import { getContactData } from "../lib/airtable"
import { AirtableRecord } from "../types"

interface ContactPageProps {
  contactData: AirtableRecord[]
}

export const getServerSideProps: GetServerSideProps<ContactPageProps> = async () => {
  const contactData = await getContactData()
  
  // Sort by order field if it exists
  const sortedData = contactData.sort((a: AirtableRecord, b: AirtableRecord) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return {
    props: {
      contactData: sortedData,
    },
  }
}

type FormName = "BOOK A PARTY" | "GENERAL INQUIRIES" | "MUSIC BOOKING" | "PHOTO SHOOTS" | "PITCH A SHOW"

const ContactPage: React.FC<ContactPageProps> = ({ contactData }) => {
  const [active, setActive] = useState<FormName>("BOOK A PARTY")
  const formNames: FormName[] = [
    "BOOK A PARTY",
    "GENERAL INQUIRIES",
    "MUSIC BOOKING",
    "PHOTO SHOOTS",
    "PITCH A SHOW",
  ]

  const mappedListItems = formNames.map((name) => {
    return (
      <button
        key={name}
        onClick={() => setActive(name)}
        style={{
          fontSize: "1rem",
          backgroundColor: "transparent",
          border: "none",
          color: active === name ? "red" : "white",
          padding: "0 1em",
          cursor: "pointer",
        }}
      >
        {name}
      </button>
    )
  })

  function renderForm(): React.ReactElement | null {
    if (active === "MUSIC BOOKING") {
      return <BookingForm />
    }
    if (active === "PITCH A SHOW") {
      return <EventBookingForm />
    }
    if (active === "PHOTO SHOOTS") {
      return <PhotoShootForm />
    }
    if (active === "BOOK A PARTY") {
      return <PrivatePartyForm />
    }
    if (active === "GENERAL INQUIRIES") {
      return (
        <>
          <p className="has-text-centered">
            Fill out this form for general information, media inquiries, website
            typos.
          </p>
          <GeneralForm />
          <div className="has-text-centered">
            <p>Pete's Candy Store</p>
            <p>709 Lorimer St</p>
            <p>Brooklyn, NY 11211</p>
            <p>(718) 302-3770</p>
          </div>
        </>
      )
    }
    return null
  }
  
  return (
    <>
      <Layout
        fluid="/images/contact.png"
      >
        <div className="tabs is-centered">
          <ul className="">{mappedListItems}</ul>
        </div>
        {renderForm()}
      </Layout>
    </>
  )
}

export default ContactPage