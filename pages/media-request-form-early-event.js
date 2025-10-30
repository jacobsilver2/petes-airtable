import React from "react"
import Layout from "../src/components/layout"
import MediaRequestFormEarlyEvent from "../src/components/Forms/mediaRequestFormEarlyEvent"

const MediaRequestFormEarlyEventPage = () => {
  return (
    <>
      <Layout fullheight={false}>
        <div className="container">
          <h1 className="has-text-danger" style={{ textAlign: "center" }}>
            Media Request Form - Early Event
          </h1>
          <MediaRequestFormEarlyEvent />
        </div>
      </Layout>
    </>
  )
}

export default MediaRequestFormEarlyEventPage