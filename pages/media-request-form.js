import React from "react"
import Layout from "../src/components/layout"
import MediaRequestForm from "../src/components/Forms/mediaRequestForm"

const MediaRequestFormPage = () => {
  return (
    <>
      <Layout fullheight={false}>
        <div className="container">
          <h1 className="has-text-danger" style={{ textAlign: "center" }}>
            Media Request Form
          </h1>
          <MediaRequestForm />
        </div>
      </Layout>
    </>
  )
}

export default MediaRequestFormPage