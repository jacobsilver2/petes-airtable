import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "open mic" }, data: { display: { eq: true } } }
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
          order
        }
      }
    }
    file(relativePath: { eq: "matty.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
  }
`

const OpenMicPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const html = nodes.map((node) => createHtml(node))
  return (
    <>
      <Layout
        fluid={data.file.childImageSharp.gatsbyImageData}
        fixed={null}
        fullheight={false}
      >
        <div>{html}</div>
      </Layout>
    </>
  )
}

export default OpenMicPage
