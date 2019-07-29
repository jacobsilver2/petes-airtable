import React from "react";
import { StyledTitle, StyledLink } from './CalendarStyles';

export function renderTitleWithLink(title, link, time) {
  return (
    <StyledLink href={link}>
      <StyledTitle>{time} {title}</StyledTitle>
    </StyledLink>);
}
