import React from "react"
import { Link } from "gatsby"

export default function filteredAndMappedNavItems() {
  return [
    <Link
      key="1"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/"
    >
      Welcome
    </Link>,
    <Link
      key="2"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/calendar"
    >
      Calendar
    </Link>,
    <a
      key="3"
      target="_blank"
      rel="noreferrer"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      href="http://petes-candy-store.square.site/"
    >
      Merch
    </a>,
    <Link
      key="4"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/events-and-series"
    >
      Events and Series
    </Link>,
    <Link
      key="5"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/booking"
    >
      Booking
    </Link>,
    <Link
      key="6"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/gallery"
    >
      Gallery
    </Link>,
    <Link
      key="7"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/history"
    >
      History
    </Link>,
    <Link
      key="8"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/menu"
    >
      Menu
    </Link>,
    <Link
      key="9"
      activeClassName="has-text-white"
      className="navbar-item is-size-6"
      to="/contact"
    >
      Contact
    </Link>,
  ]
}
