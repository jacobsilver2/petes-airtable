"use client"

import React, { useState, FormEvent, ChangeEvent } from "react"
import { useRouter } from "next/navigation"
import { submitForm } from "../../../app/actions/forms"
import { readSpamTrap } from "../../utility/spamTrap"
import SpamTrap from "./SpamTrap"

const EventBookingForm: React.FC = () => {
  const router = useRouter()
  const [startedAt] = useState(() => Date.now())
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [eventName, setEventName] = useState("")
  const [description, setDescription] = useState("")
  const [frequency, setFrequency] = useState("One Time Only")
  const [startDate, setStartDate] = useState("")
  const [experience, setExperience] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>): Promise<void> {
    e.preventDefault()
    const trap = readSpamTrap(e.currentTarget, startedAt)
    setIsDisabled(true)
    const result = await submitForm("eventBooking", {
      name,
      email,
      phone,
      "event name": eventName,
      description,
      frequency,
      "start date": startDate,
      experience,
    }, trap)
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
        <legend>Show Form</legend>
        <form
          name="photo shoot form"
          method="POST"
          onSubmit={handleSubmit}
        >
          <SpamTrap />
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
