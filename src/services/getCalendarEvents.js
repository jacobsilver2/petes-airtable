import axios from "axios"
import { airtableEventsUrl } from "../utility/airtableUrls"

export const getAllEvents = (url, events, resolve, reject) => {
  axios
    .get(url)
    .then(response => {
      const retrievedEvents = events.concat(response.data.records)
      if (response.data.offset) {
        getAllEvents(
          `${airtableEventsUrl}&view=Future&offset=${response.data.offset}`,
          retrievedEvents,
          resolve,
          reject
        )
      } else {
        resolve(retrievedEvents)
      }
    })
    .catch(error => {
      reject("something wrong")
    })
}

export const getTodaysEvents = (url, resolve, reject) => {
  axios
    .get(url)
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject("something wrong")
    })
}
