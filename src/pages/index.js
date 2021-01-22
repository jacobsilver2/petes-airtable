import React from "react"
// import { Link } from 'gatsby';
// import { getUser, isLoggedIn } from '../services/auth';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"
import TodayAtPetes from "../components/TodayAtPetes"
import Button from "../components/Button"
import BackgroundSection from "../components/BackgroundSection"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "home" } }
      sort: { fields: data___order }
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
                fluid(maxWidth: 1024) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "WelcomeHeader.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid}>
        <div>
          {/* <Button title="FULL CALENDAR" link="/calendar" /> */}

          {/* <TodayAtPetes /> */}
          {myhtml}
        </div>
      </Layout>
    </>
  )
}
export const frontmatter = {
  title: "Welcome",
  url: "/",
  navOrder: 1,
}
export default IndexPage
