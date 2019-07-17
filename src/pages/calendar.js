import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CalendarEvent from '../components/CalendarEvent';

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
          Act_Blurb
          Act_Website
          Act_Image {
            raw {
              url
            }
          }
        }
      }
    }
  }
`



const CalendarPage = ({ data }) => {
  const { nodes } = data.allAirtable;
  const renderedCalendar = nodes.map(node => CalendarEvent(node.data))
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
  


