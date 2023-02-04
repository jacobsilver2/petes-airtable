import React, { useState, useCallback } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Gallery from "react-photo-gallery"
import Carousel, { Modal, ModalGateway } from "react-images"

export const pageQuery = graphql`
  {
    allAirtable(
      filter: { table: { eq: "gallery" } }
      sort: { data: { order: ASC } }
    ) {
      nodes {
        data {
          Name
          title
          subtitle
          display
          order
          width
          height
          Attachments {
            raw {
              url
            }
          }
        }
      }
    }
  }
`

const GalleryPage = ({ data }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [viewerIsOpen, setViewerIsOpen] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index)
    setViewerIsOpen(true)
  }, [])

  const closeLightbox = () => {
    setCurrentImage(0)
    setViewerIsOpen(false)
  }

  const photos = data.allAirtable.nodes
    .filter((node) => node.data.display)
    .map((node) => {
      const nodeObj = {
        src: node.data.Attachments.raw[0].url,
        width: parseInt(Math.ceil(node.data.width)),
        height: parseInt(Math.ceil(node.data.height)),
        alt: node.data.Name,
      }
      return nodeObj
    })

  return (
    <>
      <Layout>
        <div className="container">
          <div>
            <Gallery
              direction="column"
              photos={photos}
              onClick={openLightbox}
            />
          </div>
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  styles={{
                    view: (base, state) => ({
                      ...base,
                      "& > img": {
                        maxWidth: "80%",
                      },
                    }),
                  }}
                  currentIndex={currentImage}
                  views={photos.map((x) => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title,
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </Layout>
    </>
  )
}

export default GalleryPage
