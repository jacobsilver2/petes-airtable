import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createEventsAndSeriesHtml from "../utility/createEventsAndSeriesHtml"

export const pageQuery = graphql`{
  allAirtable(
    filter: {table: {eq: "events and series"}}
    sort: {data: {order: ASC}}
  ) {
    nodes {
      data {
        Name
        Content
        type
        website
        id
        display
        Attachments {
          localFiles {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
  file(relativePath: {eq: "EventsHeaderImage.jpeg"}) {
    childImageSharp {
      gatsbyImageData(quality: 100, layout: FULL_WIDTH)
    }
  }
}`

const EventsAndSeriesPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map((node) => createEventsAndSeriesHtml(node.data))
  return <>
    <Layout fluid={data.file.childImageSharp.gatsbyImageData} fullheight={false}>
      <div>{myhtml}</div>
    </Layout>
  </>;
}

export default EventsAndSeriesPage
