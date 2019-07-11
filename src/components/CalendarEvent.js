import React from "react"
import fakeBlurb from "../utility/fakeblurb"
import moment from "moment"

function CalendarEvent(data) {
  return (
    <section className="section" key={data.id}>
    <div className="card">
      {data.Act_Image ? renderImage(data.Act_Image.raw[0].url) : null}
      <div className="card-content">
        <div className="media-content">
          {data.Act_Website ? (
            <a href={data.Act_Website[0]}>{renderName(data.Name, data.Date)}</a>
          ) : (
            renderName(data.Name, data.Date)
          )}
          {renderDate(data.Date)}
        </div>
        <div className="content">
          {data.Act_Blurb
            ? renderContent(data.Act_Blurb[0])
            : renderContent(fakeBlurb)}
        </div>
      </div>
    </div>
    </section>
  )
}

function renderImage(image) {
  return (
    <div className="card-image">
      <figure className="image is-square">
        <img src={image} alt="placeholder" />
      </figure>
    </div>
  )
}

function renderName(name, date) {
  const time = moment.utc(date).format("h:mma")
  return (
    <p className="title is-4">
      {time} - {name}
    </p>
  )
}

function renderDate(date) {
  const formattedDate = moment.utc(date).format("dddd, MMMM DD")
  return <p className="subtitle is-6">{formattedDate}</p>
}

function renderContent(content) {
  return content
}

export default CalendarEvent
