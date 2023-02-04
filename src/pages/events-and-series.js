import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createEventsAndSeriesHtml from "../utility/createEventsAndSeriesHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "events and series" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          Content
          type
          website
          id
          display
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
    file(relativePath: { eq: "EventsHeaderImage.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const EventsAndSeriesPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map((node) => createEventsAndSeriesHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid} fullheight={false}>
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export default EventsAndSeriesPage
