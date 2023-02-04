import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import createHtml from "../utility/createHtml"
import PublicPartyForm from "../components/Forms/PublicPartyForm"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "public party" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          Content
          type
          id
        }
      }
    }
  }
`

const PublicParty = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map((node) => createHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div className="container" key={data.id}>
          <div className="content">
            <h1 className="has-text-danger" style={{ textAlign: "center" }}>
              RESERVE SOME TABLES AT PETE'S
            </h1>
            <p style={{ textAlign: "center" }}>
              Please give us a few details to reserve your tables. Check out the
              FAQ below for more info.
            </p>
          </div>
        </div>
        <PublicPartyForm />
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export default PublicParty
