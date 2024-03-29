import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createEventsAndSeriesHtml from "../utility/createEventsAndSeriesHtml"
import BookingForm from "../components/Forms/BookingForm"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "booking" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          Content
          type
          website
          display
          id
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
    file(relativePath: { eq: "music_room_low_angle.jpeg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`

const BookingPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const myhtml = nodes.map((node) => createEventsAndSeriesHtml(node.data))
  return (
    <>
      <Layout
        fluid={data.file.childImageSharp.gatsbyImageData}
        fullheight={false}
      >
        <div>{myhtml}</div>
        <BookingForm />
      </Layout>
    </>
  )
}

export default BookingPage
