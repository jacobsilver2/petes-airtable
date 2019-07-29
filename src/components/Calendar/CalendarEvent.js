import React, {useState} from "react"
import {Event, StyledDate, StyledBlurb} from './CalendarStyles';
import Truncate from 'react-truncate';
import { renderTitleWithLink } from "./renderTitleWithLink";
import { renderImage } from "./renderImage";
import { renderTitleWithoutLink } from "./renderTitleWithoutLink";

export default function CalendarEvent({isFirstEvent, date, time, image, title, blurb, website, id}) {
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);

  const toggleLines = e => {
    e.preventDefault();
    setExpanded(!expanded);
  }
  const handleTruncate = isTruncated => {
    // if (truncated !== isTruncated) { setTruncated(truncated) }
    truncated !== isTruncated && setTruncated(truncated)
  }

  const renderBlurb = blurb => (
      <StyledBlurb>
        <Truncate
          lines={!expanded && 3}
          ellipsis={(<p><a style={{color: '#ffff04'}} href='#' onClick={(e) => toggleLines(e)}>Read More</a></p>)}
          onTruncate={e => handleTruncate(e)}
        > 
          {blurb}
        </Truncate>
        {!truncated && expanded && (<p> <a style={{color: '#ffff04'}} href='#' onClick={e => toggleLines(e)}>Read Less</a> </p>)}
      </StyledBlurb>
  )

  return (
    <Event key={id}>
      { isFirstEvent && <StyledDate>{date}</StyledDate> }
      <div className="media">
        {renderImage(image)}
        <div className="media-content">
          { website ? renderTitleWithLink(title, website, time) : renderTitleWithoutLink(title, time) }
          {renderBlurb(blurb)}
        </div>
      </div>
    </Event>
  )
}
