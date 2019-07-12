import React from 'react';
import Layout from '../components/layout';

const PrivateParty = ({ data }) => {
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
  title: "Private Party",
  url: "/private-party"
}

export default PrivateParty;