import React from 'react';
import { Link } from "gatsby";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout"


const PhotoShootsPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the photo shoots page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Photo Shoots",
  url: '/photo-shoots'
}
export default PhotoShootsPage;
