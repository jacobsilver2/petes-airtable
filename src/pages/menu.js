import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createMenuHtml from "../utility/createMenuHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "menu" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          Description
          Price
          type
          id
        }
      }
    }
    file(relativePath: { eq: "menu.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const MenuPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const html = nodes.map((node) => createMenuHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div>{html}</div>
      </Layout>
    </>
  )
}

export default MenuPage
