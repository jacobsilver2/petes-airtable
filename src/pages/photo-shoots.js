import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

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
      <Layout fluid={data.file.childImageSharp.fluid}>
        <div>{myhtml}</div>
          <div className="container">
            <div className="field">
              <label className="label is-medium">Medium input</label>
                <div className="control has-icons-left has-icons-right">
                  <input className="input is-medium" type="email" placeholder="Extra small"/>
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope fa-xs"></i>
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check fa-xs"></i>
                  </span>
                </div>
            </div>
          </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Photo Shoots",
  url: "/photo-shoots",
}
export default PhotoShootsPage
