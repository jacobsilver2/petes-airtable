import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import ImageGallery from 'react-image-gallery';

export const pageQuery = graphql`
  {
    allAirtable(filter: {table: {eq: "gallery"}}, sort: {fields: data___Name}) {
    nodes {
      data {
        Name
        title
        subtitle
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
  const hurrayForGallery = [];
  data.allAirtable.nodes.forEach(node => {
    hurrayForGallery.push({
      original: node.data.Attachments.raw[0].url,
      originalTitle: node.data.title,
      description: node.data.subtitle
    })
  })

  return (
    <>
      <Layout>
        <div className="container">
          <ImageGallery items={hurrayForGallery}/>
        </div>
      </Layout>
    </>
  )
}

export const frontmatter = {
  title: "Gallery",
  url: "/gallery",
}
export default GalleryPage
