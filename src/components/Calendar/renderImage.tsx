import React from "react"
import styles from "./CalendarStyles.module.css"
import { cloudinaryOptimize } from "../../utility/cloudinary"

export function renderImage(image: string): React.JSX.Element {
  return (
    <div className={styles.styledImage}>
      <img
        src={cloudinaryOptimize(image, 600)}
        height="300px"
        alt={image}
        loading="lazy"
        style={{ maxHeight: "300px" }}
      />
    </div>
  )
}
