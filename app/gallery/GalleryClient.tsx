"use client"

import { useState } from "react"
import PageLayout from "../../src/components/PageLayout"
import { AirtableRecord } from "../../types"
import Image from "next/image"

interface GalleryImage {
  src: string
  width: number
  height: number
  caption: string
}

interface GalleryPageProps {
  galleryData: AirtableRecord[]
}

export default function GalleryClient({ galleryData }: GalleryPageProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  // Convert Airtable data to gallery format
  const images: GalleryImage[] = galleryData.map((node) => ({
    src: node.data.Image_URL || node.data.Attachments?.[0]?.url || '',
    width: node.data.width || 300,
    height: node.data.height || 200,
    caption: node.data.Name || '',
  }))

  const openLightbox = (index: number) => setSelectedIndex(index)
  const closeLightbox = () => setSelectedIndex(null)

  const goToNext = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1)
    }
  }

  const goToPrevious = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowRight') goToNext()
    if (e.key === 'ArrowLeft') goToPrevious()
  }

  return (
    <PageLayout>
      <div className="container">
        <h1 className="has-text-danger" style={{ textAlign: "center" }}>
          GALLERY
        </h1>

        {/* CSS Grid Gallery */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '16px',
          padding: '20px 0'
        }}>
          {images.map((image, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              style={{
                cursor: 'pointer',
                overflow: 'hidden',
                borderRadius: '8px',
                position: 'relative',
                aspectRatio: `${image.width} / ${image.height}`,
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <Image
                src={image.src}
                alt={image.caption}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom Lightbox */}
      {selectedIndex !== null && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '40px',
              cursor: 'pointer',
              zIndex: 10000,
              padding: '10px',
              lineHeight: '1',
            }}
            aria-label="Close"
          >
            ×
          </button>

          {/* Previous button */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: 'white',
                fontSize: '40px',
                cursor: 'pointer',
                padding: '10px 15px',
                borderRadius: '4px',
                zIndex: 10001,
              }}
              aria-label="Previous"
            >
              ‹
            </button>
          )}

          {/* Next button */}
          {selectedIndex < images.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.2)',
                border: 'none',
                color: 'white',
                fontSize: '40px',
                cursor: 'pointer',
                padding: '10px 15px',
                borderRadius: '4px',
                zIndex: 10001,
              }}
              aria-label="Next"
            >
              ›
            </button>
          )}

          {/* Image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].caption}
              style={{
                maxWidth: '100%',
                maxHeight: '85vh',
                objectFit: 'contain',
              }}
            />
            {images[selectedIndex].caption && (
              <p style={{
                color: 'white',
                marginTop: '20px',
                textAlign: 'center',
                fontSize: '16px',
              }}>
                {images[selectedIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </PageLayout>
  )
}
