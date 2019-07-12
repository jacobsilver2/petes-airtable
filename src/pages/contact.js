import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

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
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid}>
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Contact",
  url: "/contact",
}
export default ContactPage
