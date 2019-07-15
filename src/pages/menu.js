import React from 'react';
// import { graphql } from "gatsby";
import Layout from "../components/layout"


const MenuPage = ({ data }) => {

  return (
    <>
      <Layout>
        <div>
          Hello from the menu page
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Menu",
  url: '/menu',
  navOrder: 10
}
export default MenuPage;
