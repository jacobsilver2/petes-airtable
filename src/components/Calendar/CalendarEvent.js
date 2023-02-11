import React from "react"
import {
  Event,
  StyledDate,
  StyledBlurb,
  StyledContent,
  StyledContentContainer,
} from "./CalendarStyles"
import { renderTitleWithLink } from "./renderTitleWithLink"
import { renderImage } from "./renderImage"
import { renderTitleWithoutLink } from "./renderTitleWithoutLink"

export default function CalendarEvent({
  isFirstEvent,
  date,
  time,
  image,
  title,
  hosted,
  blurb,
  website,
  soundcloud,
  id,
  allDay,
}) {
  const renderHostedEvent = () => <StyledBlurb>{blurb}</StyledBlurb>

  const renderRegularEvent = () => (
    <StyledContent>
      {soundcloud && (
        <a target="_blank" rel="noopener noreferrer" href={soundcloud}>
          soundcloud
        </a>
      )}
      {soundcloud && website && " | "}
      {website && !allDay ? (
        <a target="_blank" href={website} rel="noopener noreferrer">
          website
        </a>
      ) : null}
    </StyledContent>
  )

  const renderAllDayEvent = () => (
    <StyledContent>
      {blurb && <StyledBlurb>{blurb}</StyledBlurb>}
      {website && (
        <a target="_blank" href={website} rel="noopener noreferrer">
          website
        </a>
      )}
    </StyledContent>
  )

  return (
    <>
      {isFirstEvent && <StyledDate>{date}</StyledDate>}
      <Event key={id}>
        {/* {renderImage(image)} */}
        <StyledContentContainer>
          {website
            ? renderTitleWithLink(title, website)
            : renderTitleWithoutLink(title)}
          {!allDay && <StyledContent>{`${time}`}</StyledContent>}
          {hosted && !allDay ? renderHostedEvent() : renderRegularEvent()}
          {allDay && renderAllDayEvent()}
        </StyledContentContainer>
      </Event>
    </>
  )
}
