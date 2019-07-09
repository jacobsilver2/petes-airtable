import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const AboutPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the about page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "About",
  url: '/about'
}

export default AboutPage;
