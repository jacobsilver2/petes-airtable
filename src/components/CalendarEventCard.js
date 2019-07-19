// import React from "react"
// import moment from "moment"
// import styled from 'styled-components';
// import Img from 'gatsby-image';
// import randomBlurb from '../utility/fakeblurb';

// const Image = styled.div`
//   position: absolute;
//   top: 0;
//   overflow: hidden;
//   right: 0;
//   left: 0;
//   bottom: 0;
//   z-index: 1;
//   object-fit: cover;
//   border-radius: 0.4rem;
//   img {
//     border-radius: 0.4rem;
//   }
//   > div {
//     position: static !important;
//   }
//   > div > div {
//     position: static !important;
//   }
// `;

// const StyledLink = styled.a`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   padding: 1rem;
//   z-index: 3;
//   border-radius: 0.4rem;
//   &:after {
//     content: '';
//     position: absolute;
//     display: block;
//     width: 100%;
//     height: 100%;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: linear-gradient(
//       to bottom,
//       rgba(0, 0, 0, 0) 0%,
//       rgba(0, 0, 0, 0.3) 50%,
//       rgba(0, 0, 0, 0.7) 80%,
//       rgba(0, 0, 0, 0.8) 100%
//     );
//     z-index: -10;
//     border-radius: 0.4rem;
//     transition: opacity 0.4s;
//   }
// `;


// const Info = styled.div`
//   color: white;
//   margin: 0 1rem 1.25rem 1.25rem;
//   position: absolute;
//   bottom: 0;
//   left: 0;
// `;

// const Date = styled.div`
//   margin-top: 1rem;
//   color: white;
// `;

// const Title = styled.h2`
//   margin-bottom: 0.6rem;
// `;

// const Wrapper = styled.section`
//   margin-bottom: 2rem;
//   position: relative;
//   z-index: 100;
//   border-radius: 0.4rem;
//   box-shadow: 0 15px 25px rgba(0, 0, 0, 0.2);
//   transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//   height: 17rem;
//   flex-basis: calc(99.9% * 1 / 3 - 2.5rem);
//   max-width: calc(99.9% * 1 / 3 - 2.5rem);
//   /* width: calc(99.9% * 1 / 3 - 2.5rem); */
//   width: 100%;
//   &:hover {
//     box-shadow: 0 50px 50px rgba(0 0 0 0.1);
//     transform: scale(1.04);
//   }
//   @media (max-width: 1000px) {
//     flex-basis: calc(99.9% * 1 / 2 - 1rem);
//     max-width: calc(99.9% * 1 / 2 - 1rem);
//     width: calc(99.9% * 1 / 2 - 1rem);
//     height: 18rem;
//   }
//   @media (max-width: 700px) {
//     flex-basis: 100%;
//     max-width: 100%;
//     width: 100%;
//     height: 15rem;
//   }
// `;

// const Container = styled.div`
//   text-align: center;
//   margin: auto;
//   padding: 1rem 0.5rem;
//   width: 100%;
//   height: 100%;
//   flex: 1;
// `

// function renderImage(image) {
//   return (
//     <Image>
//       <Img fluid={image}/>
//     </Image>
//   )
// }

// function renderDate(date) {
//   const formattedDate = moment.utc(date).format("dddd, MMMM DD")
//   return formattedDate;
// }

// function renderName(name, date) {
//   const time = moment.utc(date).format("h:mma")
//   return `${time} - ${name}`
// }

// function renderExcerpt( str, limit )
// {
// 	var body = new String( str );
// 	var summary = new String(str);
// 		summary = summary.substr( 0, summary.lastIndexOf( ' ', limit ) ) + '...';
 
// 	var returnString = new Object({
// 		body: body,
// 		summary: summary
// 	});
 
// 	return summary;
// }

// function getRandomImage(randomImages) {
//   const randomImageIndex = Math.floor(Math.random() * randomImages.length);
//   return randomImages[randomImageIndex].childImageSharp.fluid
// }



// function CalendarEventCard(data, randomImages) {
//   return (
//       <Wrapper key={data.id}>
//         <Container>
//           {data.Act_Image ? renderImage(data.Act_Image.localFiles[0].childImageSharp.fluid) : renderImage(getRandomImage(randomImages))}
//           {renderDate(data.Date)}
//             <StyledLink href={data.Act_Website? data.Act_Website[0] : ''}>
//               <Info>
//                 <span>{renderDate(data.Date)}</span>
//                 <Title>{renderName(data.Name, data.Date)}</Title>
//                 <span>{data.Act_Blurb ? renderExcerpt(data.Act_Blurb[0], 50) : renderExcerpt(randomBlurb(), 50)}</span>
//               </Info>
//             </StyledLink>
//           )}
//           </Container>
//       </Wrapper>
//   )
// }

// export default CalendarEventCard;