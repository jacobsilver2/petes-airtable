import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const HistoryPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the history page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "History",
  url: 'history'
}
export default HistoryPage;
