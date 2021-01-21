import React, { useState } from "react"
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
      <div className="container">
        {/* Hamburger Menu */}
        <div
          className={`navbar-burger burger ${navBarActiveClass}`}
          data-target="navMenu"
          onClick={e => toggleHamburger(e)}
        >
          <span />
          <span />
          <span />
        </div>
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
