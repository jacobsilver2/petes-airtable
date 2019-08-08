import React from "react"
import Img from "gatsby-image"
import styled from 'styled-components';

const StyledImg = styled(Img)`
  /* margin: 1rem; */

  @media screen and (min-height: 751px) {
    max-height: calc(50vh);
  }
  @media screen and (max-height: 750px) {
    max-height: 70vh;
  }
`;

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
        <StyledImg className="hero-body" fluid={fluid} imgStyle={{ objectFit: 'cover' }}/>
      </section>
    )
  }
}
