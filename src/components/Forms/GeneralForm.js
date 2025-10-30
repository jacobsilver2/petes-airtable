import React, { useState } from "react"
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

const GeneralForm = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const base = getAirtableBase()
    
    if (!base) {
      console.error('Cannot submit form: Airtable not available')
      alert('Form submission failed. Please try again later.')
      return
    }
    
    base("general inquiry form").create(
      {
        name,
        email,
        phone,
        message,
      },
      function(err, record) {
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
        <legend>General Inquiries Form</legend>
        <form
          name="private party form"
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
                  type="text"
                  placeholder="First and Last Name"
                  name="name"
                  onChange={e => setName(e.target.value)}
                  value={name}
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
                  type="email"
                  placeholder="Email"
                  name="email"
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
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    name="phone"
                  />
                </p>
              </div>
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
                  onChange={e => setMessage(e.target.value)}
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

export default GeneralForm
