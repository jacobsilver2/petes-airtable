import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"
import EventBookingForm from "../components/Forms/EventBookingForm"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "host a cool event" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          Content
          type
        }
      }
    }
  }
`

const HostACoolEventComponent = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map((node) => createHtml(node.data))
  return (
    <>
      <Layout fullheight={false} fluid={null}>
        <div>
          {myhtml}
          <EventBookingForm />
        </div>
      </Layout>
    </>
  )
}

export default HostACoolEventComponent
