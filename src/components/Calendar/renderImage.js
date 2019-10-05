import React from "react"
import { StyledImage } from "./CalendarStyles"
import ImageZoom from "react-medium-image-zoom"

export function renderImage(image) {
  return (
    <StyledImage className="media-left">
      <p className="image is-128x128">
        <ImageZoom image={{ src: image }} zoomImage={{ src: image }} />
      </p>
    </StyledImage>
  )
}
