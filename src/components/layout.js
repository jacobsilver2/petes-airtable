import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import "./myStyles.scss"
import Helmet from "react-helmet"
import TitleBar from "./TitleBar"

const StyledImg = styled(GatsbyImage)`
  margin-top: 3rem;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  margin-left: auto;
  margin-right: auto;
`

const Layout = ({ children, fluid, text, subText, maxWidth }) => {
  const data = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
        title={data.site.siteMetadata.title}
      />
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <StyledImg maxWidth={maxWidth} image={fluid} />
      {text && <TitleBar text={text} subText={subText} />}
      <section
        style={{
          marginTop: fluid ? "0" : "3rem",
          paddingLeft: "0",
          paddingRight: "0",
        }}
        className="section"
      >
        {children}
      </section>
    </>
  )
}

export default Layout
