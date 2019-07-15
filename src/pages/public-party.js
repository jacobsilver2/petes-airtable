import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import createHtml from "../utility/createHtml"
import PublicPartyForm from '../components/Forms/PublicPartyForm';

export const pageQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "public party" } }, sort: {fields: data___order}) {
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
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <PublicPartyForm />
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Public Party",
  url: "/public-party",
}

export default PublicParty
