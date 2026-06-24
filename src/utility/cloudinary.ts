const CLOUDINARY_HOST = "res.cloudinary.com"

export function isCloudinaryUrl(url: string): boolean {
  return url.includes(CLOUDINARY_HOST) && url.includes("/upload/")
}

export function cloudinaryOptimize(url: string, width?: number): string {
  if (!isCloudinaryUrl(url)) return url

  const [base, rest] = url.split("/upload/")
  if (!rest) return url

  const widthParam = width ? `w_${width},c_limit,` : ""
  const transform = `${widthParam}f_auto/q_auto`

  const alreadyOptimized = /(^|\/)(f_auto|q_auto)(\/|,)/.test(rest)
  if (alreadyOptimized) return url

  return `${base}/upload/${transform}/${rest}`
}
