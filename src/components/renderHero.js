import React from "react"
import Img from "gatsby-image"

export function renderHero(fluid, fullheight) {
  if (fluid && fullheight) {
    return (
      <section className="hero is-fullheight">
        <Img className="hero-body" fluid={fluid} />
      </section>
    )
  }
  if (fluid) {
    return (
      <section className="hero">
        <Img className="hero-body" fluid={fluid} />
      </section>
    )
  }
}
