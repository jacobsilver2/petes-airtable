export default function getRandomImage(randomImages) {
  const randomImageIndex = Math.floor(Math.random() * randomImages.length);
  return randomImages[randomImageIndex].childImageSharp.fluid.src
}