import React from "react"
import moment from "moment"
import {Wrapper, Events} from './CalendarStyles';
import CalendarEvent from './CalendarEvent';
import getRandomImage from '../../utility/getRandomImage';
import formatCalendarDate from '../../utility/formatCalendarDate';
import formatCalendarTime from '../../utility/formatCalendarTime';

const CalendarFrame = ({ events, data: {allFile} }) => {
  let prevDate = '';
  const renderedEvents = [];
  events.forEach(event => {
    console.log(event)
    const theEvent = 
      <CalendarEvent 
        isFirstEvent={!moment(event.fields.Date).isSame(prevDate, 'day')}
        date={formatCalendarDate(event.fields.Date)}
        time={formatCalendarTime(event.fields.Date)}
        image={event.fields['Act Image'] ? event.fields['Act Image'][0].url : getRandomImage(allFile.nodes)}
        title={event.fields.Name}
        blurb={event.fields['Act Blurb']}
        website={event.fields['Act Website']}
        id={event.id}
        key={event.id}
      />
    renderedEvents.push(theEvent);
    prevDate = event.fields.Date;
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