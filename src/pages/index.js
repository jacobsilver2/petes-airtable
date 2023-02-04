import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"
import TodayAtPetes from "../components/TodayAtPetes"
import Button from "../components/Button"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "home" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          Content
          display
          type
          website
          email
          id
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
    file(relativePath: { eq: "outside.jpeg" }) {
      childImageSharp {
        gatsbyImageData(quality: 100, layout: FULL_WIDTH)
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const html = nodes.map((node) => createHtml(node.data))
  return (
    <Layout fluid={data.file.childImageSharp.gatsbyImageData}>
      <div>
        <Button title="FULL CALENDAR" link="/calendar" />

        <TodayAtPetes />
        {html}
      </div>
    </Layout>
  )
}

export default IndexPage
