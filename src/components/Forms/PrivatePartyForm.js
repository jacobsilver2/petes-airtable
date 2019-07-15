import React, {useState} from 'react';
import Airtable from 'airtable';
import { navigate } from 'gatsby';
const apiKey = process.env.GATSBY_AIRTABLE_API;
const base = new Airtable({apiKey}).base('appNuB0fX4vQbOqdy');


const PrivatePartyForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [numberOfPeople, setNumberOfPeople] = useState('');
  const [desireDate, setDesiredDate] = useState('');
  const [desiredTime, setDesiredTime] = useState('');
  const [hours, setHours] = useState('');
  const [insideOrOutside, setInsideOrOutside] = useState('Inside');
  const [openOrCash, setOpenOrCash] = useState('Open Bar');
  const [occassion, setOccassion] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  
  function handleSubmit(e) {
    e.preventDefault();
    base('private party form').create({
      name,
      email,
      phone,
      "number-of-people": numberOfPeople,
      "desired date": desireDate,
      "desired time": desiredTime,
      "how many hours": hours,
      "inside or outside": insideOrOutside,
      "open bar or cash bar": openOrCash,
      "occasion": occassion,
      "additional info": additionalInfo
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
    <form name="private party form" method="POST" onSubmit={e => handleSubmit(e)}>
      <div className="field">
        <label className="label is-small has-text-white">Name</label>
        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="First and Last Name"
              value={name}
              onChange={e => setName(e.target.value)}
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
        <label className="label is-small has-text-white">How many people?*</label>
        <div className="field is-expanded">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              name="how-many-people"
              value={numberOfPeople}
              onChange={e => setNumberOfPeople(e.target.value)}
              required
            />
          </p>
        </div>
      </div>
  
      <div className="field">
          <label className="label is-small has-text-white">Desired date</label>
          <div className="field">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                name="desired-date"
                value={desireDate}
                onChange={e => setDesiredDate(e.target.value)}
              />
            </p>
          </div>
      </div>
  
      <div className="field">
          <label className="label is-small has-text-white">What time?</label>
          <div className="field">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                value={desiredTime}
                onChange={e => setDesiredTime(e.target.value)}
                name="what time"
              />
            </p>
          </div>
      </div>
  
      <div className="field">
          <label className="label is-small has-text-white">How many hours?*</label>
          <div className="field">
            <p className="control is-expanded">
              <input
                className="input"
                type="text"
                name="how-many-hours"
                value={hours}
                onChange={e => setHours(e.target.value)}
                required
              />
            </p>
          </div>
      </div>
  
      <div className="control">
        <label className="label is-small has-text-white">
          Inside or outside?*
        </label>
        <div className="select">
          <select 
            name="inside-or-outside" 
            required
            value={insideOrOutside}
            onChange={e => setInsideOrOutside(e.target.value)}
          >
            <option>Inside</option>
            <option>Outside</option>
          </select>
        </div>
      </div>
  
      <div className="control">
        <label className="label is-small has-text-white">
          Open bar or cash bar?*
        </label>
        <div className="select">
          <select 
            name="open-bar-or-cash-bar" 
            required
            value={openOrCash}
            onChange={e => setOpenOrCash(e.target.value)}
          >
            <option>Open Bar</option>
            <option>Cash Bar</option>
          </select>
        </div>
      </div>
  
      <div className="field">
        <label className="label is-small has-text-white">What's the occasion?</label>
        <div className="field">
          <p className="control is-expanded">
            <textarea 
              className="textarea" 
              name="whats-the-occasion" 
              value={occassion}
              onChange={e => setOccassion(e.target.value)}
            />
          </p>
        </div>
      </div>
  
      <div className="field">
        <label className="label is-small has-text-white">Anything else we should know? Special requests, etc.</label>
        <div className="field">
          <p className="control is-expanded">
            <textarea 
              className="textarea" 
              name="anything-else-we-should-know" 
              value={additionalInfo}
              onChange={e => setAdditionalInfo(e.target.value)}
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

export default PrivatePartyForm;