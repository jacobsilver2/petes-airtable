import React from "react"
import {
  Event,
  StyledDate,
  StyledBlurb,
  StyledContent,
  StyledContentContainer,
} from "./CalendarStyles"
// import Truncate from "react-truncate"
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
}) {
  //! All this code is unused but will stay in, in case we decide to bring back blurbs
  // const [expanded, setExpanded] = useState(false)
  // const [truncated, setTruncated] = useState(false)

  // const toggleLines = e => {
  //   e.preventDefault()
  //   setExpanded(!expanded)
  // }
  // const handleTruncate = isTruncated => {
  //   truncated !== isTruncated && setTruncated(truncated)
  // }

  // const renderBlurb = blurb => (
  //   <StyledBlurb>
  //     <Truncate
  //       lines={!expanded && 3}
  //       ellipsis={
  //         <p
  //           style={{ color: "#ffff04", cursor: "pointer" }}
  //           onClick={e => toggleLines(e)}
  //         >
  //           Read More
  //         </p>
  //       }
  //       onTruncate={e => handleTruncate(e)}
  //     >
  //       {blurb}
  //     </Truncate>
  //     {!truncated && expanded && (
  //       <p
  //         style={{ color: "#ffff04", cursor: "pointer" }}
  //         onClick={e => toggleLines(e)}
  //       >
  //         Read Less{" "}
  //       </p>
  //     )}
  //   </StyledBlurb>
  // )

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
          {hosted ? (
            <StyledBlurb>{blurb}</StyledBlurb>
          ) : (
            <StyledContent>
              {soundcloud && (
                <a target="_blank" rel="noopener noreferrer" href={soundcloud}>
                  soundcloud
                </a>
              )}
              {soundcloud && website && " | "}
              {website && (
                <a target="_blank" href={website} rel="noopener noreferrer">
                  website
                </a>
              )}
            </StyledContent>
          )}
        </StyledContentContainer>
      </Event>
    </>
  )
}
