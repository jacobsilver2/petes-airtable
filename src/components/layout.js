import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import "./myStyles.scss"
import Helmet from "react-helmet"
// import BackgroundSection from "./BackgroundSection"
import TitleBar from "./TitleBar"

const StyledImg = styled(Img)`
  margin-top: 3rem;
  max-width: ${props => (props.maxWidth ? props.maxWidth : "")};
  margin-left: auto;
  margin-right: auto;
`

const Layout = ({
  children,
  fluid,
  text,
  subText,
  maxWidth,
  fullheight,
  regular = false,
}) => {
  const data = useStaticQuery(graphql`
    query siteQuery {
      site {
        siteMetadata {
          title
        }
      }
      allJavascriptFrontmatter {
        edges {
          node {
            frontmatter {
              title
              url
              navOrder
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Helmet title={data.site.siteMetadata.title} />
      <Navbar
        siteTitle={data.site.siteMetadata.title}
        navItems={data.allJavascriptFrontmatter.edges}
      />
      {/* <BackgroundSection fluid={fluid} /> */}
      <StyledImg maxWidth={maxWidth} fluid={fluid} />
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
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
