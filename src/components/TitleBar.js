import React from "react"

const TitleBar = ({ text, subText }) => {
  return (
    <div className="container">
      <div className="box">
        <h1
          style={{ textAlign: "center" }}
          className="has-text-white is-size-1"
        >
          {text}
        </h1>
        <h2
          style={{ textAlign: "center" }}
          className="is-size-5 has-text-white"
        >
          {subText}
        </h2>
      </div>
    </div>
  )
}

export default TitleBar
