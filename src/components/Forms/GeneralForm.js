import React, {useState} from 'react';
import Airtable from 'airtable';
import { navigate } from 'gatsby';
const apiKey = process.env.AIRTABLE_API;
const base = new Airtable({apiKey}).base('appNuB0fX4vQbOqdy');

const GeneralForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    base('general inquiry form').create({
      name,
      email,
      phone,
      message
    }, function(err, record) {
      if (err) {
        console.error(err);
        return;
      }
    });
    navigate('/thanks')
  }

  return (
    <div className="container">
    <form name="private party form" onSubmit={e => handleSubmit(e)} method="POST">
      <div className="field">
        <label className="label is-small has-text-white">Name</label>
        <div className="field">
          <p className="control is-expanded">
            <input
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
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
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
            <textarea 
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
          <button type="submit" className="button is-link has-background-danger">
            Submit
          </button>
        </div>
      </div>
      </form>
    </div>
  )
}

export default GeneralForm;