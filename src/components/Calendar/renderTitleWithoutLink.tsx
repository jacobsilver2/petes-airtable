import React from "react"
import { StyledTitle } from "./CalendarStyles"

export function renderTitleWithoutLink(title: string): React.JSX.Element {
  return <StyledTitle>{title}</StyledTitle>
}
