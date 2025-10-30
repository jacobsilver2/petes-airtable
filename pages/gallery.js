import React, { useState } from "react"
import Layout from "../src/components/layout"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { getGalleryData } from "../lib/airtable"

export async function getServerSideProps() {
  const galleryData = await getGalleryData()
  
  // Filter for display=true and sort by order
  const filteredData = galleryData
    .filter(node => node.data.display)
    .sort((a, b) => {
      const orderA = a.data.order || 0
      const orderB = b.data.order || 0
      return orderA - orderB
    })

  return {
    props: {
      galleryData: filteredData,
    },
  }
}

const GalleryPage = ({ galleryData }) => {
  const [index, setIndex] = useState(-1)
  
  // Convert Airtable data to react-grid-gallery format
  const images = galleryData.map((node, idx) => ({
    src: node.data.Attachments?.[0]?.url || '',
    width: node.data.width || 300,
    height: node.data.height || 200,
    caption: node.data.Name || '',
    key: idx
  }))
  
  const handleClick = (index) => setIndex(index)
  
  return (
    <>
      <Layout fullheight={false}>
        <div className="container">
          <h1 className="has-text-danger" style={{ textAlign: "center" }}>
            GALLERY
          </h1>
          <Gallery
            images={images}
            onClick={handleClick}
            enableImageSelection={false}
          />
        </div>
      </Layout>
      
      <Lightbox
        slides={images}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  )
}

export default GalleryPage