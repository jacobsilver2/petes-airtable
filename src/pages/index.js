import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from '../utility/createHtml';

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "home" } }
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
            url
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
      <Layout fluid={data.file.childImageSharp.fluid}>
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

