import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"
// import "./layout.scss"
import './myStyles.scss';
import Helmet from 'react-helmet';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 960px;
  padding: 0px, 1.0875rem 1.45rem;
  padding-top: 0;
`

const Layout = ({ children }) => {
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
      <Helmet title={data.site.siteMetadata.title}/>
      <Navbar siteTitle={data.site.siteMetadata.title} navItems={data.allJavascriptFrontmatter.edges}/>
      <Wrapper>
        <main>{children}</main>
      </Wrapper>
        <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
