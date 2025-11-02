import React from "react"
import styles from "./CalendarStyles.module.css"
import { renderTitleWithLink } from "./renderTitleWithLink"
import { renderImage } from "./renderImage"
import { renderTitleWithoutLink } from "./renderTitleWithoutLink"
import { CalendarEventProps } from "../../types"

const CalendarEvent: React.FC<CalendarEventProps> = ({
  isFirstEvent,
  date,
  time,
  image,
  title,
  hosted,
  blurb,
  website,
  soundcloud,
  id,
  allDay,
}) => {
  const renderHostedEvent = () => <div className={styles.styledBlurb}>{blurb}</div>

  const renderRegularEvent = () => (
    <p className={styles.styledContent}>
      {soundcloud && (
        <a target="_blank" rel="noopener noreferrer" href={soundcloud}>
          soundcloud
        </a>
      )}
      {soundcloud && website && " | "}
      {website && !allDay ? (
        <a target="_blank" href={website} rel="noopener noreferrer">
          website
        </a>
      ) : null}
    </p>
  )

  const renderAllDayEvent = () => (
    <p className={styles.styledContent}>
      {blurb && <div className={styles.styledBlurb}>{blurb}</div>}
      {website && (
        <a target="_blank" href={website} rel="noopener noreferrer">
          website
        </a>
      )}
    </p>
  )

  return (
    <>
      {isFirstEvent && <div className={styles.styledDate}>{date}</div>}
      <div className={styles.event} key={id}>
        {image && renderImage(image)}
        <div className={styles.styledContentContainer}>
          {website
            ? renderTitleWithLink(title, website)
            : renderTitleWithoutLink(title)}
          {!allDay && <p className={styles.styledContent}>{`${time}`}</p>}
          {hosted && !allDay ? renderHostedEvent() : renderRegularEvent()}
          {allDay && renderAllDayEvent()}
        </div>
      </div>
    </>
  )
}

export default CalendarEvent
