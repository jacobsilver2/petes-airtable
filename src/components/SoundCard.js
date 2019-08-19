import React from "react"

const SoundCard = ({ name, date, time, id, Report, Draw }) => (
  <div className="card">
    <header className="card-header">
      <p className="card-header-title">{time} - {name}</p>
    </header>
    <div className="card-content">
      <div className="content">{Report}</div>
      <br />
      <div className="content">{Draw}</div>
    </div>
    <footer className="card-footer">
      <a href="#" className="card-footer-item">Save</a>
      <a href="#" className="card-footer-item">Edit</a>
    </footer>
  </div>
)

export default SoundCard;