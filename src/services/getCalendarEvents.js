import axios from 'axios';

const getEvents = (url, events, resolve, reject) => {
  axios.get(url)
    .then(response => {
      const retrievedEvents = events.concat(response.data.records)
      if (response.data.offset) {
        getEvents(`https://api.airtable.com/v0/app4Eb0X39KtGToOS/Events?api_key=${process.env.GATSBY_AIRTABLE_API}&view=Future&offset=${response.data.offset}`, retrievedEvents, resolve, reject)
      } else {
        resolve(retrievedEvents)
      }
    })
    .catch(error => {
      reject('something wrong')
    })
}

export default getEvents;

