import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import CalendarFrame from "../components/Calendar/CalendarFrame"
import { getAllEvents } from "../services/getCalendarEvents"
import { airtableEventsUrl } from "../utility/airtableUrls"
import getFirstEventIds from "../utility/returnFirstEventOfDate"
import Loader from "react-loader-spinner"

//? making a mock change to calendar to practice my Gitflow technique.

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
class calendar extends Component {
  state = { events: [], isLoading: true }

  componentDidMount() {
    new Promise((resolve, reject) => {
      getAllEvents(`${airtableEventsUrl}&view=Future`, [], resolve, reject)
    }).then(response => {
      this.setState({
        events: response,
        isLoading: false,
        firstEventIds: getFirstEventIds(response),
      })
    })
  }

  render() {
    const renderedCalendar = (
      <CalendarFrame
        events={this.state.events}
        data={this.props.data}
        firstEvents={this.state.firstEventIds}
      />
    )
    return (
      <Layout fluid={null} fullheight={false}>
        <div className="container">
          <h1 className="has-text-danger" style={{ textAlign: "center" }}>
            SHOWTIMES
          </h1>
          <p style={{ textAlign: "center" }}>
            ALL SHOWS ARE FREE(unless otherwise listed)
          </p>
          <p style={{ textAlign: "center" }}>($5 suggested donation)</p>
          <Loader
            visible={this.state.isLoading}
            style={{ textAlign: "center" }}
            type="TailSpin"
            color="#feff03"
          />
          {renderedCalendar}
        </div>
      </Layout>
    )
  }
}

export const frontmatter = {
  title: "Calendar",
  url: "/calendar",
  navOrder: 2,
}

export default calendar
