import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import createHtml from "../utility/createHtml"
import PrivatePartyForm from '../components/Forms/PrivatePartyForm';

export const pageQuery = graphql`
  {
    allAirtable(filter: { table: { eq: "private party" } }) {
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
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div>{myhtml}</div>
        <PrivatePartyForm />
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Private Party",
  url: "/private-party",
}

export default PrivateParty
