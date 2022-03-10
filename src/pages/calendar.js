import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import CalendarFrame from "../components/Calendar/CalendarFrame"
import { getAllEvents } from "../services/getCalendarEvents"
import { airtableEventsUrl } from "../utility/airtableUrls"
import getFirstEventIds from "../utility/returnFirstEventOfDate"
import Loader from "react-loader-spinner"

export const pageQuery = graphql`
  {
    allFile(filter: { name: { regex: "/rand/" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 300, maxHeight: 300) {
            ...GatsbyImageSharpFluid
            originalImg
          }
        }
      }
    }
  }
`

function Calendar(props) {
  const [events, setEvents] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [firstEventIds, setFirstEventIds] = useState([])

  useEffect(() => {
    new Promise((resolve, reject) => {
      getAllEvents(`${airtableEventsUrl}&view=Future`, [], resolve, reject)
    }).then(response => {
      setEvents(response)
      setIsLoading(false)
      setFirstEventIds(getFirstEventIds(response))
    })
  }, [])

  const renderedCalendar = (
    <CalendarFrame
      events={events}
      data={props.data}
      firstEvents={firstEventIds}
    />
  )

  return (
    <Layout fluid={null} fullheight={false}>
      <div className="container">
        {/* All code below currently disabled during COVID */}
        <h1 className="has-text-danger" style={{ textAlign: "center" }}>
          SHOWTIMES
        </h1>
        <p style={{ textAlign: "center" }}>
          All shows are free and 21+ to attend (unless otherwise listed)
        </p>
        <p style={{ textAlign: "center" }}>($5 suggested donation)</p>
        <Loader
          visible={isLoading}
          style={{ textAlign: "center" }}
          type="TailSpin"
          color="#feff03"
        />
        {renderedCalendar}
      </div>
    </Layout>
  )
}

export const frontmatter = {
  title: "Calendar",
  url: "/calendar",
  navOrder: 3,
}

export default Calendar
