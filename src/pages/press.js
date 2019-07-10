import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"
import createHtml from '../utility/createHtml';

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "press" } }
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
  }
`

const PressPage = ({ data }) => {
  const { nodes } = data.allAirtable;
  const myhtml = nodes.map(node => createHtml(node.data))
  return (
    <>
      <Layout>
        <div>
          {myhtml}
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Press",
  url: '/press'
}
export default PressPage;
