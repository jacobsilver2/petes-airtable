import styled from "styled-components"

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 4px;
`

export const Events = styled.ul`
  border: 1px solid white;
`

export const Event = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 300px 2fr);
  grid-template-areas: "image content";
  /* grid-template-columns: 1fr; */
  grid-gap: 2rem;
  margin-bottom: 3rem;
  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
  }
`
//! REMOVE THE TEXT ALIGN CENTER ONCE WE PUT BACK IMAGES
export const StyledDate = styled.div`
  font-size: 3rem;
  font-style: italic;
  color: white;
  text-align: left;
  /* text-align: center; */
  padding-bottom: 0.5rem;
  @media screen and (max-width: 980px) {
    text-align: center;
  }
`

export const StyledBlurb = styled.div``

export const StyledImage = styled.div`
  /* pretty easy way to align center */
  display: grid;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 980px) {
    grid-column: span 2;
  }
`

export const StyledTitle = styled.h3`
  color: #ffff04;
  font-style: italic;
  display: block;
  margin: 0 0 8px 0;
  font-size: 2rem;
  line-height: 1;
  font-weight: 900;
  letter-spacing: 0.02em;
  text-decoration: none;
  &:hover {
    color: red;
  }
`

export const StyledLink = styled.a`
  color: red;
  text-decoration: none;
  &:hover {
    color: white;
  }
`
//! REMOVE THE JUStIFY-SELF AND TEXT ALIGN AFTER WE PUT BACK IMAGES
export const StyledContentContainer = styled.div`
  /* justify-self: center;
  text-align: center; */
  @media screen and (max-width: 980px) {
    justify-self: center;
    text-align: center;
  }
`

export const StyledContent = styled.p`
  font-size: 1.3rem;
`
