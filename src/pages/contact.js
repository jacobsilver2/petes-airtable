import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GeneralForm from "../components/Forms/GeneralForm"
import BookingForm from "../components/Forms/BookingForm"
import PhotoShootForm from "../components/Forms/PhotoshootForm"
import EventBookingForm from "../components/Forms/EventBookingForm"
import PrivatePartyForm from "../components/Forms/PrivatePartyForm"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "contact" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          Content
          type
          email
          website
          id
          Attachments {
            localFiles {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
const ContactPage = ({ data }) => {
  const [active, setActive] = useState("BOOK A PARTY")
  const formNames = [
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

  function renderForm() {
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
  }
  return (
    <>
      <Layout
        fluid={data.file.childImageSharp.gatsbyImageData}
        fullheight={false}
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
