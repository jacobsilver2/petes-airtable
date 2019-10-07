import React from "react"
import { StyledImage } from "./CalendarStyles"
import ImageZoom from "react-medium-image-zoom"

export function renderImage(image) {
  return (
    <StyledImage>
      <ImageZoom
        image={{
          src: image,
          style: { maxHeight: "300px" },
        }}
        zoomImage={{ src: image }}
      />
    </StyledImage>
  )
}
