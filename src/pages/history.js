import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "history" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          Content
          type
          website
          display
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
    pastPerformers: allAirtable(
      filter: { table: { eq: "past performers" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          display
          Content
          type
          id
        }
      }
    }
    file(relativePath: { eq: "HistoryHeader.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const HistoryPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const { nodes: past } = data.pastPerformers
  const myhtml = nodes.map((node) => createHtml(node.data))
  const pastBandsList = past.map((node) => (
    <p key={node.data.id}>{node.data.Content}</p>
  ))
  return (
    <Layout
      fluid={data.file.childImageSharp.fluid}
      maxWidth="550px"
      fullheight={false}
    >
      <div>{myhtml}</div>
      <div className="container">
        <div className="content">
          <p className="has-text-weight-bold" style={{ textAlign: "center" }}>
            PAST PERFORMERS
          </p>
          <p style={{ textAlign: "center" }}>{pastBandsList}</p>
        </div>
      </div>
    </Layout>
  )
}

export default HistoryPage
