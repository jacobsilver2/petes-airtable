import React from "react"
import BackgroundImage from "gatsby-background-image"
import styled from "styled-components"

const BackgroundImg = styled(BackgroundImage)`
  height: 85vh;
  width: 100vw;
  background-color: transparent;
  background-size: cover;
  background-position: top center;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 60vh;
    background-position: center bottom;
  }
`

const BackgroundSection = ({ fluid }) => {
  return <BackgroundImg fluid={fluid} />
}

export default BackgroundSection
