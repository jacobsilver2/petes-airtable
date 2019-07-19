import React, {useState} from "react"
import {Event, StyledDate, StyledBlurb, StyledImage, StyledTitle, StyledLink} from './CalendarStyles';
import ImageZoom from 'react-medium-image-zoom';
import Truncate from 'react-truncate';



function renderTitleWithLink(title, link, time) {
  return (
    <StyledLink href={link}>
      <StyledTitle>{time} {title}</StyledTitle>
    </StyledLink>
  )
}

function renderTitleWithoutLink(title, time) {
  return (
    <StyledTitle>{time} {title}</StyledTitle>
  )
}

  function renderImage(image){
    return (
      <StyledImage className="media-left">
        <ImageZoom 
          image={{src: image.src}}
          zoomImage={{src: image.originalImg}}
        />
        
      </StyledImage>
    )
  }

function CalendarEvent({isFirstEvent, date, time, image, title, blurb, website, id}) {
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false);

  function renderBlurb(blurb) {
    return (
      <StyledBlurb>
        <Truncate
          lines={!expanded && 3}
          ellipsis={(<p><a href='#' onClick={(e) => toggleLines(e)}>Read More</a></p>)}
          onTruncate={(e) => handleTruncate(e)}
        > 
          {blurb}
        </Truncate>
        {!truncated && expanded && (<p> <a href='#' onClick={(e) => toggleLines(e)}>Read Less</a> </p>)}
      </StyledBlurb>
    )
  }

  function toggleLines(event) {
    event.preventDefault();
    setExpanded(!expanded);
  }

  function handleTruncate(isTruncated) {
    if (truncated !== isTruncated) {
      setTruncated(truncated)
    }
  }


  return (
    <Event key={id}>
      {isFirstEvent && <StyledDate>{date}</StyledDate>}
      <div className="media">
        {renderImage(image)}
        <div className="media-content">
          {website ? renderTitleWithLink(title, website, time) : renderTitleWithoutLink(title, time)}
          {renderBlurb(blurb)}
        </div>
      </div>
    </Event>
  )
}
export default CalendarEvent
