import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GeneralForm from "../components/Forms/GeneralForm"
import BookingForm from "../components/Forms/BookingForm"
import PhotoShootForm from "../components/Forms/PhotoshootForm"
import EventBookingForm from "../components/Forms/EventBookingForm"
import PrivatePartyForm from "../components/Forms/PrivatePartyForm"

import { navigate } from "gatsby"
// adding a comment to test a git thingy

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "contact" } }
      sort: { order: ASC, fields: data___order }
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
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
const ContactPage = ({ data }) => {
  const [active, setActive] = useState("GENERAL INQUIRIES")
  const formNames = [
    "GENERAL INQUIRIES",
    "MUSIC BOOKING",
    "PHOTO SHOOTS",
    "PITCH A SHOW",
    "BOOK A PARTY",
  ]

  const mappedListItems = formNames.map(name => (
    <li
      key={name}
      className={`${active === name ? "is-active" : ""} has-text-white`}
      onClick={() => setActive(name)}
    >
      <a>{name}</a>
    </li>
  ))

  function renderForm() {
    if (active === "MUSIC BOOKING") {
      // navigate("/booking")
      return <BookingForm />
    }
    if (active === "PITCH A SHOW") {
      // navigate("/host-a-cool-event")
      return <EventBookingForm />
    }
    if (active === "PHOTO SHOOTS") {
      // navigate("/photo-shoots")
      return <PhotoShootForm />
    }
    if (active === "BOOK A PARTY") {
      // navigate("/parties")
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
        </>
      )
    }
  }
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid} fullheight={false}>
        <div className="tabs is-centered">
          <ul className="">{mappedListItems}</ul>
        </div>
        {renderForm()}
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Contact",
  url: "/contact",
  navOrder: 8,
}
export default ContactPage
