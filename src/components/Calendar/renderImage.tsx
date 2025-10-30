import React from "react"
import { StyledImage } from "./CalendarStyles"

export function renderImage(image: string): React.JSX.Element {
  return (
    <StyledImage>
      <img
        src={image}
        height="300px"
        alt={image}
        style={{ maxHeight: "300px" }}
      />
    </StyledImage>
  )
}
