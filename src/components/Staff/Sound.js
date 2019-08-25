import React, {Component} from 'react';
import formatCalendarTime from "../../utility/formatCalendarTime"
import formatCalendarDate from '../../utility/formatCalendarDate'
import SoundCard from './SoundCard';
import { airtableEventsUrl } from '../../utility/airtableUrls';

class SoundClass extends Component {
  state = { 
    events: []
   }

   componentDidMount() {
    fetch(`${airtableEventsUrl}&view=TodayGrid`)
    .then((resp) => resp.json())
    .then(data => {
       this.setState({ events: data.records });
    }).catch(err => {
      console.log(err)
    });
   }
   

  render() {
    const cards = this.state.events.map(event => (
      <SoundCard 
        key={event.id}
        name={event.fields.Name}
        time={formatCalendarTime(event.fields.Date)}
        date={formatCalendarDate(event.fields.Date)}
        id={event.id}
        initialReport={event.fields.Report}
        initialDraw={event.fields.Draw}
      />
    ))
    return (
      <>
        {cards}
      </>
    );
  }
}

export default SoundClass;