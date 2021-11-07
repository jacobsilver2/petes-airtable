import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"

const StyledIFrame = styled.iframe`
  width: 100vw;
  height: 100vh;
`

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
`

export const menuPdfQuery = graphql`
  query MyQuery {
    allAirtable(filter: { table: { eq: "menupdf" } }) {
      nodes {
        data {
          Attachments {
            localFiles {
              publicURL
            }
          }
        }
      }
    }
  }
`
const MenuQr = ({ data }) => {
  const { nodes } = data.allAirtable
  const url = nodes[0].data.Attachments.localFiles[0].publicURL

  return (
    <Layout fluid={null} fullHeight={false}>
      <StyledDiv classname="section is-relative is-fullheight">
        <StyledIFrame src={url} allowfullscreen></StyledIFrame>
      </StyledDiv>
    </Layout>
  )
}

export default MenuQr
