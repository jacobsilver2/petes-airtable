import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "parties" } }
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
                fluid(maxWidth: 1028) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "parties.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PartiesPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid} fullheight={false}>
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Parties",
  url: "/parties",
}
export default PartiesPage
