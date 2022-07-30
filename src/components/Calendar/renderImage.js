import React from "react"
import { StyledImage } from "./CalendarStyles"

export function renderImage(image) {
  return (
    <StyledImage>
      <img src={image} alt={image} style={{ maxHeight: "300px" }} />
    </StyledImage>
  )
}
