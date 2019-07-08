import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from './footer';
import "./layout.css"

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
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <main>{children}</main>
        <Footer />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;
