import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import GeneralForm from "../components/Forms/GeneralForm"
import { navigate } from "gatsby"

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
    "PHOTO SHOOTS",
    "MUSIC BOOKING",
    "PITCH A SHOW",
    "BOOK A PARTY",
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
    if (active === "MUSIC BOOKING") {
      navigate("/booking")
    }
    if (active === "PITCH A SHOW") {
      navigate("/host-a-cool-event")
    }
    if (active === "PHOTO SHOOTS") {
      navigate("/photo-shoots")
    }
    if (active === "BOOK A PARTY") {
      navigate("/parties")
    }
    if (active === "ALL OTHER INQUIRIES") {
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
  navOrder: 10,
}
export default ContactPage
