import React, { useState } from 'react';
import PropTypes from "prop-types"
// import { Link, navigate } from "gatsby"
// import { getUser, isLoggedIn, logout } from "../services/auth"
import filterNavItems from '../utility/filterNavItems';


const Navbar = ({ siteTitle, navItems }) => {
  // const  [active, setActive]  = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  // const content = { message: "", login: true }
  // if (isLoggedIn()) {
  //   content.message = `Hello, ${getUser().name}`
  // } else {
  //   content.message = "You are not logged in"
  // }

  function toggleHamburger(e) {
    e.preventDefault();
    // setActive(!active);
    // active ? setNavBarActiveClass('is-active') : setNavBarActiveClass('')
    navBarActiveClass === 'is-active' ? setNavBarActiveClass('') : setNavBarActiveClass('is-active')
  }

  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main-navigation">
    <div className="container">
        {/* Hamburger Menu */}
        <div className={`navbar-burger burger ${navBarActiveClass}`} data-target="navMenu" onClick={(e) => toggleHamburger(e)}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
        <div className="navbar-start has-text-centered">
          {filterNavItems(navItems)}
        </div>
      </div>
  </nav>
  )
}

Navbar.propTypes = {
  siteTitle: PropTypes.string,
  navItems: PropTypes.array
}

Navbar.defaultProps = {
  siteTitle: ``,
}

export default Navbar
