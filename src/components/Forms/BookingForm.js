import React from 'react';

const BookingForm = () => (
  <div className="container">
  <form name="booking form" action="/" method="POST" data-netlify="true">
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
        <input className="input" name="email" type="email" placeholder="Email" required />
      </p>
    </div>
  </div>

  <div className="field">
    <label className="label is-small has-text-white">
      Name of Act
    </label>
    <div className="field">
      <p className="control is-expanded">
        <input className="input" type="text" name="name-of-act" />
      </p>
    </div>
  </div>

  <div className="control">
  <label className="label is-small has-text-white">
      Number of Band Members*
  </label>
    <div className="select">
      <select name="number-of-band-members" required>
        <option>Solo</option>
        <option>Duo</option>
        <option>Trio</option>
        <option>Quartet</option>
        <option>5pc +</option>
      </select>
    </div>
  </div>

  <div className="field">
    <label className="label is-small has-text-white">Website</label>
    <div className="field">
      <p className="control is-expanded">
        <input className="input" name="website" type="url" placeholder="http://" />
      </p>
    </div>
  </div>

  <div className="field">
    <label className="label is-small has-text-white">Link 1</label>
    <div className="field">
      <p className="control is-expanded">
        <input className="input" name="link1" type="url" placeholder="http://" />
      </p>
    </div>
  </div>

  <div className="field">
    <label className="label is-small has-text-white">Link 2</label>
    <div className="field">
      <p className="control is-expanded">
        <input className="input" name="link2" type="url" placeholder="http://" />
      </p>
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
  <input type="hidden" name="form-name" value="booking form" />
  </form>
</div>
)

export default BookingForm;