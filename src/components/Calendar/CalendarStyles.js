import styled from "styled-components"

export const Wrapper = styled.div`
  display: grid;
  width: 100%;
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* overflow: none; */
  border-radius: 4px;
`

export const Events = styled.ul`
  /* border: 1px solid white; */
`

export const Event = styled.div`
  display: grid;
  grid-template-columns: 300px 2fr;
  grid-template-rows: 300px;
  grid-gap: 5rem;
  margin-bottom: 3rem;
`

export const StyledDate = styled.div`
  /* border-top: 1px solid white; */
  font-size: 3rem;
  font-style: italic;
  color: white;
  text-align: left;
  padding-bottom: 0.5rem;
`

export const StyledBlurb = styled.div``

export const StyledImage = styled.div``

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

export const StyledContent = styled.p`
  font-size: 1.3rem;
`
