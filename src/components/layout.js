import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import "./myStyles.scss"
import Helmet from "react-helmet"
import Img from "gatsby-image"

function renderHero(fluid, fullheight) {
  if (fluid && fullheight) {
    return (
      <section className="hero is-fullheight">
        <Img className="hero-body" fluid={fluid} />
      </section>
    )
  }
  if (fluid) {
    return (
      <section className="hero">
        <Img className="hero-body" fluid={fluid} />
      </section>
    )
  }
}

const Layout = ({ children, fluid, fullheight }) => {
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
      {fluid ? renderHero(fluid, fullheight) : null}

      <section className="section">{children}</section>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
