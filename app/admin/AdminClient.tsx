"use client"

import { useState } from "react"
import { handleSignOut } from "./actions"

type TabName = "NEW EVENT" | "MANAGE EVENTS" | "SETTINGS"

interface AdminClientProps {
  userEmail: string | null | undefined
  userName: string | null | undefined
}

export default function AdminClient({ userEmail, userName }: AdminClientProps) {
  const [active, setActive] = useState<TabName>("NEW EVENT")
  const tabs: TabName[] = ["NEW EVENT", "MANAGE EVENTS", "SETTINGS"]

  const mappedTabs = tabs.map((name) => {
    return (
      <button
        key={name}
        onClick={() => setActive(name)}
        style={{
          fontSize: "1rem",
          backgroundColor: "transparent",
          border: "none",
          color: active === name ? "red" : "white",
          padding: "0 1em",
          cursor: "pointer",
        }}
      >
        {name}
      </button>
    )
  })

  return (
    <>
      <div className="tabs is-centered">
        <ul>{mappedTabs}</ul>
      </div>

      {/* NEW EVENT TAB - Always mounted, visibility controlled */}
      <div style={{ display: active === "NEW EVENT" ? "block" : "none" }}>
        <h2 className="has-text-danger has-text-centered" style={{ marginBottom: "2rem" }}>
          Add New Calendar Event
        </h2>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "800px",
            maxHeight: "80vh"
          }}
        >
          <div
            data-fillout-id="9PA6cznbt1us"
            data-fillout-embed-type="standard"
            data-fillout-inherit-parameters
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      </div>

      {/* MANAGE EVENTS TAB */}
      {active === "MANAGE EVENTS" && (
        <div>
          <h2 className="has-text-danger has-text-centered">Manage Events</h2>
          <div className="box" style={{ marginTop: "2rem" }}>
            <p>Event management functionality coming soon...</p>
            <ul>
              <li><a href="https://airtable.com" target="_blank" rel="noopener noreferrer">Open Airtable</a></li>
              <li><a href="/calendar">View Calendar</a></li>
            </ul>
          </div>
        </div>
      )}

      {/* SETTINGS TAB */}
      {active === "SETTINGS" && (
        <div>
          <h2 className="has-text-danger has-text-centered">Settings</h2>
          <div className="box" style={{ marginTop: "2rem" }}>
            <p><strong>Signed in as:</strong> {userEmail}</p>
            <p><strong>Name:</strong> {userName}</p>
          </div>

          <div className="box" style={{ marginTop: "2rem" }}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="https://airtable.com" target="_blank" rel="noopener noreferrer">Open Airtable</a></li>
              <li><a href="/calendar">View Calendar</a></li>
              <li><a href="/gallery">View Gallery</a></li>
            </ul>
          </div>

          <form action={handleSignOut} style={{ marginTop: "2rem" }}>
            <button type="submit" className="button is-danger">
              Sign Out
            </button>
          </form>
        </div>
      )}
    </>
  )
}
