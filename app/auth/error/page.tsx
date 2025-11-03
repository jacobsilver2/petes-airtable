import Link from "next/link"
import PageLayout from "@/src/components/PageLayout"

export default function AuthErrorPage({
  searchParams,
}: {
  searchParams: { error?: string }
}) {
  const error = searchParams.error

  return (
    <PageLayout>
      <div className="container">
        <div className="content has-text-centered" style={{ marginTop: "4rem" }}>
          <h1 className="has-text-danger">Authentication Error</h1>

          {error === "AccessDenied" && (
            <>
              <p>Your email address is not authorized to access the admin panel.</p>
              <p>Please contact the site administrator if you believe this is an error.</p>
            </>
          )}

          {error && error !== "AccessDenied" && (
            <p>An error occurred during authentication: {error}</p>
          )}

          <div style={{ marginTop: "2rem" }}>
            <Link href="/" className="button is-danger">
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
