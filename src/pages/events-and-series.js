import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const EventsAndSeriesPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the events and series page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Events and Series",
  url: '/events-and-series'
}
export default EventsAndSeriesPage;
