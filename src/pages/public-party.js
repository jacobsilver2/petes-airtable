import React from 'react';
import Layout from '../components/layout';

const PublicParty = ({ data }) => {
  return (
    <>
      <Layout>
        <div>
          Welcome to Private Party
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Public Party",
  url: "/public-party"
}

export default PublicParty;