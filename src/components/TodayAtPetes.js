import React from "react"
import { StaticQuery, graphql } from "gatsby"
import formatCalendarTime from "../utility/formatCalendarTime"

export const pageQuery = graphql`
  {
    allAirtable(filter: { queryName: { eq: "TodayGrid" } }) {
      edges {
        node {
          data {
            Name
            Date
            id
          }
        }
      }
    }
  }
`

export default () => (
  <StaticQuery 
    query={pageQuery}
    render={data => {
      const html = data.allAirtable.edges.map(edge => (
        <h2 key={edge.node.data.id} style={{fontSize: '1.5em'}} className="has-text-danger has-text-centered has-text-weight-bold">{`${formatCalendarTime(edge.node.data.Date)} ${edge.node.data.Name.toUpperCase()}`}</h2>
      ))
      return (
        <>
          <h1 style={{fontSize: '2em', marginBottom: '0.5em'}} className="has-text-danger has-text-centered has-text-weight-bold">TONIGHT AT PETE'S</h1>
          {html}
        </>
      )
    }}
  />
)

