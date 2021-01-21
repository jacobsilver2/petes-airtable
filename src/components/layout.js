import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import "./myStyles.scss"
import Helmet from "react-helmet"
import BackgroundSection from "./BackgroundSection"
import TitleBar from "./TitleBar"

const Layout = ({
  children,
  fluid,
  text,
  subText,
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
      <BackgroundSection fluid={fluid} />
      {text && <TitleBar text={text} subText={subText} />}
      <section className="section">{children}</section>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
