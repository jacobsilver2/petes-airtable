import React, { useState, useEffect } from "react"
import Airtable from "airtable"
import { navigate } from "gatsby"
import { Circles } from "react-loader-spinner"

const base = new Airtable({ apiKey: process.env.GATSBY_AIRTABLE_API }).base(
  "app4Eb0X39KtGToOS"
)

const MediaRequestForm = ({ id, date, time, actEmail, eventId }) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [act, setAct] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [soundcloud, setSoundCloud] = useState("")
  const [twitter, setTwitter] = useState("")
  const [instagram, setInstagram] = useState("")
  const [blurb, setBlurb] = useState("")

  const [filename, setFilename] = useState("")
  const [imageUrl, setImageUrl] = useState(null)
  const [largeImage, setLargeImage] = useState(null)

  const [tooLarge, setTooLarge] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    base("Acts").find(id, function (err, record) {
      if (err) {
        console.error(err)
        return
      }
      setAct(record.fields.Name)
      setEmail(actEmail)
    })
  }, [actEmail, id])

  async function addImage(e) {
    e.preventDefault()
    if (e.target.files[0].size > 5000000) {
      setTooLarge(true)
      setIsDisabled(true)
      return
    }
    setFilename(e.target.files[0].name)
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append("upload_preset", "petes-act-images")
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
      setLargeImage(file.eager[0].secure_url)
    } catch (err) {
      throw new Error("Something went wrong.  I promise it's not your fault")
    }
    setTooLarge(false)
    setLoading(false)
    setIsDisabled(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setIsDisabled(true)

    base("Events").update(
      [
        {
          id: eventId,
          fields: {
            Name: act,
          },
        },
      ],
      function (err, record) {
        if (err) {
          console.log(err)
          return
        }
      }
    )

    base("Acts").update(
      [
        {
          id: id,
          fields: {
            Name: act,
            "First Name": firstName,
            "Last Name": lastName,
            Blurb: blurb,
            Email: email,
            Soundcloud: soundcloud,
            Website: website,
            Instagram: instagram,
            Twitter: twitter,
            Image: [{ url: largeImage }],
            Image_URL: imageUrl,
          },
        },
      ],
      function (err, record) {
        if (err) {
          console.error(err)
          return
        }
      }
    )

    navigate("/thanks")
  }

  return (
    <div className="container">
      <fieldset>
        <legend>Media Request Form</legend>
        <form
          name="media request form"
          onSubmit={(e) => handleSubmit(e)}
          // method="POST"
        >
          <div className="field">
            <label
              htmlFor="firstName"
              className="label is-small has-text-white"
            >
              First Name
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="firstName"
                  className="input"
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="lastName" className="label is-small has-text-white">
              Last Name
            </label>
            <div className="field">
              <p className="control is-expanded">
                <input
                  id="lastName"
                  className="input"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
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
                  placeholder="Name of Act"
                  name="act"
                  onChange={(e) => setAct(e.target.value)}
                  value={act}
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
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </p>
            </div>
          </div>

          <div className="field">
            <label htmlFor="date" className="label is-small has-text-white">
              Date
            </label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    id="date"
                    className="input"
                    type="date"
                    placeholder="date"
                    value={date}
                    readOnly
                    name="date"
                    required
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="time" className="label is-small has-text-white">
              Time
            </label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    id="time"
                    className="input"
                    type="time"
                    placeholder="time"
                    value={time}
                    readOnly
                    name="time"
                    required
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="website" className="label is-small has-text-white">
              Website
            </label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    id="website"
                    className="input"
                    type="url"
                    placeholder="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    name="website"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="soundCloud"
              className="label is-small has-text-white"
            >
              Soundcloud
            </label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    id="soundCloud"
                    className="input"
                    type="url"
                    placeholder="url"
                    value={soundcloud}
                    onChange={(e) => setSoundCloud(e.target.value)}
                    name="soundcloud"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="twitter" className="label is-small has-text-white">
              Twitter Handle
            </label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    id="twitter"
                    className="input"
                    type="text"
                    placeholder="twitter"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    name="twitter"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label
              htmlFor="instagram"
              className="label is-small has-text-white"
            >
              Instagram Handle
            </label>
            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    id="instagram"
                    className="input"
                    type="text"
                    placeholder="instagram"
                    value={instagram}
                    onChange={(e) => setInstagram(e.target.value)}
                    name="instagram"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="blurb" className="label is-small has-text-white">
              Short blurb about your act (450 character limit)
              {blurb.length > 450 && (
                <label
                  htmlFor="blurbError"
                  className="label is-small has-text-danger"
                >
                  Must be 450 characters or less
                </label>
              )}
            </label>

            <div className="field is-expanded">
              <div className="field has-addons">
                <p className="control is-expanded">
                  <textarea
                    id="blurb"
                    className="textarea"
                    placeholder="short blurb"
                    value={blurb}
                    onChange={(e) => {
                      setBlurb(e.target.value)
                      if (blurb.length > 450) {
                        setIsDisabled(true)
                      } else {
                        setIsDisabled(false)
                      }
                    }}
                    name="blurb"
                  />
                </p>
              </div>
            </div>
          </div>

          <div className="field">
            <label htmlFor="image" className="label is-small has-text-white">
              Show Image/Art (The file must be less than 5MB.)
            </label>
            {tooLarge && (
              <label htmlFor="image" className="label is-small has-text-danger">
                The image is too large.
              </label>
            )}
            <div className="file has-name is-fullwidth">
              <label className="file-label">
                <input
                  id="image"
                  disabled={loading}
                  className="file-input"
                  type="file"
                  name="picture"
                  accept="image/gif, image/jpeg, image/png"
                  onChange={(e) => addImage(e)}
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
            <Circles visible={loading} color="#feff03" />
          </div>

          <div className="field">
            <div className="control">
              <button
                disabled={loading || isDisabled}
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

export default MediaRequestForm
