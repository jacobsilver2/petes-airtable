import React from "react"
import Image from "next/image"
import { isCloudinaryUrl, cloudinaryOptimize } from "../utility/cloudinary"

interface SmartImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  deliveryWidth?: number
  className?: string
  style?: React.CSSProperties
  priority?: boolean
  sizes?: string
}

const FILL_DEFAULT_DELIVERY_WIDTH = 800

export default function SmartImage({
  src,
  alt,
  width,
  height,
  fill,
  deliveryWidth,
  className,
  style,
  priority,
  sizes,
}: SmartImageProps): React.JSX.Element {
  if (isCloudinaryUrl(src)) {
    const transformWidth = fill
      ? deliveryWidth ?? FILL_DEFAULT_DELIVERY_WIDTH
      : deliveryWidth ?? width
    const fillStyle: React.CSSProperties = fill
      ? {
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          ...style,
        }
      : style ?? {}
    return (
      <img
        src={cloudinaryOptimize(src, transformWidth)}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        className={className}
        style={fillStyle}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    )
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={className}
        style={style}
        priority={priority}
        sizes={sizes}
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={style}
      priority={priority}
      sizes={sizes}
    />
  )
}
