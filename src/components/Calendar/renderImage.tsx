import React from "react"
import styles from "./CalendarStyles.module.css"

export function renderImage(image: string): React.JSX.Element {
  return (
    <div className={styles.styledImage}>
      <img
        src={image}
        height="300px"
        alt={image}
        style={{ maxHeight: "300px" }}
      />
    </div>
  )
}
