import Airtable from "airtable"

// Get API key from environment (supports both Gatsby and Next.js conventions)
const getApiKey = () => {
  return process.env.GATSBY_AIRTABLE_API || process.env.NEXT_PUBLIC_AIRTABLE_API
}

export const getAllEvents = async () => {
  const apiKey = getApiKey()
  if (!apiKey) {
    console.warn('Airtable API key not available')
    return []
  }
  
  const base = new Airtable({ apiKey }).base("app4Eb0X39KtGToOS")

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
  const apiKey = getApiKey()
  if (!apiKey) {
    console.warn('Airtable API key not available')
    return []
  }
  
  const base = new Airtable({ apiKey }).base("app4Eb0X39KtGToOS")

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
