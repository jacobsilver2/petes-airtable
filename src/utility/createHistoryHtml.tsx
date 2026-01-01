import React from "react"

interface HistoryData {
  id?: string
  display?: boolean
  type?: string
  Name?: string
}

export default function createHistoryHtml(
  data: HistoryData
): React.JSX.Element | undefined {
  if (!data.display) return
  switch (data.type) {
    case "text":
      return (
        <div key={data.id || "default-key"} className="column">
          {data.Name}
        </div>
      )
    default:
      return (
        <div key={data.id || "default-key"} className="container">
          <p className="content">I guess I'm the default...</p>
        </div>
      )
  }
}
