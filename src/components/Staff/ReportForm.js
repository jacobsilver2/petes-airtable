import React, { useState } from "react"
import Airtable from "airtable"
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "app4Eb0X39KtGToOS"
)

const ReportForm = ({ date, id, initialNote }) => {
  const [note, setNote] = useState("")
  const [bartender, setBartender] = useState("")
  const [buttonName, setButtonName] = useState("Submit")
  const [buttonStyle, setButtonStyle] = useState("has-background-danger")

  function handleSubmit(e) {
    e.preventDefault()
    base("Logbook").update(
      id,
      {
        "Notes": note,
        "Staff": ["rechSv8MDgIA3f7U4"],
      },
      function(err, record) {
        if (err) {
          console.error(err)
          return
        }
      },
      setButtonName("Successfully Submitted"), 
      setButtonStyle("is-success")
    )
  }

  return (
    <div className="card">
      <header className="card-header">
        <p className="is-size-3 has-text-danger has-text-centered">
          {`Pete\'s Candy Store Logbook ${date}`}
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <div className="field">
            <form
              name="bartender report form"
              onSubmit={e => handleSubmit(e)}
              method="POST"
            >
              {/* Date is received from props and is not changeable */}
              <label className="label has-text-white">Bartender Report</label>
              <div className="field">
                <p className="control is-expanded">
                  <textarea
                    className="textarea"
                    name="note"
                    value={note}
                    placeholder={initialNote}
                    onChange={e => setNote(e.target.value)}
                  />
                </p>
              </div>
              <br />

              {/* Still thinking about how to do staff */}
              <label className="label has-text-white">Staff</label>
              <div className="field">
                <p className="control is-expanded">
                  <textarea
                    className="text"
                    name="bartender"
                    value={bartender}
                    onChange={e => setBartender(e.target.value)}
                  />
                </p>
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
    </div>
  )
}

export default ReportForm
