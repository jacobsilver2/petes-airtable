import React from "react"
import Layout from "../components/layout"
import MediaRequestForm from "../components/Forms/mediaRequestForm"
import withLocation from "../utility/withLocation"

// wrapping this component with withLocation so we can get url params

const mediaRequestForm = ({ search }) => {
  const { id, date, time, email } = search
  return (
    <Layout fluid={null} fullheight={false}>
      <MediaRequestForm id={id} date={date} time={time} />
    </Layout>
  )
}

export default withLocation(mediaRequestForm)
