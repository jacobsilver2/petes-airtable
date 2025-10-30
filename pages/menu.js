import React from "react"
import Layout from "../src/components/layout"
import createMenuHtml from "../src/utility/createMenuHtml"
import { getMenuData } from "../lib/airtable"

export async function getServerSideProps() {
  const menuData = await getMenuData()
  
  // Sort by order field if it exists
  const sortedData = menuData.sort((a, b) => {
    const orderA = a.data.order || 0
    const orderB = b.data.order || 0
    return orderA - orderB
  })

  return {
    props: {
      menuData: sortedData,
    },
  }
}

const MenuPage = ({ menuData }) => {
  const myhtml = menuData.map((node) => createMenuHtml(node.data))
  
  return (
    <>
      <Layout
        fluid="/images/menu.png"
        fullheight={false}
      >
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export default MenuPage