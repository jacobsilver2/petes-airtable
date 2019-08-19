import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/privateRoute"
import Profile from "../components/profile"
import Login from "../components/login"

const App = () => (
  <Layout fluid={null} fullheight={false}>
    <Router>
      <PrivateRoute path="/profile" component={Profile} />
      <Login path="/login" />
    </Router>
  </Layout>
)

export default App