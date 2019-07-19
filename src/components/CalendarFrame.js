import React from "react"
import moment from "moment"
import {Wrapper, Events } from './CalendarStyles';
import CalendarEvent from './CalendarEvent';



function getRandomImage(randomImages) {
  const randomImageIndex = Math.floor(Math.random() * randomImages.length);
  return randomImages[randomImageIndex].childImageSharp.fluid
}

const CalendarFrame = ({ data: {allAirtable, allFile} }) => {

  let prevDate = '';
  const renderedEvents = [];

  allAirtable.nodes.forEach(event => {
    const formattedDate = moment.utc(event.data.Date).format('MMMM Do (dddd)');
    const formattedTime = moment.utc(event.data.Date).format("h:mma")
    const theEvent = 
    <CalendarEvent 
      isFirstEvent={!moment(event.data.Date).isSame(prevDate, 'day')}
      date={formattedDate}
      time={formattedTime}
      image={event.data.Act_Image ? event.data.Act_Image.localFiles[0].childImageSharp.fluid : getRandomImage(allFile.nodes)}
      title={event.data.Name}
      blurb={event.data.Act_Blurb}
      website={event.data.Act_Website}
      id={event.data.id}
    />
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