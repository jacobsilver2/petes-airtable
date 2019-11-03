import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"
import AnniversaryShows from "../components/anniversaryShows"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "petes turns twenty" } }
      sort: { fields: data___order }
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
    file(relativePath: { eq: "petesTurnsTwenty.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const PetesTurnsTwenty = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout
        fluid={data.file.childImageSharp.fluid}
        fullheight={false}
        regular={true}
      >
        <div>
          {myhtml}
          <div className="container" key={data.id}>
            <div className="content">
              <h1
                className="has-text-danger"
                style={{
                  textAlign: "center",
                  paddingTop: "1em",
                  textDecoration: "underline",
                }}
              >
                SHOWS AND DATES
              </h1>
            </div>
          </div>
          <AnniversaryShows />
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Pete's Turns Twenty",
  url: "/petes-turns-twenty",
  navOrder: 11,
}

export default PetesTurnsTwenty
