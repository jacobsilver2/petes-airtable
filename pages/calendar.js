import React, { useState, useEffect } from "react"
import Layout from "../src/components/layout"
import CalendarFrame from "../src/components/Calendar/CalendarFrame"
import { getAllEvents } from "../src/services/getCalendarEvents"
import getFirstEventIds from "../src/utility/returnFirstEventOfDate"
import { Circles } from "react-loader-spinner"

export async function getStaticProps() {
  // Create a list of random images (similar to what Gatsby provided)
  const randomImages = []
  for (let i = 1; i <= 29; i++) {
    randomImages.push(`/images/random/rand${i}.png`)
  }
  
  return {
    props: {
      randomImages,
    },
  }
}

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
      data={{ allFile: { nodes: props.randomImages } }}
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