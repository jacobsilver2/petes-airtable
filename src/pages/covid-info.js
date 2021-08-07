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
            UPDATE: Mayor de Blasio has announced that beginning August 16,
            proof of COVID-19 vaccination will be required for indoor
            entertainment in NYC.
          </b>
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>
            We are open at full capacity to everyone who has been vaccinated
            against Covid.
          </b>{" "}
          We will require proof of current vaccination status at entry, either
          with a vaccination card (or photo of same) or the NYS Excelsior Pass
          or similar electronic system. We will also accept proof of negative
          COVID test results taken within 72 hours prior.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>
            Current CDC guidelines recommend masks for all vaccinated patrons of
            indoor events in our area. This is not mandatory.{" "}
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
          <b>Children under the age of 12</b> who are not currently eligible to
          receive a vaccine must be accompanied by a vaccinated adult and must
          wear a mask at all times.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          All Pete’s Candy Store staff and performers are fully vaccinated.
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
