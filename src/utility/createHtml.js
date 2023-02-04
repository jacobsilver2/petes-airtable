import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledVideoContainer = styled.div`
  margin: 50px 25px;
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

export default function createHtml(node) {
  if (!node.data.display) return
  switch (node.data.type) {
    case "button":
      return (
        <div className="container" key={node.data.id}>
          <section className="section">
            <div key={node.data.id} className="level">
              <div className="level-item">
                {/* If the website is external we use a regular <a> tag, but if it's internal, we use the Link tag. */}
                {node.data.website.startsWith("http") ? (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-large is-primary is-outlined is-rounded is-inverted"
                    href={node.data.website}
                  >
                    {node.data.Content}
                  </a>
                ) : (
                  <Link
                    to={node.data.website}
                    className="button is-large is-primary is-outlined is-rounded is-inverted"
                  >
                    {node.data.Content}
                  </Link>
                )}
              </div>
            </div>
          </section>
        </div>
      )
    case "image":
      if (node.data.website) {
        if (node.data.website.includes("http")) {
          return (
            <div className="container" key={node.data.id}>
              <section className="section">
                <a
                  href={node.data.website}
                  className="image"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GatsbyImage
                    image={node.cloudinaryImg.childImageSharp.gatsbyImageData}
                  />
                </a>
              </section>
            </div>
          )
        }
        return (
          <div className="container" key={node.data.id}>
            <section className="section">
              <Link to={node.data.website} className="image">
                <GatsbyImage
                  image={node.cloudinaryImg.childImageSharp.gatsbyImageData}
                />
              </Link>
            </section>
          </div>
        )
      }
      if (node.data.email) {
        const emailWithMailto = `mailto:${node.data.email}`
        return (
          <div className="container" key={node.data.id}>
            <section className="section">
              <a href={emailWithMailto} className="image">
                <GatsbyImage
                  image={node.cloudinaryImg.childImageSharp.gatsbyImageData}
                />
              </a>
            </section>
          </div>
        )
      }
      return (
        <div className="container" key={node.data.id}>
          <section className="section">
            {node.cloudinaryImg.childImageSharp.gatsbyImageData && (
              <figure className="image">
                <GatsbyImage
                  image={node.cloudinaryImg.childImageSharp.gatsbyImageData}
                />
                {node.data.Content && (
                  <figcaption>{node.data.Content}</figcaption>
                )}
              </figure>
            )}
          </section>
        </div>
      )
    case "text":
      if (node.data.website) {
        return (
          <div className="container" key={node.data.id}>
            <div className="box">
              <a href={node.data.website}>
                {" "}
                <p style={{ textAlign: "center" }}>{node.data.Content}</p>{" "}
              </a>
            </div>
          </div>
        )
      }
      if (node.data.email) {
        const emailWithMailto = `mailto:${node.data.email}`
        return (
          <div className="container" key={node.data.id}>
            <div className="box">
              <a href={emailWithMailto}>
                {" "}
                <p style={{ textAlign: "center" }}>{node.data.Content}</p>{" "}
              </a>
            </div>
          </div>
        )
      }
      return (
        <div className="container" key={node.data.id}>
          <div className="box">
            <p style={{ textAlign: "center" }}>{node.data.Content}</p>
          </div>
        </div>
      )
    case "heading1":
      return (
        <div className="container" key={node.data.id}>
          <div className="content">
            <h1 className="has-text-danger" style={{ textAlign: "center" }}>
              {node.data.Content}
            </h1>
          </div>
        </div>
      )
    case "heading2":
      return (
        <div className="container" key={node.data.id}>
          <div className="content">
            <h2 className="has-text-danger" style={{ textAlign: "center" }}>
              {node.data.Content}
            </h2>
          </div>
        </div>
      )
    case "heading3":
      return (
        <div className="container" key={node.data.id}>
          <div className="content">
            <h3 style={{ textAlign: "center" }}>{node.data.Content}</h3>
          </div>
        </div>
      )
    case "video":
      return (
        <div className="container" key={node.data.id}>
          <StyledVideoContainer>
            <iframe
              title={node.data.Name}
              src={node.data.website}
              width="853"
              height="480"
            />
          </StyledVideoContainer>
        </div>
      )
    default:
      return (
        <div key={node.data.id} className="container">
          <p className="content">I guess I'm the default...</p>
        </div>
      )
  }
}
