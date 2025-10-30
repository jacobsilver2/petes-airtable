import React from "react"
import Image from "next/image"
import styled from "styled-components"
import Head from "next/head"
import Navbar from "./navbar"
import TitleBar from "./TitleBar"

const StyledImgContainer = styled.div`
  margin-top: 3rem;
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "")};
  margin-left: auto;
  margin-right: auto;
  position: relative;
`

const Layout = ({ children, fluid, text, subText, maxWidth }) => {
  const siteTitle = "Pete's Candy Store"
  
  return (
    <>
      <Head>
        <html lang="en" />
        <title>{siteTitle}</title>
      </Head>
      <Navbar siteTitle={siteTitle} />
      {fluid && (
        <StyledImgContainer maxWidth={maxWidth}>
          <Image
            src={fluid}
            alt="Pete's Candy Store"
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
        </StyledImgContainer>
      )}
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
