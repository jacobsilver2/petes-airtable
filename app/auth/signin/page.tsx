import { signIn } from "@/auth"
import PageLayout from "@/src/components/PageLayout"

export default function SignInPage() {
  return (
    <PageLayout>
      <div className="container">
        <div className="content has-text-centered" style={{ marginTop: "4rem" }}>
          <h1 className="has-text-danger">Admin Sign In</h1>
          <p>Sign in with your authorized Google account to access the admin panel.</p>

          <form
            action={async () => {
              "use server"
              await signIn("google", { redirectTo: "/admin" })
            }}
            style={{ marginTop: "2rem" }}
          >
            <button
              type="submit"
              className="button is-large is-danger"
            >
              Sign in with Google
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
