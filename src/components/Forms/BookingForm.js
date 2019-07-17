import React, {useState} from 'react';
import Airtable from 'airtable';
import { navigate } from 'gatsby';
const base = new Airtable({apiKey: process.env.GATSBY_AIRTABLE_API}).base('appNuB0fX4vQbOqdy');



const BookingForm = () => {
  const [name, setName] = useState('');
  const [actName, setActName] = useState('');
  const [email, setEmail] = useState('');
  const [numberOfBandMembers, setNumberOfBandMembers] = useState('Solo');
  const [website1, setWebsite1] = useState('');
  const [website2, setWebsite2] = useState('');
  const [website3, setWebsite3] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    base('booking submission form').create({
      name,
      email,
      "act-name": actName,
      "number-of-band-members": numberOfBandMembers,
      "website": website1,
      "link1": website2,
      "link2": website3,
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
    <form name="booking form" method="POST" onSubmit={e => handleSubmit(e)}>
    <div className="field">
      <label className="label is-small has-text-white">Name</label>
      <div className="field">
        <p className="control is-expanded">
          <input
            className="input"
            type="text"
            name="name"
            value={name}
            placeholder="first and last name"
            onChange={e => setName(e.target.value)}
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
            name="email" 
            type="email" 
            value={email}
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
            required />
        </p>
      </div>
    </div>
  
    <div className="field">
      <label className="label is-small has-text-white">
        Name of Act
      </label>
      <div className="field">
        <p className="control is-expanded">
          <input 
            className="input" 
            type="text" 
            name="name-of-act" 
            placeholder="enter the name of your act"
            value={actName}
            onChange={e => setActName(e.target.value)}
          />
        </p>
      </div>
    </div>
  
    <div className="control">
    <label className="label is-small has-text-white">
        Number of Band Members*
    </label>
      <div className="select">
        <select 
          name="number-of-band-members" 
          value={numberOfBandMembers}
          onChange={e => setNumberOfBandMembers(e.target.value)}
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
      <label className="label is-small has-text-white">Website</label>
      <div className="field">
        <p className="control is-expanded">
          <input 
            className="input" 
            name="website" 
            type="url" 
            placeholder="http://"
            value={website1}
            onChange={e => setWebsite1(e.target.value)}
          />
        </p>
      </div>
    </div>
  
    <div className="field">
      <label className="label is-small has-text-white">Link 1</label>
      <div className="field">
        <p className="control is-expanded">
          <input 
            className="input" 
            name="link1" 
            type="url" 
            value={website2}
            placeholder="http://"
            onChange={e => setWebsite2(e.target.value)}
          />
        </p>
      </div>
    </div>
  
    <div className="field">
      <label className="label is-small has-text-white">Link 2</label>
      <div className="field">
        <p className="control is-expanded">
          <input 
            className="input" 
            name="link2" 
            type="url" 
            value={website3}
            placeholder="http://"
            onChange={e => setWebsite3(e.target.value)}
          />
        </p>
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

export default BookingForm;