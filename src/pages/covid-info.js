import React from "react"
import Layout from "../components/layout"

function CovidInfo() {
  return (
    <Layout fluid={null} fullheight={false}>
      <div className="container">
        <h1 className="has-text-danger" style={{ textAlign: "center" }}>
          Covid Policy: Your Safety is our Priority
        </h1>
        <p style={{ textAlign: "center" }}>
          <b>
            In compliance with NYC guidance proof of vaccination is required for
            entry.
          </b>
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>
            We are asking patrons who have not yet had their booster shot to
            wait until 1 week after their booster shot before entering this
            establishment. We are asking performers to test before their
            performances, and attest to their negative status.
          </b>
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>
            We are open at full capacity to everyone who has been vaccinated
            against Covid.
          </b>{" "}
          We will require proof of current vaccination status (2 doses) at
          entry, either with a vaccination card (or photo of same) or the NYS
          Excelsior Pass or similar electronic system. For certain events we
          will be exercising some social distancing protocols.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>
            Current CDC guidelines recommend masks for all vaccinated patrons of
            indoor events in our area. We are making masks MANDATORY for both
            attendees and performers of events in our PERFORMANCE SPACE.
            Singers, readers, speakers are permitted to remove masks for their
            performances.
          </b>
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>We do not have a non-vaccinated seating section.</b> Should this
          guidance change by show day, we will adjust our policy accordingly.
          NYS Excelsior Pass info & signup{" "}
          <a
            href="https://covid19vaccine.health.ny.gov/excelsior-pass"
            target="_blank"
            rel="noreferrer noopener"
          >
            here
          </a>
          .
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Children under the age of 12 who are not currently eligible to receive
          a vaccine must be accompanied by a vaccinated adult and must wear a
          mask at all times.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          All Pete’s Candy Store staff and performers are fully vaccinated,
          masked, and have received their booster shots. Staff also test prior
          to any shift.
        </p>
      </div>
    </Layout>
  )
}

export default CovidInfo

export const frontmatter = {
  title: "Covid Info",
  url: "/covid-info",
  navOrder: 2,
}
