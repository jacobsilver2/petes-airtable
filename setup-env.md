# Environment Variables Setup

## Quick Setup

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env.local
   ```

2. **Get your Airtable API key:**
   - Go to https://airtable.com/api
   - Click on your workspace
   - Find your API key in the authentication section
   - It should look like: `keyXXXXXXXXXXXXXX`

3. **Edit `.env.local`:**
   ```bash
   # Replace with your actual API key (set both for compatibility)
   GATSBY_AIRTABLE_API=keyYourActualApiKeyHere
   NEXT_PUBLIC_AIRTABLE_API=keyYourActualApiKeyHere
   ```

4. **Test the setup:**
   ```bash
   npm run dev
   ```

## Environment Variables Explained

- **`GATSBY_AIRTABLE_API`**: Your Airtable API key (server-side, for backward compatibility)
- **`NEXT_PUBLIC_AIRTABLE_API`**: Your Airtable API key (client-side, Next.js standard)
- **`.env.local`**: Local development environment variables (not committed to git)
- **`.env.example`**: Template file showing required variables (committed to git)

**Important:** In Next.js, only variables prefixed with `NEXT_PUBLIC_` are available in the browser. The `next.config.js` file exposes `GATSBY_AIRTABLE_API` to maintain compatibility.

## Testing Your Setup

1. **Test environment variables:**
   Visit http://localhost:3000/env-test (or whatever port Next.js is using)
   This page will show if your environment variables are properly configured.

2. **Check the console:**
   In development mode, you'll see environment check logs in your terminal.

## Troubleshooting

If you see "Airtable API key not available" warnings:
1. Make sure `.env.local` exists and has the correct API key
2. Restart your development server (`npm run dev`)
3. Check that your API key starts with `key` and is the correct length
4. Visit `/env-test` page to debug environment variable issues

## Production Deployment

When deploying to production (Vercel, Netlify, etc.), add the environment variable:
- Variable name: `GATSBY_AIRTABLE_API`
- Variable value: Your actual Airtable API key