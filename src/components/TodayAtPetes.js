import React, { Component } from "react"
import {getTodaysEvents} from '../services/getCalendarEvents';
import formatCalendarTime from "../utility/formatCalendarTime"

class TodayAtPetes extends Component {
  state = { events: [] }
  componentDidMount() {
    new Promise((resolve, reject) => {
      getTodaysEvents(`https://api.airtable.com/v0/app4Eb0X39KtGToOS/Events?api_key=${process.env.GATSBY_AIRTABLE_API}&view=Today`, resolve, reject)
    })
      .then(response => {
        this.setState({events: response.data.records})
      })
  }
  render() {
    const html = this.state.events.map(event => (
      <h2
        key={event.id}
        style={{ fontSize: "1.53em" }}
        className="has-text-danger has-text-centered has-text-weight-bold"
      >
        {`${formatCalendarTime(
          event.fields.Date
        )} ${event.fields.Name.toUpperCase()}`}
      </h2>
    ))
    return (
      <>
        <h1
          style={{ fontSize: "2em", marginBottom: "0.5em" }}
          className="has-text-danger has-text-centered has-text-weight-bold"
        >
          TONIGHT AT PETE'S
        </h1>
        {html}
      </>
    )
  }
}

export default TodayAtPetes

