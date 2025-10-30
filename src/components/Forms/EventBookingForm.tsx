import React, { useState, FormEvent, ChangeEvent } from "react"
import Airtable from "airtable"
import { useRouter } from "next/router"

// Get API key from environment (supports both Gatsby and Next.js conventions)
const getApiKey = () => {
  return process.env.GATSBY_AIRTABLE_API || process.env.NEXT_PUBLIC_AIRTABLE_API
}

const getAirtableBase = () => {
  const apiKey = getApiKey()
  if (!apiKey) {
    console.error('Airtable API key not found')
    return null
  }
  return new Airtable({ apiKey }).base("appNuB0fX4vQbOqdy")
}

const EventBookingForm: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [eventName, setEventName] = useState("")
  const [description, setDescription] = useState("")
  const [frequency, setFrequency] = useState("One Time Only")
  const [startDate, setStartDate] = useState("")
  const [experience, setExperience] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const base = getAirtableBase()
    
    if (!base) {
      console.error('Cannot submit form: Airtable not available')
      alert('Form submission failed. Please try again later.')
      return
    }
    
    base("event booking form").create(
      {
        name,
        email,
        phone,
        "event name": eventName,
        description,
        frequency,
        "start date": startDate,
        experience,
      },
      function(err: any, record?: any) {
        if (err) {
          console.error(err)
          return
        }
      }
    )
    setIsDisabled(true)
    router.push("/thanks")
  }

  return (
    <div className="container">
      <fieldset disabled={isDisabled}>
        <legend>Show Form</legend>
        <form
          name="photo shoot form"
          method="POST"
          onSubmit={handleSubmit}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="eventName"
              className="label is-small has-text-white"
            >
              Event Name (if you have one)
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="eventName"
                  className="input"
                  type="text"
                  name="total-number-of-cast-and-crew"
                  value={eventName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEventName(e.target.value)}
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="description"
              className="label is-small has-text-white"
            >
              Event Description
            </label>
            <div className="field">
              <p className="control is-expanded">
                <textarea
                  id="description"
                  className="textarea"
                  name="type-of-shoot"
                  value={description}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
                  required
                ></textarea>
              </p>
            </div>
          </div>

          <div className="control">
            <label
              htmlFor="frequency"
              className="label is-small has-text-white"
            >
              Frequency
            </label>
            <div className="select">
              <select
                id="frequency"
                name="number-of-band-members"
                value={frequency}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setFrequency(e.target.value)}
              >
                <option>One Time Only</option>
                <option>Weekly</option>
                <option>Bi Weekly</option>
                <option>Monthly</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="startDate"
              className="label is-small has-text-white"
            >
              Approximate Start Date
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="startDate"
                  className="input"
                  type="text"
                  name="name-of-production"
                  value={startDate}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setStartDate(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="experience"
              className="label is-small has-text-white"
            >
              Your Experience In This Field
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="experience"
                  className="input"
                  type="text"
                  name="production-company"
                  value={experience}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setExperience(e.target.value)}
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

export default EventBookingForm
