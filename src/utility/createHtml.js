import React from "react"
import Img from "gatsby-image"
import Iframe from "react-iframe"

export default function createHtml(data) {
  switch (data.type) {
    case "button":
      return (
        <div className="container" key={data.id}>
          <div key={data.id} className="level">
            <div className="level-item">
              <a
                href={data.website}
                className="button is-large is-primary is-outlined is-rounded is-inverted"
              >
                {data.Content}
              </a>
            </div>
          </div>
        </div>
      )
    case "image":
      return (
        <div className="container" key={data.id}>
          <figure className="image">
            <Img fluid={data.Attachments.localFiles[0].childImageSharp.fluid} />
          </figure>
        </div>
      )
    case "text":
      return (
        <div className="container" key={data.id}>
          <div className="box">
            <p style={{ textAlign: "center" }}>{data.Content}</p>
          </div>
        </div>
      )
    case "video":
      return (
        <div className="container" key={data.id}>
          <Iframe
            url={data.website}
            width="100%"
            height="1000px"
            id="myId"
            className="myClassname"
            display="inline"
            position="relative"
          />
        </div>
      )
    default:
      return (
        <div key={data.id} className="container">
          <p className="content">I guess I'm the default...</p>
        </div>
      )
  }
}
