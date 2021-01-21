import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledImg = styled(Img)`
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
        <Img className="hero-body" fluid={fluid} />
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
          <Img fluid={fluid} imgStyle={{ objectFit: "cover" }} />
        </div>
      </section>
    )
  }
}
