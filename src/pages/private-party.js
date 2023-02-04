import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import createHtml from "../utility/createHtml"
import PrivatePartyForm from "../components/Forms/PrivatePartyForm"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "private party" } }
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

const PrivateParty = ({ data }) => {
  const { nodes } = data.allAirtable
  const html = nodes.map((node) => createHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div className="container" key={data.id}>
          <div className="content">
            <h1 className="has-text-danger" style={{ textAlign: "center" }}>
              PRIVATE PARTY AT PETE'S
            </h1>
            <p style={{ textAlign: "center" }}>
              Let us know a few details, and we'll get back to you fast! Check
              out the FAQ for more info.
            </p>
          </div>
        </div>
        <PrivatePartyForm />
        <div>{html}</div>
      </Layout>
    </>
  )
}

export default PrivateParty
