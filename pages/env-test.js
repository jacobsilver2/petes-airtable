import { useState, useEffect } from 'react'
import { checkEnvironment, getActiveApiKey, isDevelopment } from "../lib/env-check"

export async function getServerSideProps() {
  const hasEnv = checkEnvironment()
  const apiKey = getActiveApiKey()
  
  return {
    props: {
      hasEnvironment: hasEnv,
      apiKeyPresent: !!apiKey,
      apiKeyPreview: apiKey ? `${apiKey.substring(0, 8)}...` : 'Not found',
      isDev: isDevelopment(),
    },
  }
}

export default function EnvTest({ hasEnvironment, apiKeyPresent, apiKeyPreview, isDev }) {
  const [clientEnv, setClientEnv] = useState({ mounted: false })
  
  useEffect(() => {
    // Check client-side environment variables after hydration
    setClientEnv({
      mounted: true,
      gatsbyKey: !!process.env.GATSBY_AIRTABLE_API,
      nextKey: !!process.env.NEXT_PUBLIC_AIRTABLE_API,
      gatsbyKeyPreview: process.env.GATSBY_AIRTABLE_API ? `${process.env.GATSBY_AIRTABLE_API.substring(0, 8)}...` : 'Not found',
      nextKeyPreview: process.env.NEXT_PUBLIC_AIRTABLE_API ? `${process.env.NEXT_PUBLIC_AIRTABLE_API.substring(0, 8)}...` : 'Not found'
    })
  }, [])
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace', backgroundColor: '#000', color: '#fff' }}>
      <h1>🔧 Environment Variables Test</h1>
      <div style={{ backgroundColor: '#333', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
        <h2>Server Side (getServerSideProps)</h2>
        <p>✅ Development Mode: {isDev ? 'Yes' : 'No'}</p>
        <p>✅ Environment Check: {hasEnvironment ? 'Passed' : 'Failed'}</p>
        <p>✅ API Key Present: {apiKeyPresent ? 'Yes' : 'No'}</p>
        <p>✅ API Key Preview: {apiKeyPreview}</p>
      </div>
      
      <div style={{ backgroundColor: '#333', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
        <h2>Client Side (Browser)</h2>
        {clientEnv.mounted ? (
          <>
            <p>✅ GATSBY_AIRTABLE_API: {clientEnv.gatsbyKey ? 'Available' : 'Not available'}</p>
            <p>✅ GATSBY_AIRTABLE_API Preview: {clientEnv.gatsbyKeyPreview}</p>
            <p>✅ NEXT_PUBLIC_AIRTABLE_API: {clientEnv.nextKey ? 'Available' : 'Not available'}</p>
            <p>✅ NEXT_PUBLIC_AIRTABLE_API Preview: {clientEnv.nextKeyPreview}</p>
          </>
        ) : (
          <p>Loading client-side environment...</p>
        )}
      </div>
      
      <div style={{ 
        marginTop: '2rem', 
        padding: '1rem', 
        backgroundColor: clientEnv.mounted && (clientEnv.gatsbyKey || clientEnv.nextKey) ? '#2a5' : '#a52', 
        borderRadius: '8px' 
      }}>
        {clientEnv.mounted && (clientEnv.gatsbyKey || clientEnv.nextKey) ? (
          <>
            <p><strong>✨ Everything looks good!</strong> Your environment variables are properly configured.</p>
            <p>Visit <a href="/" style={{color: '#fff'}}>← Home</a> to test the actual application.</p>
          </>
        ) : clientEnv.mounted ? (
          <>
            <p><strong>⚠️ Environment issue detected!</strong></p>
            <p>Make sure you have set your API key in .env.local</p>
          </>
        ) : (
          <p>Checking environment...</p>
        )}
        <p><em>Note: This is a test page - delete /pages/env-test.js when done.</em></p>
      </div>
    </div>
  )
}