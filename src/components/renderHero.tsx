import React from "react"
import Image from "next/image"
import styled from "styled-components"

const StyledImg = styled(Image)`
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

export function renderHero(src: string, fullheight?: boolean, regular?: boolean): React.JSX.Element | undefined {
  if (src && fullheight) {
    return (
      <section className="hero is-fullheight-with-navbar">
        <Image src={src} alt="Hero" fill className="hero-body" style={{ objectFit: "cover" }} />
      </section>
    )
  }
  if (src && !regular) {
    return (
      <section className="hero has-bg-img">
        <div className="hero-body">
          <StyledImg
            src={src}
            alt="Hero"
            width={2048}
            height={1024}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    )
  }
  if (src && regular) {
    return (
      <section className="hero has-bg-img">
        <div className="hero-body">
          <Image src={src} alt="Hero" width={2048} height={1024} style={{ objectFit: "cover" }} />
        </div>
      </section>
    )
  }
}
