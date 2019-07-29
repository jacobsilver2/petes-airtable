import React from "react";
import { StyledTitle } from './CalendarStyles';

export function renderTitleWithoutLink(title, time) {
  return (
    <StyledTitle>{time} {title}</StyledTitle>
  );
}
