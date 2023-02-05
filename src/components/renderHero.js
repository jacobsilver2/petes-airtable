import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const StyledImg = styled(GatsbyImage)`
  margin: auto;
  max-width: 2048px;
  /* margin: 1rem; */
  /* @media screen and (min-height: 751px) {
    max-height: 50vh;
  }
  @media screen and (max-height: 750px) {
    max-height: 70vh;
  } */
`

export function renderHero(fluid, fullheight, regular) {
  if (fluid && fullheight) {
    return (
      <section className="hero is-fullheight-with-navbar">
        <GatsbyImage image={fluid} className="hero-body" />
      </section>
    )
  }
  if (fluid && !regular) {
    return (
      <section className="hero has-bg-img">
        <div className="hero-body">
          <StyledImg
            fluid={fluid}
            imgStyle={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    )
  }
  if (fluid && regular) {
    return (
      <section className="hero has-bg-img">
        <div className="hero-body">
          <GatsbyImage image={fluid} imgStyle={{ objectFit: "cover" }} />
        </div>
      </section>
    )
  }
}
