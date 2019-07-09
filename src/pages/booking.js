import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const BookingPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the booking page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Booking",
  url: '/booking'
}
export default BookingPage;
