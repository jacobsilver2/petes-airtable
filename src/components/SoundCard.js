import React, { useState } from "react"
import Airtable from 'airtable';
const base = new Airtable({apiKey: process.env.GATSBY_AIRTABLE_API}).base('app4Eb0X39KtGToOS');

const SoundCard = ({ name, time, id, Report, Draw }) => {
  const [report, setReport] = useState("")
  const [draw, setDraw] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    base('Events').update(id, {
      Report: report,
      Draw: draw
    })
  }

  return (
    <div className="container">
      <form
        name="sound engineer submission"
        onSubmit={e => handleSubmit(e)}
        method="POST"
      >
        <fieldset disabled>
          <div className="field">
            <label className="label is-large has-text-white">Time</label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  name="time"
                  value={time}
                  readOnly
                  placeholder={time}
                />
              </p>
            </div>
          </div>
        </fieldset>
        
        <fieldset disabled>
          <div className="field">
            <label className="label is-large has-text-white">Act Name</label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  readOnly
                  placeholder={name}
                />
              </p>
            </div>
          </div>
        </fieldset>


        <fieldset>
          <div className="field">
            <label className="label is-large has-text-white">Report</label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={report}
                  placeholder={Report}
                  onChange={e => setReport(e.target.value)}
                  required
                />
              </p>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <div className="field">
            <label className="label is-large has-text-white">Draw</label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="number"
                  name="draw"
                  value={draw}
                  placeholder={Draw}
                  onChange={e => setDraw(parseInt(e.target.value))}
                  required
                />
              </p>
            </div>
          </div>
        </fieldset>

        <div className="field">
        <div className="control">
          <button type="submit" className="button is-link has-background-danger">
            Submit
          </button>
        </div>
      </div>

      </form>
    </div>
  )
}

export default SoundCard

// <div className="card">
//   <header className="card-header">
//     <p className="card-header-title">
//       {time} - {name}
//     </p>
//   </header>
//   <div className="card-content">
//     <div className="content">Report: {Report}</div>
//     <br />
//     <div className="content">Draw: {Draw}</div>
//   </div>
//   <footer className="card-footer">
//     <button className="card-footer-item">Save</button>
//     <button className="card-footer-item">Edit</button>
//   </footer>
// </div>
