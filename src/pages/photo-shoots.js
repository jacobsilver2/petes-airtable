import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"
import PhotoShootForm from "../components/Forms/PhotoshootForm"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "photo shoots" } }
      sort: { data: { order: ASC } }
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
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "music_room.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

const PhotoShootsPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const html = nodes.map((node) => createHtml(node.data))
  return (
    <Layout
      fluid={data.file.childImageSharp.gatsbyImageData}
      fullheight={false}
    >
      <div>{html}</div>
      <PhotoShootForm />
    </Layout>
  )
}

export default PhotoShootsPage
