// Environment variable checking utility
export const checkEnvironment = (): boolean => {
  const gatsbyKey: string | undefined = process.env.GATSBY_AIRTABLE_API
  const nextKey: string | undefined = process.env.NEXT_PUBLIC_AIRTABLE_API
  
  console.log('🔍 Environment Check:')
  console.log('- GATSBY_AIRTABLE_API:', gatsbyKey ? '✅ Set' : '❌ Missing')
  console.log('- NEXT_PUBLIC_AIRTABLE_API:', nextKey ? '✅ Set' : '❌ Missing')
  
  if (!gatsbyKey && !nextKey) {
    console.warn('⚠️  No Airtable API key found. Please set GATSBY_AIRTABLE_API in .env.local')
    return false
  }
  
  return true
}

// Get the active API key
export const getActiveApiKey = (): string | undefined => {
  return process.env.NEXT_PUBLIC_AIRTABLE_API
}

// Check if we're in development mode
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development'
}