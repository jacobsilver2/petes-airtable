import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CalendarEvent from '../components/CalendarEvent';
import CalendarEventCard from '../components/CalendarEventCard';

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Events" } }
      sort: {fields: data___Date}
      ) {
      nodes {
        data {
          Date
          Name
          id
          Act_Blurb
          Act_Website
          Act_Image {
            localFiles {
              childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`



const CalendarPage = ({ data }) => {
  const { nodes } = data.allAirtable;
  const renderedCalendar = nodes.map(node => CalendarEventCard(node.data))
  return (
    <Layout fluid={null} fullheight={false}>
      <div className="container"> 
      <h1 className="has-text-danger" style={{ textAlign: "center" }}>SHOWTIMES</h1>
      <p style={{ textAlign: "center" }}>ALL SHOWS ARE FREE(unless otherwise listed)</p>
      <p style={{ textAlign: "center" }}>($5 suggested donation)</p>
        {renderedCalendar}
      </div>
    </Layout>
  )
}


export const frontmatter = {
  title: "Calendar",
  url: "/calendar",
  navOrder: 2
}

export default CalendarPage;
  


