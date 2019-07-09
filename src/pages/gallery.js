import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const GalleryPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the gallery page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Gallery",
  url: 'gallery'
}
export default GalleryPage;
