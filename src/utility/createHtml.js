import React from "react"
import Img from "gatsby-image"

export default function createHtml(data) {
  switch (data.type) {
    case "button":
      return (
        <div className="container" key={data.id}>
          <div key={data.id} className="level">
            <div className="level-item">
              <a
                href={data.website}
                className="button is-large is-primary is-outlined is-rounded"
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
              <p style={{textAlign: 'center'}}>{data.Content}</p>
          </div>
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
