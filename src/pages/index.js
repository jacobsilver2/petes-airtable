import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from '../utility/createHtml';

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "home" } }
    ) {
      nodes {
        data {
          Name
          Content
          type
          website
          email
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
    file(relativePath: { eq: "petes.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


const IndexPage = ({ data }) => {
  const { nodes } = data.allAirtable;
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid} fullheight={true} >
        <div>
          {myhtml}
        </div>
      </Layout>
    </>
  )
}
export const frontmatter = {
  title: "Welcome",
  url: '/'
}
export default IndexPage

