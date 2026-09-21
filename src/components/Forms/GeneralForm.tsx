"use client"

import React, { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { submitForm } from "../../../app/actions/forms"

const GeneralForm: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    setIsDisabled(true)
    const result = await submitForm("general", { name, email, phone, message })
    if (!result.ok) {
      alert("Form submission failed. Please try again later.")
      setIsDisabled(false)
      return
    }
    router.push("/thanks")
  }

  return (
    <div className="container">
      <fieldset disabled={isDisabled}>
        <legend>General Inquiries Form</legend>
        <form
          name="private party form"
          onSubmit={handleSubmit}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value)}
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

export default GeneralForm
