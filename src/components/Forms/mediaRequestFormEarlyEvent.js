import React, { useState } from "react"
import Airtable from "airtable"
import { navigate } from "gatsby"
import moment from "moment"

// initialize Airtable
const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "appNuB0fX4vQbOqdy"
)
const cloudinaryName = "dlskxwzm6"
const unsignedUploadPreset = "testUpload"

const mediaRequestFormEarlyEvent = () => {
  const [name, setname] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState(new Date().toDateString())
  const [time, setTime] = useState(new Date().toTimeString())
  const [facebook, setFacebook] = useState("")
  const [twitter, setTwitter] = useState("")
  const [instagram, setInstagram] = useState("")
  const [website, setWebsite] = useState("")
  const [isDisabled, setisDisabled] = useState(false)
  const [filename, setFilename] = useState("")
  const [imageUrl, setImageUrl] = useState(null)
  const [largeImage, setlargeImage] = useState(null)
  const [loading, setLoading] = useState(false)

  async function addImage(e) {
    e.preventDefault()
    setFilename(e.target.files[0].name)
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "petes-early-events")
    setLoading(true)
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dlskxwzm6/image/upload",
        {
          method: "POST",
          body: data,
        }
      )
      const file = await res.json()
      setImageUrl(file.secure_url)
      setlargeImage(file.eager[0].secure_url)
    } catch (err) {
      throw new Error("Something went wrong.  I promise it's not your fault")
    }
    setLoading(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    base("Media Request Form Early Event").create(
      {
        Name: name,
        Email: email,
        Date: moment.utc(date + "" + time, "YYYY/MM/DD HH:mm"),
        Facebook: facebook,
        Website: website,
        Instagram: instagram,
        Twitter: twitter,
        Image: [{ url: largeImage }],
      },
      function(err, record) {
        if (err) {
          console.error(err)
          return
        }
      }
    )
    setisDisabled(true)
    navigate("/thanks")
  }

  return (
    <div className="container">
      <fieldset disabled={isDisabled && !loading}>
        <form
          name="media request form early event"
          onSubmit={e => handleSubmit(e)}
          method="POST"
        >
          <div className="field">
            <label className="label is-small has-text-white">
              Name of Show
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  className="input"
                  type="text"
                  placeholder="Name of Show"
                  name="name"
                  onChange={e => setname(e.target.value)}
                  value={name}
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Email</label>
            <div className="field is-expanded">
              <p className="control is-expanded">
                <input
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
            <label className="label is-small has-text-white">Date</label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="date"
                    placeholder="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                    name="date"
                    required
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Time</label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="time"
                    placeholder="time"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                    name="time"
                    required
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Facebook</label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="url"
                    placeholder="url"
                    value={facebook}
                    onChange={e => setFacebook(e.target.value)}
                    name="facebook"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Website</label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="url"
                    placeholder="url"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                    name="website"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Twitter</label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="url"
                    placeholder="url"
                    value={twitter}
                    onChange={e => setTwitter(e.target.value)}
                    name="twitter"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">Instagram</label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="url"
                    placeholder="url"
                    value={instagram}
                    onChange={e => setInstagram(e.target.value)}
                    name="instagram"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label className="label is-small has-text-white">
              Show Image/Art (The file must be less than 5MB.)
            </label>
            <div className="file has-name is-fullwidth">
              <label className="file-label">
                <input
                  disabled={loading}
                  className="file-input"
                  type="file"
                  name="picture"
                  accept="image/gif, image/jpeg, image/png"
                  onChange={e => addImage(e)}
                />
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">Choose a file…</span>
                </span>
                <span className="file-name">{filename}</span>
              </label>
            </div>
            {imageUrl && (
              <img src={imageUrl} alt="Upload Preview" width="200" />
            )}
          </div>

          <div className="field">
            <div className="control">
              <button
                type="submit"
                className="button is-link has-background-danger"
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

export default mediaRequestFormEarlyEvent
