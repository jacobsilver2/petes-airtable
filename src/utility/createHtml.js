import React from "react"
import Img from "gatsby-image"
import styled from 'styled-components';

export const StyledVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px; height: 0; overflow: hidden;
  iframe, object, embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

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
    case "heading1":
      return (
        <div className="container" key={data.id}>
          <div className="content">
            <h1 className="has-text-danger" style={{textAlign: "center"}}>{data.Content}</h1>
          </div>
        </div>
      )
    case "heading2":
      return (
        <div className="container" key={data.id}>
          <div className="content">
            <h2 className="has-text-danger" style={{textAlign: "center"}}>{data.Content}</h2>
          </div>
        </div>
      )
    case "heading3":
      return (
        <div className="container" key={data.id}>
          <div className="content">
            <h3 style={{textAlign: "center"}}>{data.Content}</h3>
          </div>
        </div>
      )
    case "video":
      return (
        <div className="container" key={data.id}>
          <StyledVideoContainer>
            <iframe src={data.website} width='853' height='480'/>
          </StyledVideoContainer>
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
