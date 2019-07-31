import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/layout"
import createEventsAndSeriesHtml from '../utility/createEventsAndSeriesHtml';

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "events and series" } }
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
    file(relativePath: { eq: "events.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const EventsAndSeriesPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map(node => createEventsAndSeriesHtml(node.data))
  return (
    <>
      <Layout fluid={data.file.childImageSharp.fluid} fullheight={false}>
        <div>
          {myhtml}
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Events and Series",
  url: '/events-and-series',
  navOrder: 3
}
export default EventsAndSeriesPage;
