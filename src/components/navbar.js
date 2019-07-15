import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from 'react';

const Navbar = ({ siteTitle, navItems }) => {
  const  [active, setActive]  = useState(false);
  const [navBarActiveClass, setNavBarActiveClass] = useState('');

  //!filtering Nav Items so 'Private Party' and 'Public Party", and "Host A Cool Event" aren't on the navbar.
  const filteredAndMappedNavItems = navItems.filter(item => (
    (item.node.frontmatter.title !== 'Private Party') 
    && 
    (item.node.frontmatter.title !== 'Public Party')
    &&
    (item.node.frontmatter.title !== 'Host A Cool Event')
  )).sort(function(a,b) {return a.node.frontmatter.navOrder - b.node.frontmatter.navOrder}).map(item => (
    <Link key={item.node.frontmatter.title} className="navbar-item is-size-5" to={item.node.frontmatter.url}>{item.node.frontmatter.title}</Link>
  ))

  function toggleHamburger() {
    setActive(!active);
    active ? setNavBarActiveClass('is-active') : setNavBarActiveClass('')
  }

  return (
    <nav className="navbar is-transparent is-fixed-top" role="navigation" aria-label="main-navigation">
    <div className="container">
        {/* Hamburger Menu */}
        <div className={`navbar-burger burger ${navBarActiveClass}`} data-targer="navMenu" onClick={() => toggleHamburger()}>
          <span />
          <span />
          <span />
        </div>
      </div>
      <div id="navMenu" className={`navbar-menu ${navBarActiveClass}`}>
        <div className="navbar-start has-text-centered">
          {filteredAndMappedNavItems}
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
