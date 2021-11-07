import React, { useState } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import filterNavItems from "../utility/filterNavItems"

const Navbar = ({ navItems }) => {
  const [navBarActiveClass, setNavBarActiveClass] = useState("")

  function toggleHamburger(e) {
    e.preventDefault()
    navBarActiveClass === "is-active"
      ? setNavBarActiveClass("")
      : setNavBarActiveClass("is-active")
  }

  return (
    <nav
      className="navbar is-transparent is-fixed-top"
      role="navigation"
      aria-label="main-navigation"
    >
      <div className="navbar-brand">
        <div className="navbar-item">
          <div className="">
            <Link
              to="/"
              className="has-text-red is-size-3 is-size-5-mobile is-size4-tablet"
            >
              Pete's Candy Store
            </Link>
            <p className="has-text-white is-size-7">
              The Biggest Little Venue in NYC
            </p>
          </div>
        </div>
        {/* Hamburger Menu */}
        <button
          style={{
            margin: "auto",
            marginRight: "0",
            backgroundColor: "transparent",
            border: "none",
          }}
          className={`navbar-burger burger ${navBarActiveClass}`}
          data-target="navMenu"
          onClick={e => toggleHamburger(e)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
        <div className="navbar-end has-text-centered">
          {filterNavItems(navItems)}
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  navItems: PropTypes.array,
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
