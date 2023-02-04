import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`{
  allAirtable(filter: {table: {eq: "open mic"}}, sort: {data: {order: ASC}}) {
    nodes {
      data {
        Name
        Content
        type
        website
        display
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
  file(relativePath: {eq: "matty.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 500, height: 100, layout: CONSTRAINED)
    }
  }
}`

const OpenMicPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const html = nodes.map((node) => createHtml(node.data))
  return <>
    <Layout
      fluid={data.file.childImageSharp.gatsbyImageData}
      fixed={null}
      fullheight={false}
    >
      <div>{html}</div>
    </Layout>
  </>;
}

export default OpenMicPage
