import React from "react"
import { GetServerSideProps } from "next"
import Layout from "../src/components/layout"
import createMenuHtml from "../src/utility/createMenuHtml"
import { getMenuData } from "../lib/airtable"
import { AirtableRecord } from "../types"

interface MenuPageProps {
  menuData: AirtableRecord[]
}

export const getServerSideProps: GetServerSideProps<MenuPageProps> = async () => {
  const menuData = await getMenuData()
  
  // Sort by order field if it exists
  const sortedData = menuData.sort((a: AirtableRecord, b: AirtableRecord) => {
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

const MenuPage: React.FC<MenuPageProps> = ({ menuData }) => {
  const myhtml = menuData.map((node) => createMenuHtml({ ...node.data, id: node.id }))
  
  return (
    <>
      <Layout
        fluid="/images/menu.png"
      >
        <div>{myhtml}</div>
      </Layout>
    </>
  )
}

export default MenuPage