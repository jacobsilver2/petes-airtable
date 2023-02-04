import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"
import PhotoshootForm from "../components/Forms/PhotoshootForm"

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
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "music_room.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PhotoShootsPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const html = nodes.map((node) => createHtml(node.data))
  return (
    <Layout fluid={data.file.childImageSharp.fluid} fullheight={false}>
      <div>{html}</div>
      <PhotoshootForm />
    </Layout>
  )
}

export default PhotoShootsPage
