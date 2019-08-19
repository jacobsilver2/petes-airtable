import React from "react"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import Login from "../components/login"
import SoundForm from '../components/soundForm';
import PrivateRoute from "../components/privateRoute"

const StaffPage = props => {
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <Router>
          <PrivateRoute path="/sound-form" component={SoundForm} />
          <Login path="/login" />
        </Router>
      </Layout>
    </>
  )
}

export default StaffPage
