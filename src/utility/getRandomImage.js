// Simple random image utility for Next.js
export const getRandomImage = (randomImages) => {
  if (!randomImages || randomImages.length === 0) return null
  const randomImageIndex = Math.floor(Math.random() * randomImages.length)
  return randomImages[randomImageIndex]
}
