import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BookingForm from "../components/Forms/BookingForm"
import PhotoshootForm from "../components/Forms/PhotoshootForm"
import PrivatePartyForm from "../components/Forms/PrivatePartyForm"
import GeneralForm from "../components/Forms/GeneralForm"
import MediaInquiriesForm from "../components/Forms/MediaInquiries"
import EventBookingForm from "../components/Forms/EventBookingForm"
// import createHtml from "../utility/createHtml"

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
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const ContactPage = ({ data }) => {
  const [active, setActive] = useState("MEDIA INQUIRIES")
  const formNames = [
    "MEDIA INQUIRIES",
    "PHOTO SHOOTS",
    "MUSIC BOOKING",
    "EVENT BOOKING",
    "PRIVATE PARTY",
    "ALL OTHER INQUIRIES",
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
    if (active === "MEDIA INQUIRIES") {
      return <MediaInquiriesForm />
    }
    if (active === "MUSIC BOOKING") {
      return <BookingForm />
    }
    if (active === "EVENT BOOKING") {
      return <EventBookingForm />
    }
    if (active === "PHOTO SHOOTS") {
      return <PhotoshootForm />
    }
    if (active === "PRIVATE PARTY") {
      return <PrivatePartyForm />
    }
    if (active === "ALL OTHER INQUIRIES") {
      return <GeneralForm />
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
  navOrder: 10,
}
export default ContactPage
