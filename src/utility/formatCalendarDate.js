import moment from 'moment';

export default function formatCalendarDate(date) {
  return moment.utc(date).format('MMMM Do (dddd)');
}