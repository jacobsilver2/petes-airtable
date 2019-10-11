import React, { useState } from "react"
import {
  Event,
  StyledDate,
  StyledBlurb,
  StyledContent,
  StyledContentContainer,
} from "./CalendarStyles"
import Truncate from "react-truncate"
import { renderTitleWithLink } from "./renderTitleWithLink"
import { renderImage } from "./renderImage"
import { renderTitleWithoutLink } from "./renderTitleWithoutLink"

//!test

export default function CalendarEvent({
  isFirstEvent,
  date,
  dateTwo,
  time,
  image,
  title,
  blurb,
  website,
  soundcloud,
  id,
}) {
  const [expanded, setExpanded] = useState(false)
  const [truncated, setTruncated] = useState(false)

  const toggleLines = e => {
    e.preventDefault()
    setExpanded(!expanded)
  }
  const handleTruncate = isTruncated => {
    truncated !== isTruncated && setTruncated(truncated)
  }

  const renderBlurb = blurb => (
    <StyledBlurb>
      <Truncate
        lines={!expanded && 3}
        ellipsis={
          <p
            style={{ color: "#ffff04", cursor: "pointer" }}
            onClick={e => toggleLines(e)}
          >
            Read More
          </p>
        }
        onTruncate={e => handleTruncate(e)}
      >
        {blurb}
      </Truncate>
      {!truncated && expanded && (
        <p
          style={{ color: "#ffff04", cursor: "pointer" }}
          onClick={e => toggleLines(e)}
        >
          Read Less{" "}
        </p>
      )}
    </StyledBlurb>
  )

  const content = renderBlurb(blurb)

  return (
    <>
      {isFirstEvent && <StyledDate>{date}</StyledDate>}
      <Event key={id}>
        {renderImage(image)}
        <StyledContentContainer>
          {website
            ? renderTitleWithLink(title, website, time)
            : renderTitleWithoutLink(title, time)}
          <StyledContent>{`${time}`}</StyledContent>
          <StyledContent>
            {soundcloud && (
              <a target="_blank" href={soundcloud}>
                soundcloud
              </a>
            )}
            {soundcloud && website && " | "}
            {website && (
              <a target="_blank" href={website}>
                website
              </a>
            )}
          </StyledContent>
        </StyledContentContainer>
      </Event>
    </>
  )
}
