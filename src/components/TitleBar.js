import React from "react"

const TitleBar = ({ text, subText }) => {
  return (
    <div className="container">
      <div className="box">
        <h1
          style={{ textAlign: "center" }}
          className="has-text-white is-size-1-desktop is-size-1-tablet is-size-3-mobile"
        >
          {text}
        </h1>
        <p style={{ textAlign: "center" }} className="has-text-white">
          {subText}
        </p>
      </div>
    </div>
  )
}

export default TitleBar
