import React, { useState } from "react"
import { Event, StyledDate, StyledBlurb } from "./CalendarStyles"
import Truncate from "react-truncate"
import { renderTitleWithLink } from "./renderTitleWithLink"
import { renderImage } from "./renderImage"
import { renderTitleWithoutLink } from "./renderTitleWithoutLink"

export default function CalendarEvent({
  isFirstEvent,
  date,
  time,
  image,
  title,
  blurb,
  website,
  soundcloud,
  bandcamp,
  id,
}) {
  const [expanded, setExpanded] = useState(false)
  const [truncated, setTruncated] = useState(false)

  const toggleLines = e => {
    e.preventDefault()
    setExpanded(!expanded)
  }
  const handleTruncate = isTruncated => {
    // if (truncated !== isTruncated) { setTruncated(truncated) }
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

  let content = null
  if (soundcloud) {
    content = soundcloud
  } else if (bandcamp) {
    content = bandcamp
  } else {
    content = renderBlurb(blurb)
  }

  return (
    <Event key={id}>
      {isFirstEvent && <StyledDate>{date}</StyledDate>}
      <div className="media">
        {renderImage(image)}
        <div className="media-content">
          {website
            ? renderTitleWithLink(title, website, time)
            : renderTitleWithoutLink(title, time)}
          {content}
        </div>
      </div>
    </Event>
  )
}
