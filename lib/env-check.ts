// Environment variable checking utility
export const checkEnvironment = (): boolean => {
  const serverKey: string | undefined = process.env.AIRTABLE_API
  const gatsbyKey: string | undefined = process.env.GATSBY_AIRTABLE_API

  console.log('🔍 Environment Check:')
  console.log('- AIRTABLE_API:', serverKey ? '✅ Set' : '❌ Missing')
  console.log('- GATSBY_AIRTABLE_API:', gatsbyKey ? '✅ Set' : '❌ Missing')

  if (!serverKey && !gatsbyKey) {
    console.warn('⚠️  No Airtable API key found. Please set AIRTABLE_API in .env.local')
    return false
  }

  return true
}

export const getActiveApiKey = (): string | undefined => {
  return process.env.AIRTABLE_API || process.env.GATSBY_AIRTABLE_API
}

// Check if we're in development mode
export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === 'development'
}