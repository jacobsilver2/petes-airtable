import React, { useState } from "react"
// import { graphql } from "gatsby"
import Layout from "../components/layout"
import BookingForm from '../components/Forms/BookingForm'
import PhotoshootForm from '../components/Forms/PhotoshootForm'
import PrivatePartyForm from '../components/Forms/PrivatePartyForm'
import GeneralForm from '../components/Forms/GeneralForm';

const MultipleChoicePage = ({ data }) => {
  const  [active, setActive]  = useState('');
  const formNames = ['MEDIA INQUIRIES', 'PHOTO SHOOTS', 'MUSIC BOOKING', 'PRIVATE PARTY', 'ALL OTHER INQUIRIES']

  const mappedListItems = formNames.map( name => <li key={name} className={active === name ? 'is-active' : ''} onClick={() => setActive(name)}><a>{name}</a></li> )
  
  function renderForm() {
    if (active === 'MEDIA INQUIRIES') {
      return <GeneralForm />
    }
    if (active === 'MUSIC BOOKING') {
      return <BookingForm />
    }
    if (active === 'PHOTO SHOOTS') {
      return <PhotoshootForm />
    }
    if (active === 'PRIVATE PARTY') {
      return <PrivatePartyForm />
    }
    if (active === 'ALL OTHER INQUIRIES') {
      return <GeneralForm />
    }


  }
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div className="tabs is-centered">
          <ul className="">
            {mappedListItems}
          </ul>
        </div>
        {renderForm()}
      </Layout>
    </>    
  )
}

export default MultipleChoicePage;