import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`{
  allAirtable(filter: {table: {eq: "reading series"}}, sort: {data: {order: ASC}}) {
    nodes {
      data {
        Name
        Content
        type
        website
        id
        order
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
}`

const OpenMicPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map((node) => createHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export default OpenMicPage
