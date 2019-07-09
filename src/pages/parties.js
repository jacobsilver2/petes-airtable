import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const PartiesPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the parties page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Parties",
  url: '/parties'
}
export default PartiesPage;
