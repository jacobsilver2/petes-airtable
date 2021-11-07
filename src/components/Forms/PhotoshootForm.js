import React, { useState } from "react"
import Airtable from "airtable"
import { navigate } from "gatsby"
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "appNuB0fX4vQbOqdy"
)

const PhotoshootForm = () => {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [castAndCrew, setCastAndCrew] = useState("")
  const [typeOfShoot, setTypeOfShoot] = useState("")
  const [desiredDate, setDesiredDate] = useState("")
  const [numberOfHours, setNumberOfHours] = useState("")
  const [startTime, setStartTime] = useState("")
  const [nameOfProduction, setNameOfProduction] = useState("")
  const [productionCompany, setProductionCompany] = useState("")
  const [location, setLocation] = useState("")
  const [vehicles, setVehicles] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    base("photoshoot form").create(
      {
        name,
        email,
        phone,
        "number-of-people": castAndCrew,
        "type-of-shoot": typeOfShoot,
        "desired date": desiredDate,
        "number of hours": numberOfHours,
        "start time": startTime,
        "production name": nameOfProduction,
        "production company": productionCompany,
        location,
        "number of vehicles": vehicles,
        "additional info": additionalInfo,
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
        <legend>Photoshoot Form</legend>
        <form
          name="photo shoot form"
          method="POST"
          onSubmit={e => handleSubmit(e)}
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
                  type="text"
                  placeholder="First and Last Name"
                  name="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
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
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </p>
              </div>
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
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="castAndCrew"
              className="label is-small has-text-white"
            >
              Total number of cast and crew
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="castAndCrew"
                  className="input"
                  type="text"
                  name="total-number-of-cast-and-crew"
                  value={castAndCrew}
                  onChange={e => setCastAndCrew(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="typeOfShoot"
              className="label is-small has-text-white"
            >
              Type of shoot (film/video/still) *
            </label>
            <div className="field">
              <p className="control is-expanded">
                <textarea
                  id="typeOfShoot"
                  className="textarea"
                  name="type-of-shoot"
                  value={typeOfShoot}
                  onChange={e => setTypeOfShoot(e.target.value)}
                ></textarea>
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="desiredDate"
              className="label is-small has-text-white"
            >
              Desired date
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="desiredDate"
                  className="input"
                  type="text"
                  name="desired-date"
                  value={desiredDate}
                  onChange={e => setDesiredDate(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="hours" className="label is-small has-text-white">
              Number of Hours
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="hours"
                  className="input"
                  type="text"
                  name="number-of-hours"
                  value={numberOfHours}
                  onChange={e => setNumberOfHours(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="startTime"
              className="label is-small has-text-white"
            >
              Start Time
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="startTime"
                  className="input"
                  type="text"
                  name="start-time"
                  value={startTime}
                  onChange={e => setStartTime(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="productionName"
              className="label is-small has-text-white"
            >
              Name of production
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="productionName"
                  className="input"
                  type="text"
                  name="name-of-production"
                  value={nameOfProduction}
                  onChange={e => setNameOfProduction(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="productionCompany"
              className="label is-small has-text-white"
            >
              Production company
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="productionCompany"
                  className="input"
                  type="text"
                  name="production-company"
                  value={productionCompany}
                  onChange={e => setProductionCompany(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="shootLocation"
              className="label is-small has-text-white"
            >
              Where would you like to shoot (bar, live room, back yard)
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="shootLocation"
                  className="input"
                  type="text"
                  name="where-would-you-like-to-shoot"
                  value={location}
                  onChange={e => setLocation(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="vehicles" className="label is-small has-text-white">
              How many vehicles associated with shoot
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="vehicles"
                  className="input"
                  type="text"
                  name="how-many-vehicles"
                  value={vehicles}
                  onChange={e => setVehicles(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="additionInfo"
              className="label is-small has-text-white"
            >
              Additional Info
            </label>
            <div className="field">
              <p className="control is-expanded">
                <textarea
                  id="additionInfo"
                  className="textarea"
                  name="type-of-shoot"
                  value={additionalInfo}
                  onChange={e => setAdditionalInfo(e.target.value)}
                ></textarea>
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

export default PhotoshootForm
