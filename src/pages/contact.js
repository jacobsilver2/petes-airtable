import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const ContactPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the contact page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Contact",
  url: '/contact'
}
export default ContactPage;
