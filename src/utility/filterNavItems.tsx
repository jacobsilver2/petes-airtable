import React from "react"
import Link from "next/link"

export default function filteredAndMappedNavItems(): React.JSX.Element[] {
  return [
    <Link key="1" className="navbar-item is-size-6" href="/">
      Welcome
    </Link>,
    <Link key="2" className="navbar-item is-size-6" href="/calendar">
      Calendar
    </Link>,
    <a
      key="3"
      target="_blank"
      rel="noreferrer"
      className="navbar-item is-size-6"
      href="https://petes-candy-store.myshopify.com"
    >
      Merch
    </a>,
    <Link key="4" className="navbar-item is-size-6" href="/events-and-series">
      Events and Series
    </Link>,
    <Link key="5" className="navbar-item is-size-6" href="/booking">
      Booking
    </Link>,
    <Link key="6" className="navbar-item is-size-6" href="/gallery">
      Gallery
    </Link>,
    <Link key="7" className="navbar-item is-size-6" href="/history">
      History
    </Link>,
    <Link key="8" className="navbar-item is-size-6" href="/menu">
      Menu
    </Link>,
    <Link key="9" className="navbar-item is-size-6" href="/contact">
      Contact
    </Link>,
  ]
}
