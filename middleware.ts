import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {
  const { pathname } = req.nextUrl

  // Check if the request is for the admin route
  if (pathname.startsWith('/admin')) {
    // If user is not authenticated, redirect to signin page
    if (!req.auth) {
      const signInUrl = new URL('/auth/signin', req.url)
      signInUrl.searchParams.set('callbackUrl', pathname)
      return NextResponse.redirect(signInUrl)
    }
  }

  return NextResponse.next()
})

// Configure which routes should be protected
export const config = {
  matcher: ['/admin/:path*']
}
