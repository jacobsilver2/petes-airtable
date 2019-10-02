import React, { useState } from "react"
import ReactPlayer from "react-player"
import { Event, StyledDate, StyledBlurb } from "./CalendarStyles"
import Truncate from "react-truncate"
import { renderTitleWithLink } from "./renderTitleWithLink"
import { renderImage } from "./renderImage"
import { renderTitleWithoutLink } from "./renderTitleWithoutLink"
import styled from "styled-components"

const PlayerWrapper = styled.div`
  .player-wrapper {
    position: relative;
    padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
  }
`

export default function CalendarEvent({
  isFirstEvent,
  date,
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

  // const content = soundcloud ? (
  //   <PlayerWrapper>
  //     <ReactPlayer
  //       url={soundcloud}
  //       config={{
  //         soundcloud: {
  //           options: {
  //             show_user: "false",
  //             sharing: "false",
  //             download: "false",
  //             show_artwork: "false",
  //             color: "#fcec03",
  //           },
  //         },
  //       }}
  //     />
  //   </PlayerWrapper>
  // ) : (
  //   renderBlurb(blurb)
  // )

  const content = renderBlurb(blurb)

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
