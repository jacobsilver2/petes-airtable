import React from 'react';

const GeneralForm = () => (
  <div className="container">
  <form name="private party form" action="/" method="POST" data-netlify="true">
    <div className="field">
      <label className="label is-small has-text-white">Name</label>
      <div className="field">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            placeholder="First and Last Name"
            name="name"
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
            required
          />
        </p>
      </div>
    </div>

    <div className="field">
      <label className="label is-small has-text-white">Phone</label>
        <div className="field is-expanded">
          <div className="field has-addons">
            <p className="control">
              <a className="button is-static">+1</a>
            </p>
            <p className="control is-expanded">
              <input
                className="input"
                type="tel"
                placeholder="Phone Number"
                name="phone"
              />
            </p>
          </div>
        </div>
    </div>

    <div className="field">
      <label className="label is-small has-text-white">Message</label>
      <div className="field">
        <p className="control is-expanded">
          <textarea className="textarea" name="message" />
        </p>
      </div>
    </div>

    <div className="field">
      <div className="control">
        <button type="submit" className="button is-link has-background-danger">
          Submit
        </button>
      </div>
    </div>
    <input type="hidden" name="form-name" value="private party form" />
    </form>
  </div>
)

export default GeneralForm;