import React from "react"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import Login from "../components/login"
import Profile from "../components/profile"
import PrivateRoute from "../components/privateRoute"

const StaffPage = props => {
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <Router>
          <PrivateRoute path="/profile" component={Profile} />
          <Login path="/login" />
        </Router>
      </Layout>
    </>
  )
}

export default StaffPage
