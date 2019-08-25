import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import { Router } from "@reach/router"
import { login, isAuthenticated, getProfile, logout } from "../services/auth"
import Sound from "../components/Staff/Sound"
import StaffHome from '../components/Staff/StaffHome'
import BarReport from '../components/Staff/BarReport'

//! There is a gatsby bug with the router compoment.  Notice how the paths in the router are from '/' and not '/staff'.

const StaffPage = () => {
  const [active, setActive] = useState("HOME")
  const tabNames = ["HOME", "SOUND FORM", "BAR REPORT"]

  const mappedListItems = tabNames.map(name => (
    <li
      key={name}
      className={`${active === name ? "is-active" : ""} has-text-white`}
      onClick={() => setActive(name)}
    >
      <a>{name}</a>
    </li>
  ))

  if (!isAuthenticated()) {
    login()
    return <p>Redirecting to login...</p>
  }

  const user = getProfile()

  function renderStaffPage() {
    if (active === "HOME") {
      return <StaffHome user={user} />
    }
    if (active === "SOUND FORM") {
      return <Sound />
    }
    if (active === "BAR REPORT") {
      return <BarReport />
    }
  }

  return (
    <>
      <Router>
        <StaffHome path="/" user={user} />
        <Sound path="/sound-form" />
      </Router>
      <Layout fluid={null} fullheight={false}>
        <a
          href="#logout"
          onClick={e => {
            logout()
            e.preventDefault()
          }}
        >
          {" "}
          Log Out{" "}
        </a>
        <div className="tabs is-centered is-large"><ul>{mappedListItems}</ul></div>
        {renderStaffPage()}
      </Layout>
    </>
  )
}

export default StaffPage
