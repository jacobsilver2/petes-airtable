import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from '../utility/createHtml';
import TodayAtPetes from '../components/TodayAtPetes';
import Button from '../components/Button';

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "home" } }, sort: {fields: data___order}
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
          <Button title="FULL CALENDAR" link="/calendar"/>
          <TodayAtPetes />
          {myhtml}
        </div>
      </Layout>
    </>
  )
}
export const frontmatter = {
  title: "Welcome",
  url: '/',
  navOrder: 1
}
export default IndexPage

