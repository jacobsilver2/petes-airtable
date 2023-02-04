import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import createHtml from "../utility/createHtml"

// export const pageQuery = graphql`{
//   allAirtable(filter: {table: {eq: "parties"}}, sort: {data: {order: ASC}}) {
//     nodes {
//       data {
//         Name
//         Content
//         type
//         website
//         id
//         Attachments {
//           localFiles {
//             childImageSharp {
//               gatsbyImageData(layout: FULL_WIDTH)
//             }
//           }
//         }
//       }
//     }
//   }
//   file(relativePath: {eq: "parties.png"}) {
//     childImageSharp {
//       gatsbyImageData(width: 960, layout: CONSTRAINED)
//     }
//   }
// }`

const PartiesPage = ({ data }) => {
  const { nodes } = data.allAirtable
  const html = nodes.map((node) => createHtml(node.data))
  return (
    <>
      <Layout
        fluid={data.file.childImageSharp.gatsbyImageData}
        fullheight={false}
      >
        <div>{html}</div>
      </Layout>
    </>
  )
}

export default PartiesPage
