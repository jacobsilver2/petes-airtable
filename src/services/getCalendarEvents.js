import Airtable from "airtable"

export const getAllEvents = async () => {
  const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
    "app4Eb0X39KtGToOS"
  )

  return new Promise((resolve, reject) => {
    let allRecords = []
    base("Events")
      .select({
        view: "Future",
      })
      .eachPage(
        (records, fetchNextPage) => {
          records.forEach((record) => {
            allRecords.push(record)
          })
          fetchNextPage()
        },
        (err) => {
          if (err) {
            reject(err)
            return
          }
          resolve(allRecords)
        }
      )
  })
}

export const getTodaysEvents = async () => {
  const base = new Airtable({
    apiKey: process.env.GATSBY_AIRTABLE_API,
  }).base("app4Eb0X39KtGToOS")

  return new Promise((resolve, reject) => {
    base("Events")
      .select({
        view: "Today",
      })
      .firstPage((err, records) => {
        if (err) {
          reject(err)
          return
        }
        resolve(records.map((record) => record.fields))
      })
  })
}
