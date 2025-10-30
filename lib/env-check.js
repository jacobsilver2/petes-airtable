// Environment variable checking utility
export const checkEnvironment = () => {
  const gatsbyKey = process.env.GATSBY_AIRTABLE_API
  const nextKey = process.env.NEXT_PUBLIC_AIRTABLE_API
  
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
export const getActiveApiKey = () => {
  return process.env.GATSBY_AIRTABLE_API || process.env.NEXT_PUBLIC_AIRTABLE_API
}

// Check if we're in development mode
export const isDevelopment = () => {
  return process.env.NODE_ENV === 'development'
}