import React from "react"
import { Link } from "gatsby"

export default function filteredAndMappedNavItems(navItems) {
  // const constructedShopLink = {
  //   node: {
  //     frontmatter: {
  //       title: "Merch",
  //       navOrder: 3,
  //       url: "http://petes-candy-store.square.site/",
  //     },
  //   },
  // }
  // navItems.push(constructedShopLink)
  return [
    <Link
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/"
    >
      Welcome
    </Link>,
    <Link
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/covid-info"
    >
      Covid Info
    </Link>,
    <Link
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/calendar"
    >
      Calendar
    </Link>,
    <a
      target="_blank"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      href="http://petes-candy-store.square.site/"
    >
      Merch
    </a>,
    <Link
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/events-and-series"
    >
      Events and Series
    </Link>,
    <Link
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/gallery"
    >
      Gallery
    </Link>,
    <Link
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/history"
    >
      History
    </Link>,
    <Link
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/menu"
    >
      Menu
    </Link>,
    <Link
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/contact"
    >
      Contact
    </Link>,
  ]
  // return navItems
  //   .filter(
  //     item =>
  //       item.node.frontmatter.title !== "Private Party" &&
  //       item.node.frontmatter.title !== "Public Party" &&
  //       item.node.frontmatter.title !== "Host A Cool Event" &&
  //       item.node.frontmatter.title !== "Open Mic" &&
  //       item.node.frontmatter.title !== "Reading Series" &&
  //       item.node.frontmatter.title !== "404" &&
  //       item.node.frontmatter.title !== "Photo Shoots" &&
  //       item.node.frontmatter.title !== "Parties" &&
  //       item.node.frontmatter.title !== "Booking"
  //   )
  //   .sort(function(a, b) {
  //     return a.node.frontmatter.navOrder - b.node.frontmatter.navOrder
  //   })
  //   .map(item => {
  //     if (item.node.frontmatter.title === "Merch") {
  //       return (
  //         <a
  //           key={item.node.frontmatter.title}
  //           activeClassName="has-text-white"
  //           className="navbar-item is-size-6"
  //           href={item.node.frontmatter.url}
  //         >
  //           {item.node.frontmatter.title}
  //         </a>
  //       )
  //     }
  //     return (
  //       <Link
  //         key={item.node.frontmatter.title}
  //         className="navbar-item is-size-6"
  //         to={item.node.frontmatter.url}
  //         activeClassName="has-text-white"
  //       >
  //         {item.node.frontmatter.title}
  //       </Link>
  //     )
  //   })
}
