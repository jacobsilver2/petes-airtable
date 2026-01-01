"use client"

import React from "react"
import styles from "./createMenuHtml.module.css"

interface MenuData {
  id?: string
  type?: string
  Name?: string
  Description?: string
  Price?: string | number
}

export default function createMenuHtml(data: MenuData): React.JSX.Element {
  switch (data.type) {
    case "heading1":
      return (
        <div
          className={`container ${styles.menuHeading}`}
          key={data.id || "default-key"}
        >
          <div className="content">
            <h1 className="has-text-danger">
              {data.Name}
            </h1>
          </div>
        </div>
      )
    case "text":
      return (
        <div className="container" key={data.id || "default-key"}>
          <table className={`table is-narrow ${styles.menuTable}`}>
            <tbody>
              <tr>
                <th className="has-text-danger">{data.Name}</th>
                <th className="has-text-danger">
                  {data.Price ? `$` + data.Price : null}
                </th>
              </tr>
              <tr>
                <td className={styles.fullWidth}>{data.Description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )
    default:
      return <div></div>
  }
}
