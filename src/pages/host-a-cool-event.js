import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout';
import createHtml from "../utility/createHtml"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "host a cool event" } }
      sort: { order: ASC, fields: data___order }
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
`;

const HostACoolEventComponent = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout fullheight={false} fluid={null}>
        <div>
          {myhtml}
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Host A Cool Event",
  url: "/host-a-cool-event"
}

export default HostACoolEventComponent;