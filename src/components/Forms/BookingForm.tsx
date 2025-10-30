import React, { useState, FormEvent, ChangeEvent } from "react"
import Airtable from "airtable"
import { useRouter } from "next/router"
import { BookingFormState } from "../../types"

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

const BookingForm: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [actName, setActName] = useState("")
  const [email, setEmail] = useState("")
  const [numberOfBandMembers, setNumberOfBandMembers] = useState("Solo")
  const [website1, setWebsite1] = useState("")
  const [website2, setWebsite2] = useState("")
  const [website3, setWebsite3] = useState("")
  const [message, setMessage] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    const base = getAirtableBase()
    
    if (!base) {
      console.error('Cannot submit form: Airtable not available')
      alert('Form submission failed. Please try again later.')
      return
    }
    
    base("booking submission form").create(
      {
        name,
        email,
        "act-name": actName,
        "number-of-band-members": numberOfBandMembers,
        website: website1,
        link1: website2,
        link2: website3,
        message,
      },
      function(err: any, record?: any) {
        if (err) {
          console.error(err)
          alert('Form submission failed. Please try again.')
          setIsDisabled(false)
          return
        }
        // Success - redirect to thanks page
        setIsDisabled(true)
        router.push("/thanks")
      }
    )
  }

  return (
    <div className="container">
      <fieldset disabled={isDisabled}>
        <legend>Music Booking Submission Form</legend>
        <form name="booking form" method="POST" onSubmit={handleSubmit}>
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
                  name="name"
                  value={name}
                  placeholder="first and last name"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
                  value={email}
                  placeholder="email"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="actName" className="label is-small has-text-white">
              Name of Act
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="actName"
                  className="input"
                  type="text"
                  name="name-of-act"
                  placeholder="enter the name of your act"
                  value={actName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setActName(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="control">
            <label
              htmlFor="bandMembers"
              className="label is-small has-text-white"
            >
              Number of Band Members
            </label>
            <div className="select">
              <select
                id="bandMembers"
                name="number-of-band-members"
                defaultValue={numberOfBandMembers}
                onBlur={(e: ChangeEvent<HTMLSelectElement>) => {
                  console.log(e)
                  return setNumberOfBandMembers(e.target.value)
                }}
                required
              >
                <option>Solo</option>
                <option>Duo</option>
                <option>Trio</option>
                <option>Quartet</option>
                <option>5pc +</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="website" className="label is-small has-text-white">
              Website
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="website"
                  className="input"
                  name="website"
                  type="url"
                  placeholder="http://"
                  value={website1}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setWebsite1(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="link1" className="label is-small has-text-white">
              Link 1
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="link1"
                  className="input"
                  name="link1"
                  type="url"
                  value={website2}
                  placeholder="http://"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setWebsite2(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="link2" className="label is-small has-text-white">
              Link 2
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="link2"
                  className="input"
                  name="link2"
                  type="url"
                  value={website3}
                  placeholder="http://"
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setWebsite3(e.target.value)}
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="message" className="label is-small has-text-white">
              Message
            </label>
            <div className="field">
              <p className="control is-expanded">
                <textarea
                  id="message"
                  className="textarea"
                  name="message"
                  value={message}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
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

export default BookingForm
