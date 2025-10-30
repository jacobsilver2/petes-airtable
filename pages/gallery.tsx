import React, { useState } from "react"
import { GetServerSideProps } from "next"
import Layout from "../src/components/layout"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"
import { getGalleryData } from "../lib/airtable"
import { AirtableRecord } from "../types"

interface GalleryPageProps {
  galleryData: AirtableRecord[]
}

interface GalleryImage {
  src: string
  width: number
  height: number
  caption: string
  key: number
}

export const getServerSideProps: GetServerSideProps<GalleryPageProps> = async () => {
  const galleryData = await getGalleryData()
  
  // Filter for display=true and sort by order
  const filteredData = galleryData
    .filter((node: AirtableRecord) => node.data.display)
    .sort((a: AirtableRecord, b: AirtableRecord) => {
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

const GalleryPage: React.FC<GalleryPageProps> = ({ galleryData }) => {
  const [index, setIndex] = useState<number>(-1)
  
  // Convert Airtable data to react-grid-gallery format
  const images: GalleryImage[] = galleryData.map((node, idx) => ({
    src: node.data.Attachments?.[0]?.url || '',
    width: node.data.width || 300,
    height: node.data.height || 200,
    caption: node.data.Name || '',
    key: idx
  }))
  
  const handleClick = (index: number) => setIndex(index)
  
  return (
    <>
      <Layout>
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