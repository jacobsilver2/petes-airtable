import React from "react"
import Layout from "../components/layout"

function CovidInfo() {
  return (
    <Layout fluid={null} fullheight={false}>
      <div className="container">
        <h1 className="has-text-danger" style={{ textAlign: "center" }}>
          COVID-19 INFO & Guidelines
        </h1>
        <p style={{ textAlign: "center" }}>
          Proof of Vaccination Not Required. Any unvaccinated customers are
          asked to wear a mask when not seated.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          This important news means that we’ve hit a critical threshold in which
          the state’s COVID-19 New York Forward guidelines for eating and
          drinking establishments is now lifted, effective immediately,
          including cleaning and disinfection requirements, temperature and
          health screenings, collection of contact information for tracing,
          posting of related signage, etc. This also means that social
          distancing, table spacing and barriers are no longer required.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Restaurants, bars, and clubs may still implement these protocols if
          they want, but it is now optional.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Businesses may ask for proof of vaccination from patrons through paper
          form, digital application, or the State's{" "}
          <a href="https://epass.ny.gov/home" target="_blank">
            Excelsior Pass
          </a>{" "}
          Excelsior Pass. Alternatively, businesses may rely upon self-reporting
          of vaccination status (e.g., honor system), or post a sign at the
          front of the business asking unvaccinated individuals to inform the
          business of their status, in which case unvaccinated people should
          wear a mask if standing and not consuming food and beverage. But,
          businesses are not required to request proof of vaccination. We
          anticipate the State will release official details in the near future
          at which time we will be sure to share them with you.
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
