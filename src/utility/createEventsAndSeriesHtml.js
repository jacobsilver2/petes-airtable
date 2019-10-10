import React from "react"
import { Link } from "gatsby"

export default function createEventsAndSeriesHtml(data) {
  switch (data.type) {
    case "heading1":
      return (
        <div className="container" key={data.id}>
          <div className="content">
            <h1
              className="has-text-danger"
              style={{
                textAlign: "center",
                marginTop: "3rem",
                marginBottom: "0",
              }}
            >
              {data.Content}
            </h1>
          </div>
        </div>
      )
    case "heading2":
      return (
        <div className="container" key={data.id}>
          <div className="content">
            <h2
              className="has-text-danger"
              style={{
                textAlign: "center",
                marginTop: "3rem",
                marginBottom: "0",
              }}
            >
              {data.Content}
            </h2>
          </div>
        </div>
      )
    case "subtext":
      return (
        <div className="container" key={data.id}>
          <div className="box">
            <p
              style={{
                textAlign: "center",
                marginTop: "0",
                marginBottom: "-2rem",
                fontWeight: "bold",
              }}
            >
              {data.Content}
            </p>
          </div>
        </div>
      )
    case "text":
      if (data.website) {
        if (data.website.startsWith("http")) {
          return (
            <div className="container" key={data.id}>
              <div className="box">
                <p
                  style={{
                    textAlign: "left",
                    marginTop: "0",
                    marginBottom: "-2rem",
                  }}
                >
                  <a target="_blank" href={data.website}>
                    {data.Content}
                  </a>
                </p>
              </div>
            </div>
          )
        }
        return (
          <div className="container" key={data.id}>
            <div className="box">
              <p
                style={{
                  textAlign: "left",
                  marginTop: "0",
                  marginBottom: "-2rem",
                }}
              >
                <Link to={data.website}>{data.Content}</Link>
              </p>
            </div>
          </div>
        )
      }
      return (
        <div className="container" key={data.id}>
          <div className="box">
            <p
              style={{
                textAlign: "left",
                marginTop: "0",
                marginBottom: "-1rem",
              }}
            >
              {data.Content}
            </p>
          </div>
        </div>
      )

    default:
      return <div></div>
  }
}
