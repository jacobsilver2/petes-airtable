import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import createHtml from "../utility/createHtml";

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "press" } }
      sort: { order: ASC, fields: data___order }
    ) {
      nodes {
        data {
          Name
          Content
          type
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
  }
`

const PressPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Press",
  url: "/press",
  navOrder: 9
}
export default PressPage
