import Airtable from 'airtable'
import type { AirtableRecord } from '../types'

// Get API key from environment
const getApiKey = (): string | undefined => {
  return process.env.NEXT_PUBLIC_AIRTABLE_API
}

const initializeAirtable = (): Airtable | null => {
  const apiKey = getApiKey()
  if (apiKey) {
    return new Airtable({ apiKey })
  }
  return null
}

export const getAirtableData = async (
  baseId: string, 
  tableName: string, 
  view?: string | null, 
  filterByFormula?: string | null
): Promise<AirtableRecord[]> => {
  const airtable = initializeAirtable()
  if (!airtable) {
    console.warn('Airtable API key not available')
    return []
  }
  
  const base = airtable.base(baseId)
  const table = base(tableName)
  
  const query = table.select({
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

export const getHomeData = (): Promise<AirtableRecord[]> => {
  return getAirtableData(
    'appNuB0fX4vQbOqdy',
    'home',
    null,
    '{display} = TRUE()'
  )
}

export const getEventsData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('app4Eb0X39KtGToOS', 'Events', 'Future')
}

export const getTodayGridData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('app4Eb0X39KtGToOS', 'Events', 'TodayGrid')
}

export const getBookingData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('appNuB0fX4vQbOqdy', 'booking')
}

export const getContactData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('appNuB0fX4vQbOqdy', 'contact')
}

export const getEventsAndSeriesData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('appNuB0fX4vQbOqdy', 'events and series')
}

export const getGalleryData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('appNuB0fX4vQbOqdy', 'gallery')
}

export const getHistoryData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('appNuB0fX4vQbOqdy', 'history')
}

export const getMenuData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('appNuB0fX4vQbOqdy', 'menu')
}

export const getOpenMicData = (): Promise<AirtableRecord[]> => {
  return getAirtableData('appNuB0fX4vQbOqdy', 'open mic')
}