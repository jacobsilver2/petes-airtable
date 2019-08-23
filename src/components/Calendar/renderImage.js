import React from "react";
import { StyledImage } from './CalendarStyles';
import ImageZoom from 'react-medium-image-zoom';

export function renderImage(image) {
  return (
    <StyledImage className="media-left">
      <ImageZoom image={{ src: image }} zoomImage={{ src: image }} />
    </StyledImage>);
}
