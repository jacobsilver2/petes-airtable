import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const PressPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the press page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Press",
  url: '/press'
}
export default PressPage;
