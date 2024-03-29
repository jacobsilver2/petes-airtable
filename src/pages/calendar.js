import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CalendarFrame from "../components/Calendar/CalendarFrame"
import { getAllEvents } from "../services/getCalendarEvents"
import getFirstEventIds from "../utility/returnFirstEventOfDate"
import { Circles } from "react-loader-spinner"

export const pageQuery = graphql`
  {
    allFile(filter: { name: { regex: "/rand/" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 300, height: 300, layout: CONSTRAINED)
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
    const getEvents = async () => {
      const eventsFromServer = await getAllEvents()
      setEvents(eventsFromServer)
      setIsLoading(false)
      setFirstEventIds(getFirstEventIds(eventsFromServer))
    }
    getEvents()
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
        <h1 className="has-text-danger" style={{ textAlign: "center" }}>
          SHOWTIMES
        </h1>
        <p style={{ textAlign: "center" }}>
          All shows are free and 21+ to attend (unless otherwise listed)
        </p>
        <p style={{ textAlign: "center" }}>($10 suggested donation)</p>
        <Circles
          visible={isLoading}
          style={{ textAlign: "center" }}
          color="#feff03"
        />
        {renderedCalendar}
      </div>
    </Layout>
  )
}

export default Calendar
