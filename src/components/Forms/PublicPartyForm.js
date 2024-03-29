import React, { useState } from "react"
import Airtable from "airtable"
import { navigate } from "gatsby"
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "appNuB0fX4vQbOqdy"
)

const PublicPartyForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [numberOfPeople, setNumberOfPeople] = useState("")
  const [desiredDate, setDesiredDate] = useState("")
  const [desiredTime, setDesiredTime] = useState("")
  const [hours, setHours] = useState("")
  const [location, setLocation] = useState("inside")
  const [occasion, setOccasion] = useState("")
  const [info, setInfo] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    base("public party form").create(
      {
        name,
        email,
        phone,
        "number of people": numberOfPeople,
        "desired date": desiredDate,
        "desired time": desiredTime,
        "how many hours": hours,
        "inside or outside": location,
        occasion,
        "additional info": info,
      },
      function(err, record) {
        if (err) {
          console.error(err)
          return
        }
      }
    )
    setIsDisabled(true)
    navigate("/thanks")
  }

  return (
    <div className="container">
      <fieldset disabled={isDisabled}>
        <legend>Party Form</legend>
        <form
          name="public party form"
          onSubmit={e => handleSubmit(e)}
          method="POST"
        >
          <div className="field">
            <label htmlFor="name" className="label is-small has-text-white">
              Name
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="name"
                  className="input"
                  name="name"
                  type="text"
                  placeholder="First and Last Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="email" className="label is-small has-text-white">
              Email
            </label>
            <div className="field is-expanded">
              <p className="control is-expanded">
                <input
                  id="email"
                  className="input"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="phone" className="label is-small has-text-white">
              Phone
            </label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    id="phone"
                    className="input"
                    name="phone"
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Phone Number"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="people" className="label is-small has-text-white">
              How many people?*
            </label>
            <div className="field is-expanded">
              <p className="control is-expanded">
                <input
                  id="people"
                  className="input"
                  name="how-many-people"
                  type="text"
                  value={numberOfPeople}
                  onChange={e => setNumberOfPeople(e.target.value)}
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="date" className="label is-small has-text-white">
              Desired date
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="date"
                  className="input"
                  name="desired-date"
                  type="text"
                  value={desiredDate}
                  onChange={e => setDesiredDate(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="time" className="label is-small has-text-white">
              What time?
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="time"
                  className="input"
                  name="what-time"
                  type="text"
                  value={desiredTime}
                  onChange={e => setDesiredTime(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="duration" className="label is-small has-text-white">
              How many hours?*
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="duration"
                  className="input"
                  name="how-many-hours"
                  type="text"
                  value={hours}
                  onChange={e => setHours(e.target.value)}
                  required
                />
              </p>
            </div>
          </div>

          <div className="control">
            <label htmlFor="inOrOut" className="label is-small has-text-white">
              Inside or outside?*
            </label>
            <div className="select">
              <select
                id="inOrOut"
                name="inside-or-outside"
                value={location}
                onBlur={e => setLocation(e.target.value)}
                required
              >
                <option>Inside</option>
                <option>Outside</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="occasion" className="label is-small has-text-white">
              What's the occasion?
            </label>
            <div className="field">
              <p className="control is-expanded">
                <textarea
                  id="occasion"
                  className="textarea"
                  name="whats-the-occasion"
                  value={occasion}
                  onChange={e => setOccasion(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="additionalInfo"
              className="label is-small has-text-white"
            >
              Anything else we should know?
            </label>
            <div className="field">
              <p className="control is-expanded">
                <textarea
                  id="additionalInfo"
                  className="textarea"
                  name="anything-else-we-should-know"
                  value={info}
                  onChange={e => setInfo(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-link has-background-white has-text-black"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </fieldset>
    </div>
  )
}

export default PublicPartyForm
