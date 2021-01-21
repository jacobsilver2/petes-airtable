import React from "react"
import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ fluid }) => {
  return (
    <BackgroundImage
      style={{
        height: `85vh`,
        width: `100vw`,
        backgroundColor: `transparent`,
        backgroundSize: `cover`,
        backgroundPosition: `top center`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: "center",
      }}
      fluid={fluid}
    />
  )
}

export default BackgroundSection
