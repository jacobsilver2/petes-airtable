import React from 'react';
import { graphql } from "gatsby";
import Layout from "../components/layout"
import createMenuHtml from '../utility/createMenuHtml';


export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "menu" } }, sort: {fields: data___order}
    ) {
      nodes {
        data {
          Name
          Description
          Price
          type
          id
        }
      }
    }
  }
`

const MenuPage = ({ data }) => {
  const { nodes } = data.allAirtable;
  const myhtml = nodes.map(node => createMenuHtml(node.data))
  return (
    <>
      <Layout fluid={null} fullheight={false}>
        <div>
          {myhtml}
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
