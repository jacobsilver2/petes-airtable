import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Gallery } from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "gallery" }, data: { display: { eq: true } } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          display
          order
          width
          height
        }
        cloudinaryImg {
          url
        }
      }
    }
  }
`

const GalleryPage = ({ data }) => {
  const [index, setIndex] = useState(-1)
  const handleClick = (index, item) => setIndex(index)

  const photos = data.allAirtable.nodes.map((node) => {
    const nodeObj = {
      src: node.cloudinaryImg.url,
      width: parseInt(Math.ceil(node.data.width)),
      height: parseInt(Math.ceil(node.data.height)),
      alt: node.data.Name,
    }
    return nodeObj
  })

  return (
    <Layout>
      <div className="container">
        <div>
          <Gallery
            direction="column"
            images={photos}
            enableImageSelection={false}
            margin={8}
            rowHeight={200}
            onClick={handleClick}
          />
        </div>
        <Lightbox
          slides={photos.map((photo) => ({
            src: photo.src,
          }))}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </Layout>
  )
}

export default GalleryPage
