import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "history" } }
      sort: { order: ASC, fields: data___order }
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
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout
        fluid={data.file.childImageSharp.fluid}
        maxWidth="550px"
        fullheight={false}
      >
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "History",
  url: "/history",
  navOrder: 8,
}
export default HistoryPage
