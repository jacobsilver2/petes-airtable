import React from "react"
import moment from "moment"
import {Wrapper, Events} from './CalendarStyles';
import CalendarEvent from './CalendarEvent';
import getRandomImage from '../../utility/getRandomImage';
import formatCalendarDate from '../../utility/formatCalendarDate';
import formatCalendarTime from '../../utility/formatCalendarTime';

const CalendarFrame = ({ data: {allAirtable, allFile} }) => {
  let prevDate = '';
  const renderedEvents = [];
  allAirtable.nodes.forEach(event => {
    const theEvent = 
      <CalendarEvent 
        isFirstEvent={!moment(event.data.Date).isSame(prevDate, 'day')}
        date={formatCalendarDate(event.data.Date)}
        time={formatCalendarTime(event.data.Date)}
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