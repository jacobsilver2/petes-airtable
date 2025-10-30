import React from "react"
import { StyledTitle, StyledLink } from "./CalendarStyles"

export function renderTitleWithLink(title: string, link: string): React.JSX.Element {
  return (
    <StyledLink target="_blank" href={link}>
      <StyledTitle>{title}</StyledTitle>
    </StyledLink>
  )
}
