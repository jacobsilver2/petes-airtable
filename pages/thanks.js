import React from "react"
import Layout from "../src/components/layout"

const ThanksPage = () => {
  return (
    <>
      <Layout fullheight={false}>
        <div className="container">
          <div className="content has-text-centered">
            <h1 className="has-text-danger">Thank You!</h1>
            <p>Your message has been received. We'll get back to you soon!</p>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default ThanksPage