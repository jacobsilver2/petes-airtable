import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  border-radius: 4px;
`

export const Events = styled.ul`
  border: 1px solid white;
`;

export const Event = styled.li`
  margin-bottom: 3rem;
`;

export const StyledDate = styled.div`
  border-top: 1px solid white;
  font-size: 3.0rem;
  color: white;
  text-align: center;
  padding-bottom: .5rem;
`;

export const StyledBlurb = styled.div`

`;

export const StyledImage = styled.div`
  width: 8rem;
  height: 8rem;
`
export const StyledTitle = styled.h3`
  color: #ffff04;
  display: block;
  margin: 0 0 8px 0;
  font-size: 2rem;
  line-height: 1;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-decoration: none;
  &:hover {
    color: red;
  }
`;

export const StyledLink = styled.a`
  color: red;
  text-decoration: none;
  &:hover {
    color: white;
  }
`;

