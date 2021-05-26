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
          Under current CDC guidance, the State of New York now allows music
          events to take place indoors, without social distancing, mask-free,
          with a 100% COVID-19 vaccinated audience (this includes artists and
          staff as well). You may attend any Pete’s Candy Store event if you are
          FULLY VACCINATED, meaning you have received the 2nd of 2 doses of the
          Moderna or Pfizer COVID-19 vaccine, or 1 dose of the Johnson & Johnson
          vaccine, more than 14 days prior to an event. Please read all
          attendance procedures below prior to your visit. We look forward to
          welcoming you back!
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Remember, a general rule of thumb still stands: if you do not feel
          well, please stay home, get tested, and get well!
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>CHECK-IN:</b> Patrons will be required to queue 6 feet apart
          outside the venue. We recommend that you arrive early, as check-in
          time may be lengthier than normal due to the below procedures. Please
          have your valid government issued ID and proof of COVID-19 Vaccination
          out and ready before arriving at the door.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Valid proof of vaccination includes:
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          1.{" "}
          <a href="https://epass.ny.gov/home" target="_blank">
            New York State Excelsior Pass
          </a>{" "}
          (fill out online, then download the{" "}
          <a
            href="https://apps.apple.com/us/app/nys-excelsior-pass-wallet/id1552933587"
            target="_blank"
          >
            NYS Excelsior Pass Wallet
          </a>{" "}
          in the app store to access your QR code, which we will scan at the
          door) <br />– OR – <br />
          2. A CDC-issued paper vaccination card.{" "}
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          Pete’s Candy Store has traditionally hosted free shows. We will,
          however, host occasional ticketed shows.{" "}
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>
            Refunds will not be given to anyone turned away at the door for
            failing to provide qualifying proof of vaccination (your ticket has
            already taken someone else’s spot!)
          </b>
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>INSIDE:</b>
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          - Masks are not required, but also not discouraged.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          - Please note that there are no social distancing requirements.
          Everyone inside the building will be fully vaccinated, including
          artists and staff.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          - Hand sanitizer is accessible throughout the venue
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          - Disposable masks are available by request behind the bar.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          - Our HVAC system is equipped with CDC-recommended MERV-13 air
          filters.
        </p>
        <br />
        <p style={{ textAlign: "center" }}>
          We ask for your patience and understanding as we continually adjust
          our operations to be as efficient and safe as possible in the
          post-COVID world. As always, thank you for continuing to support live
          music in NYC. We’ll see you soon!
        </p>
        <br />
        <br />
        <br />
        <p style={{ textAlign: "center" }}>---</p>
        <br />
        <br />
        <br />
        <p style={{ textAlign: "center" }}>
          <b>TERMS & CONDITIONS:</b> By entering Pete’s Candy Store, you
          voluntarily assume all risks related to exposure to COVID-19 and
          relinquish Pete’s Candy Store from any and all liability.
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
