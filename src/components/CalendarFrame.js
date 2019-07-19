import React, {useState} from "react"
import moment from "moment"
import styled from 'styled-components';
import randomBlurb from '../utility/fakeblurb';
import ImageZoom from 'react-medium-image-zoom';
import Truncate from 'react-truncate';


const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  border-radius: 4px;
`

const Events = styled.ul`
  border: 1px solid white;
`;

const Event = styled.li`
  margin-bottom: 3rem;
`;

const StyledDate = styled.div`
  border-top: 1px solid white;
  font-size: 3.0rem;
  color: white;
  text-align: center;
  padding-bottom: .5rem;
`;

const StyledBlurb = styled.div`

`;

const StyledImage = styled.div`
  width: 8rem;
  height: 8rem;
`
const StyledTitle = styled.h3`
  color: #ffff04;
  display: block;
  margin: 0 0 8px 0;
  font-size: 2rem;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

const StyledLink = styled.a`
  color: red;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

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

function getRandomImage(randomImages) {
  const randomImageIndex = Math.floor(Math.random() * randomImages.length);
  return randomImages[randomImageIndex].childImageSharp.fluid
}


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





const CalendarFrame = ({ data: {allAirtable, allFile} }) => {
  const [expanded, setExpanded] = useState(false);
  const [truncated, setTruncated] = useState(false)

  function toggleLines(event) {
    event.preventDefault();
    setExpanded(!expanded);
  }

  function handleTruncate(isTruncated) {
    if (truncated !== isTruncated) {
      setTruncated(truncated)
    }
  }


  let prevDate = '';
  const renderedEvents = [];

  function renderBlurb(blurb) {
    return (
      <StyledBlurb>
        <Truncate
          lines={!expanded && 3}
          ellipsis={(<span><a href='#' onClick={(e) => toggleLines(e)}>Read More</a></span>)}
          onTruncate={(e) => handleTruncate(e)}
        > 
          {blurb}
        </Truncate>
        {!truncated && expanded && (<span> <a href='#' onClick={(e) => toggleLines(e)}>Read Less</a> </span>)}
      </StyledBlurb>
    )
  }
  

  allAirtable.nodes.forEach(event => {
    const formattedDate = moment.utc(event.data.Date).format('MMMM Do (dddd)');
    const formattedTime = moment.utc(event.data.Date).format("h:mma")
    const theEvent = 
    <Event key={event.data.id}>
      {moment(event.data.Date).isSame(prevDate, 'day') ? null : <StyledDate>{formattedDate}</StyledDate>}
      <div className="media">
        {event.data.Act_Image ? renderImage(event.data.Act_Image.localFiles[0].childImageSharp.fluid) : renderImage(getRandomImage(allFile.nodes))}
        <div className="media-content">
            {event.data.Act_Website ? renderTitleWithLink(event.data.Name, event.data.Act_Website, formattedTime) : renderTitleWithoutLink(event.data.Name, formattedTime)}
            {event.data.Act_Blurb ? renderBlurb(event.data.Act_Blurb) : renderBlurb(randomBlurb())}
        </div>
      </div>
    </Event>;
    renderedEvents.push(theEvent);
    prevDate = event.data.Date;
  })


  return (
    <Wrapper>
      <Events>
        {renderedEvents}
      </Events>
    </Wrapper>
  )
}

export default CalendarFrame;