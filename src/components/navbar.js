import PropTypes from "prop-types"
import React, { useState } from 'react';
import filterNavItems from '../utility/filterNavItems';

const Navbar = ({ siteTitle, navItems }) => {
  const  [active, setActive]  = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  function toggleHamburger() {
    setActive(!active);
    active ? setNavBarActiveClass('is-active') : setNavBarActiveClass('')
  }

  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main-navigation">
    <div className="container">
        {/* Hamburger Menu */}
        <div className={`navbar-burger burger ${navBarActiveClass}`} data-target="navMenu" onClick={() => toggleHamburger()}>
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
