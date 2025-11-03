import NextAuth from "next-auth"
import Google from "next-auth/providers/google"

// List of allowed admin email addresses
const ALLOWED_EMAILS = [
  "jacobsilver666@gmail.com"
]

// Get allowed emails from environment variable (comma-separated)
const envEmails = process.env.ALLOWED_ADMIN_EMAILS?.split(',').map(email => email.trim()) || []
const allowedEmails = [...ALLOWED_EMAILS, ...envEmails]

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // Only allow sign in if email is in the allowed list
      if (user.email && allowedEmails.includes(user.email)) {
        return true
      }
      // Deny access for any other email
      return false
    },
    async session({ session, token }) {
      // Add any custom session data here if needed
      return session
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
})
