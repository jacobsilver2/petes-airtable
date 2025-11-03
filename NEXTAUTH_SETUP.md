# NextAuth Setup Guide

This guide will help you set up Google OAuth authentication for the admin panel.

## 1. Generate AUTH_SECRET

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Add it to your `.env.local`:

```
AUTH_SECRET=your_generated_secret_here
```

## 2. Set Up Google OAuth

### Step 1: Go to Google Cloud Console
Visit: https://console.cloud.google.com/

### Step 2: Create a New Project (or select existing)
1. Click on the project dropdown at the top
2. Click "New Project"
3. Name it (e.g., "Pete's Candy Store Auth")

### Step 3: Enable Google+ API
1. Go to "APIs & Services" > "Library"
2. Search for "Google+ API"
3. Click "Enable"

### Step 4: Create OAuth Credentials
1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "OAuth client ID"
3. Configure consent screen if prompted:
   - User Type: External
   - App name: Pete's Candy Store
   - User support email: your email
   - Developer contact: your email
   - Add scope: email, profile, openid
4. Application type: "Web application"
5. Name: "Pete's Candy Store Web Client"
6. Authorized JavaScript origins:
   - http://localhost:3000 (for development)
   - https://your-production-domain.com
7. Authorized redirect URIs:
   - http://localhost:3000/api/auth/callback/google (for development)
   - https://your-production-domain.com/api/auth/callback/google

### Step 5: Copy Credentials
Copy your Client ID and Client Secret and add them to `.env.local`:

```
AUTH_GOOGLE_ID=your_client_id_here
AUTH_GOOGLE_SECRET=your_client_secret_here
```

## 3. Add Admin Email Addresses

Add the email addresses that should have admin access to `.env.local`:

```
ALLOWED_ADMIN_EMAILS=admin@example.com,another-admin@example.com
```

Note: These must be Google account email addresses.

## 4. Complete .env.local Example

Your `.env.local` file should look like this:

```bash
# Airtable
GATSBY_AIRTABLE_API=your_airtable_api_key
NEXT_PUBLIC_AIRTABLE_API=your_airtable_api_key

# NextAuth
AUTH_SECRET=your_generated_secret
AUTH_GOOGLE_ID=your_google_client_id
AUTH_GOOGLE_SECRET=your_google_client_secret
ALLOWED_ADMIN_EMAILS=admin@example.com,another@example.com
```

## 5. Test the Setup

1. Start your development server: `npm run dev`
2. Visit: http://localhost:3000/admin
3. You should be redirected to the sign-in page
4. Click "Sign in with Google"
5. Sign in with an authorized email address
6. You should be redirected to the admin dashboard

## Troubleshooting

### "Error: AccessDenied"
- Make sure your email address is in the `ALLOWED_ADMIN_EMAILS` list
- Check for typos in the email address

### "Error: Invalid credentials"
- Verify your `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` are correct
- Make sure you've added the correct redirect URIs in Google Cloud Console

### "Error: Invalid session"
- Regenerate your `AUTH_SECRET`
- Clear your browser cookies and try again

## Production Deployment

When deploying to production:

1. Add your production domain to Google OAuth settings
2. Update the redirect URI with your production domain
3. Set all environment variables in your hosting platform
4. Make sure `AUTH_SECRET` is different from your development secret
