import { getSrc } from "gatsby-plugin-image"

export const getRandomImage = (randomImages) => {
  const randomImageIndex = Math.floor(Math.random() * randomImages.length)
  return getSrc(randomImages[randomImageIndex])
}
