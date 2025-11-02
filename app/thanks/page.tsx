import React from "react"
import PageLayout from "../../src/components/PageLayout"

export const revalidate = 60 // Revalidate every 60 seconds

export default function ThanksPage() {
  return (
    <PageLayout>
      <div className="container">
        <div className="content has-text-centered">
          <h1 className="has-text-danger">Thank You!</h1>
          <p>Your message has been received. We'll get back to you soon!</p>
        </div>
      </div>
    </PageLayout>
  )
}
