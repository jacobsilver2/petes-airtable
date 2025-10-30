// Simple random image utility for Next.js
export const getRandomImage = (randomImages: string[]): string => {
  if (!randomImages || randomImages.length === 0) return '/images/random/rand1.png'
  const randomImageIndex = Math.floor(Math.random() * randomImages.length)
  return randomImages[randomImageIndex]
}
