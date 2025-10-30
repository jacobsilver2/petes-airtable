const Airtable = require('airtable')

// Get API key from environment (supports both Gatsby and Next.js conventions)
const getApiKey = () => {
  return process.env.GATSBY_AIRTABLE_API || process.env.NEXT_PUBLIC_AIRTABLE_API
}

let base
const initializeAirtable = () => {
  const apiKey = getApiKey()
  if (apiKey) {
    return new Airtable({ apiKey })
  }
  return null
}

export const getAirtableData = async (baseId, tableName, view = null, filterByFormula = null) => {
  const airtable = initializeAirtable()
  if (!airtable) {
    console.warn('Airtable API key not available')
    return []
  }
  
  const base = airtable.base(baseId)
  const table = base(tableName)
  
  let query = table.select({
    maxRecords: 100,
    ...(view && { view }),
    ...(filterByFormula && { filterByFormula })
  })

  try {
    const records = await query.all()
    return records.map(record => ({
      id: record.id,
      data: record.fields
    }))
  } catch (error) {
    console.error('Error fetching from Airtable:', error)
    return []
  }
}

export const getHomeData = () => {
  return getAirtableData(
    'appNuB0fX4vQbOqdy',
    'home',
    null,
    '{display} = TRUE()'
  )
}

export const getEventsData = () => {
  return getAirtableData('app4Eb0X39KtGToOS', 'Events', 'Future')
}

export const getTodayGridData = () => {
  return getAirtableData('app4Eb0X39KtGToOS', 'Events', 'TodayGrid')
}