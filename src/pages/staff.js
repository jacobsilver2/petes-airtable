import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile, logout } from "../services/auth"
import Sound from "../components/Staff/Sound"

//! There is a gatsby bug with the router compoment.  Notice how the paths in the router are from '/' and not '/staff'.

const StaffHome = ({ user }) => {
  return <p>Hi, {user.name ? user.name : "friend"}</p>
}

const StaffPage = props => {
  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <nav className="navbar">
          <div className="container">
            <div className="navbar-menu">
              <div className="navbar-start has-text-centered">
              <Link to="/staff/">Staff Home</Link>{" "}
              <Link to="/staff/sound-form">Sound Form</Link>{" "}
              <a href="#logout" onClick={e => { logout(); e.preventDefault() }} > Log Out </a>
              </div>
            </div>
          </div>
        </nav>
        <Router>
          <StaffHome path="/" user={user} />
          <Sound path="/sound-form" />
        </Router>
      </Layout>
    </>
  )
}

export default StaffPage
