import React, { useState } from "react"
import Airtable from "airtable"
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "app4Eb0X39KtGToOS"
)

const SoundCard = ({ name, time, date, id, initialReport, initialDraw }) => {
  const [report, setReport] = useState("")
  const [draw, setDraw] = useState()
  const [buttonName, setButtonName] = useState("Submit")
  const [buttonStyle, setButtonStyle] = useState('has-background-danger')

  function handleSubmit(e) {
    e.preventDefault()
    base("Events").update(
      id,
      {
        Report: report,
        Draw: draw,
      },
      function(err, record) {
        if (err) {
          console.error(err)
          return
        }
      },
      setButtonName("Successfully Submitted"),
      setButtonStyle('is-success')
    )
  }

  return (
    <div className="card">
      <header className="card-header">
        <p className="is-size-3 has-text-danger has-text-centered">
          {date} {time} - {name}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="field">
            <form
              name="sound engineer submission"
              onSubmit={e => handleSubmit(e)}
              method="POST"
            >
              <label className="label has-text-white">Report</label>
              <div className="field">
                <p className="control is-expanded">
                <textarea 
                  className="textarea" 
                  name="report" 
                  value={report}
                  placeholder={initialReport}
                  onChange={e => setReport(e.target.value)}
                />
                </p>
              </div>

              <br />

              <div className="field">
                <label className="label has-text-white">Draw</label>
                <div className="field">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="number"
                      name="draw"
                      value={draw}
                      placeholder={initialDraw}
                      onChange={e => setDraw(parseInt(e.target.value))}
                      required
                    />
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className={`button is-link is-fullwidth ${buttonStyle}`}
                onSubmit={e => handleSubmit(e)}
              >
                {buttonName}
              </button>
            </form>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default SoundCard
