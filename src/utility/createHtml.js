import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { Link } from "gatsby"
import ImageGallery from "react-image-gallery"

export const StyledVideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export default function createHtml(data) {
  switch (data.type) {
    case "button":
      return (
        <div className="container" key={data.id}>
          <section className="section">
            <div key={data.id} className="level">
              <div className="level-item">
                {data.website.startsWith("http") ? (
                  <a
                    target="_blank"
                    className="button is-large is-primary is-outlined is-rounded is-inverted"
                    href={data.website}
                  >
                    {data.Content}
                  </a>
                ) : (
                  <Link
                    to={data.website}
                    className="button is-large is-primary is-outlined is-rounded is-inverted"
                  >
                    {data.Content}
                  </Link>
                )}
              </div>
            </div>
          </section>
        </div>
      )
    case "image":
      if (data.website) {
        if (data.website.includes("http")) {
          return (
            <div className="container" key={data.id}>
              <section className="section">
                <a href={data.website} className="image" target="_blank">
                  <Img
                    fluid={data.Attachments.localFiles[0].childImageSharp.fluid}
                  />
                </a>
              </section>
            </div>
          )
        }
        return (
          <div className="container" key={data.id}>
            <section className="section">
              <Link to={data.website} className="image">
                <Img
                  fluid={data.Attachments.localFiles[0].childImageSharp.fluid}
                />
              </Link>
            </section>
          </div>
        )
      }
      if (data.email) {
        const emailWithMailto = `mailto:${data.email}`
        return (
          <div className="container" key={data.id}>
            <section className="section">
              <a href={emailWithMailto} className="image">
                <Img
                  fluid={data.Attachments.localFiles[0].childImageSharp.fluid}
                />
              </a>
            </section>
          </div>
        )
      }
      return (
        <div className="container" key={data.id}>
          <section className="section">
            <figure className="image">
              <Img
                fluid={data.Attachments.localFiles[0].childImageSharp.fluid}
              />
            </figure>
          </section>
        </div>
      )
    case "text":
      if (data.website) {
        return (
          <div className="container" key={data.id}>
            <div className="box">
              <a href={data.website}>
                {" "}
                <p style={{ textAlign: "center" }}>{data.Content}</p>{" "}
              </a>
            </div>
          </div>
        )
      }
      if (data.email) {
        const emailWithMailto = `mailto:${data.email}`
        return (
          <div className="container" key={data.id}>
            <div className="box">
              <a href={emailWithMailto}>
                {" "}
                <p style={{ textAlign: "center" }}>{data.Content}</p>{" "}
              </a>
            </div>
          </div>
        )
      }
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
            <h1 className="has-text-danger" style={{ textAlign: "center" }}>
              {data.Content}
            </h1>
          </div>
        </div>
      )
    case "heading2":
      return (
        <div className="container" key={data.id}>
          <div className="content">
            <h2 className="has-text-danger" style={{ textAlign: "center" }}>
              {data.Content}
            </h2>
          </div>
        </div>
      )
    case "heading3":
      return (
        <div className="container" key={data.id}>
          <div className="content">
            <h3 style={{ textAlign: "center" }}>{data.Content}</h3>
          </div>
        </div>
      )
    case "video":
      return (
        <div className="container" key={data.id}>
          <StyledVideoContainer>
            <iframe
              title={data.Name}
              src={data.website}
              width="853"
              height="480"
            />
          </StyledVideoContainer>
        </div>
      )
    case "gallery":
      const arrayforGallery = []
      data.Attachments.localFiles.forEach(file => {
        arrayforGallery.push({ original: file.childImageSharp.fluid.src })
      })
      return (
        <div className="container" key={data.id}>
          <ImageGallery items={arrayforGallery} />
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
