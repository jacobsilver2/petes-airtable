import React from "react"
import { StyledTitle, StyledLink } from "./CalendarStyles"

export function renderTitleWithLink(title, link, time) {
  return (
    <StyledLink target="_blank" href={link}>
      <StyledTitle>{title}</StyledTitle>
    </StyledLink>
  )
}
