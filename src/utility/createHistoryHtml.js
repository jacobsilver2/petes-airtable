import React from "react"

export default function createHistoryHtml(data) {
  if (!data.display) return
  switch (data.type) {
    case "text":
      return (
        <div key={data.id} className="column">
          {data.Name}
        </div>
      )
    default:
      return (
        <div key={data.id} className="container">
          <p className="content">I guess I'm the default...</p>
        </div>
      )
  }
}
