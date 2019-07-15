import React, {useState} from 'react';
import Airtable from 'airtable';
import { navigate } from 'gatsby';
const base = new Airtable({apiKey: process.env.AIRTABLE_API}).base('appNuB0fX4vQbOqdy');

const PhotoshootForm = () => {

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [castAndCrew, setCastAndCrew] = useState('');
  const [typeOfShoot, setTypeOfShoot] = useState('');
  const [desiredDate, setDesiredDate] = useState('');
  const [desiredHours, setDesiredHours] = useState('');
  const [nameOfProduction, setNameOfProduction] = useState('');
  const [productionCompany, setProductionCompany] = useState('');
  const [location, setLocation] = useState('');
  const [vehicles, setVehicles] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    base('photoshoot form').create({
      name,
      email,
      phone,
      "number-of-people": castAndCrew,
      "type-of-shoot": typeOfShoot,
      "desired date": desiredDate,
      "desired time": desiredHours,
      "production name": nameOfProduction,
      "production company": productionCompany,
      location,
      "number of vehicles": vehicles
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
    <form name="photo shoot form" method="POST" onSubmit={e => handleSubmit(e)}>
    <div className="field">
        <label className="label is-small has-text-white">Name</label>
        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="First and Last Name"
              name="name"
              value={name}
              onChange={e => setName(e.target.value)}
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
                value={phone}
                onChange={e => setPhone(e.target.value)}
              />
            </p>
          </div>
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
              />
            </p>
        </div>
    </div>
  
    <div className="field">
        <label className="label is-small has-text-white">Total number of cast and crew</label>
        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              name="total-number-of-cast-and-crew"
              value={castAndCrew}
              onChange={e => setCastAndCrew(e.target.value)}
            />
          </p>
        </div>
    </div>
  
    <div className="field">
        <label className="label is-small has-text-white">Type of shoot (film/video/still) *</label>
        <div className="field">
          <p className="control is-expanded">
            <textarea
              className="textarea"
              name="type-of-shoot"
              value={typeOfShoot}
              onChange={e => setTypeOfShoot(e.target.value)}
            ></textarea>
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
              value={desiredDate}
              onChange={e => setDesiredDate(e.target.value)}
            />
          </p>
        </div>
    </div>
  
    <div className="field">
        <label className="label is-small has-text-white">Desired hours (total hours and which hours you desire)</label>
        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              name="desired-hours"
              value={desiredHours}
              onChange={e => setDesiredHours(e.target.value)}
            />
          </p>
        </div>
    </div>
  
    <div className="field">
        <label className="label is-small has-text-white">Name of production</label>
        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              name="name-of-production"
              value={nameOfProduction}
              onChange={e => setNameOfProduction(e.target.value)}
            />
          </p>
        </div>
    </div>
  
    <div className="field">
        <label className="label is-small has-text-white">Production company</label>
        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              name="production-company"
              value={productionCompany}
              onChange={e => setProductionCompany(e.target.value)}
            />
          </p>
        </div>
    </div>
  
    <div className="field">
        <label className="label is-small has-text-white">Where would you like to shoot (bar, live room, back yard)</label>
        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              name="where-would-you-like-to-shoot"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
          </p>
        </div>
    </div>
  
    <div className="field">
        <label className="label is-small has-text-white">How many vehicles associated with shoot</label>
        <div className="field">
          <p className="control is-expanded">
            <input
              className="input"
              type="text"
              name="how-many-vehicles"
              value={vehicles}
              onChange={e => setVehicles(e.target.value)}
            />
          </p>
        </div>
    </div>
  
    <div className="field">
      <div className="control">
        <button type="submit" className="button is-link has-background-danger">Submit</button>
      </div>
    </div>
    </form>
  </div>
  )
}

export default PhotoshootForm;