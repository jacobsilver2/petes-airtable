import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
import "./myStyles.scss"
import Helmet from "react-helmet"
import { renderHero } from "./renderHero"

const Layout = ({ children, fluid, fullheight, regular = false }) => {
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
      {fluid ? renderHero(fluid, fullheight, regular) : null}
      <section style={{ paddingTop: "6rem" }} className="section">
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
