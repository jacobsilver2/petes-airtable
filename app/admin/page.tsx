import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Script from "next/script"
import PageLayout from "@/src/components/PageLayout"
import AdminClient from "./AdminClient"

export default async function AdminPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/auth/signin')
  }

  return (
    <>
      <Script src="https://server.fillout.com/embed/v1/" strategy="afterInteractive" />
      <PageLayout>
        <div className="container">
          <div className="content" style={{ marginTop: "4rem" }}>
            <h1 className="has-text-danger has-text-centered">Admin Dashboard</h1>
            <AdminClient
              userEmail={session.user.email}
              userName={session.user.name}
            />
          </div>
        </div>
      </PageLayout>
    </>
  )
}
