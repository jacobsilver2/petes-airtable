import React from "react"
import styles from "./CalendarStyles.module.css"

export function renderTitleWithoutLink(title: string): React.JSX.Element {
  return <h3 className={styles.styledTitle}>{title}</h3>
}
