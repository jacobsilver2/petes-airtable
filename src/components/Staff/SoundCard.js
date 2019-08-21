import React, { useState } from "react"
import Airtable from "airtable"
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "app4Eb0X39KtGToOS"
)

const SoundCard = ({ name, time, id, initialReport, initialDraw }) => {
  const [report, setReport] = useState("")
  const [draw, setDraw] = useState()
  const [buttonName, setButtonName] = useState("Submit")

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
      setButtonName("Successfully Submitted")
    )
  }

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">
          {time} - {name}
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
              <label className="label is-large has-text-white">Report</label>

              <div className="field">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={report}
                    placeholder={initialReport}
                    onChange={e => setReport(e.target.value)}
                    required
                  />
                </p>
              </div>

              <br />

              <div className="field">
                <label className="label is-large has-text-white">Draw</label>
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
                className="button is-link has-background-danger"
                onSubmit={e => handleSubmit(e)}
              >
                {buttonName}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SoundCard
