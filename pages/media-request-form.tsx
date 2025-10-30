import React from "react"
import { useRouter } from "next/router"
import Layout from "../src/components/layout"
import MediaRequestForm from "../src/components/Forms/mediaRequestForm"

const MediaRequestFormPage: React.FC = () => {
  const router = useRouter()
  const { id, date, time, email, eventId } = router.query

  return (
    <>
      <Layout>
        <div className="container">
          <h1 className="has-text-danger" style={{ textAlign: "center" }}>
            Media Request Form
          </h1>
          <MediaRequestForm
            id={id as string}
            date={date as string}
            time={time as string}
            actEmail={email as string}
            eventId={eventId as string}
          />
        </div>
      </Layout>
    </>
  )
}

export default MediaRequestFormPage