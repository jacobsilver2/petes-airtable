import React from 'react';
import Layout from '../components/layout';
import { navigate } from 'gatsby';
const Thanks = () => {
  setTimeout(function() {navigate('/')}, 3000);
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div className="container">
          Thanks for submitting!  We'll get back to you shortly.
        </div>
      </Layout>
    </>
  )
}

export default Thanks;