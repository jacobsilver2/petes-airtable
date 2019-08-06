import React from "react"
import { Link } from "gatsby"

export default function filteredAndMappedNavItems(navItems) {
  return navItems
    .filter(
      item =>
        item.node.frontmatter.title !== "Private Party" &&
        item.node.frontmatter.title !== "Public Party" &&
        item.node.frontmatter.title !== "Host A Cool Event" &&
        item.node.frontmatter.title !== "Open Mic" &&
        item.node.frontmatter.title !== "Reading Series" &&
        item.node.frontmatter.title !== "404"
    )
    .sort(function(a, b) {
      return a.node.frontmatter.navOrder - b.node.frontmatter.navOrder
    })
    .map(item => (
      <Link
        key={item.node.frontmatter.title}
        className="navbar-item is-size-5"
        to={item.node.frontmatter.url}
        activeClassName="has-text-white"
      >
        {item.node.frontmatter.title}
      </Link>
    ))
}
