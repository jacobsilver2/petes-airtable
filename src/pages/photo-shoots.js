import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"
import PhotoshootForm from '../components/Forms/PhotoshootForm';

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "photo shoots" } }
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
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid} fullheight={false}>
        <div>{myhtml}</div>
        <PhotoshootForm />
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Photo Shoots",
  url: "/photo-shoots",
  navOrder: 4
}
export default PhotoShootsPage
