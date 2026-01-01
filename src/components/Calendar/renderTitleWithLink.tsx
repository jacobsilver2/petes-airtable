import React from "react"
import styles from "./CalendarStyles.module.css"

export function renderTitleWithLink(title: string, link: string): React.JSX.Element {
  return (
    <a className={styles.styledLink} target="_blank" href={link}>
      <h3 className={styles.styledTitle}>{title}</h3>
    </a>
  )
}
