import React from "react"
import fakeBlurb from "../utility/fakeblurb"
import moment from "moment"
import styled from 'styled-components';
import Img from 'gatsby-image';

const Image = styled.div`
  margin: auto;
  position: relative;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border-radius: 0.4rem;
  min-height: 300px;
  img {
    border-radius: 0.4rem;
  }
  &:hover {
    box-shadow: 0 40px 45px rgba(0, 0, 0, 0.1);
    transform: scale(1.04);
  }
  a {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: 0.4rem;
    > div {
      position: static !important;
    }
    > div > div {
      position: static !important;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 5px #284187;
    }
  }
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 500px) {
    min-height: 200px;
  }
`;

const Information = styled.div`
  h1 {
    font-size: 1.5rem;
    display: inline-block;
    color: white;
    transition: all 0.4s;
    &:hover {
      color: #3498db;
    }
  }
  text-align: center;
  flex-basis: 100%;
  max-width: 100%;
  width: 100%;
  @media (max-width: 800px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const Date = styled.div`
  margin-top: 1rem;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
`;

const Wrapper = styled.article`
  margin: 0 3rem;
`;

const Container = styled.div`
  text-align: center;
  margin: auto;
  padding: 3rem 0.5rem;
  width: 40%;
  height: 100%;
  flex: 1;
`

function renderImage(image) {
  return (
    <Image>
      <Img fluid={image}/>
    </Image>
  )
}

function renderDate(date) {
  const formattedDate = moment.utc(date).format("dddd, MMMM DD")
  return <Date>{formattedDate}</Date>
}

function renderName(name, date) {
  const time = moment.utc(date).format("h:mma")
  return (
    <Title>
      {time} - {name}
    </Title>
  )
}



function CalendarEventCard(data) {
  return (
    <Container key={data.id}>
      <Wrapper>
        <Information>
          {renderDate(data.Date)}
          {data.Act_Website ? (
            <a href={data.Act_Website[0]}>{renderName(data.Name, data.Date)}</a>
          ) : (
            renderName(data.Name, data.Date)
          )}
        </Information>
        {data.Act_Image ? renderImage(data.Act_Image.localFiles[0].childImageSharp.fluid) : null}
      </Wrapper>
    </Container>
  )
}

export default CalendarEventCard;