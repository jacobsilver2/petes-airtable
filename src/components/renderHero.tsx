"use client"

import React from "react"
import Image from "next/image"
import styles from "./renderHero.module.css"

export function renderHero(
  src: string,
  fullheight?: boolean,
  regular?: boolean
): React.JSX.Element | undefined {
  if (src && fullheight) {
    return (
      <section className="hero is-fullheight-with-navbar">
        <Image
          src={src}
          alt="Hero"
          fill
          className="hero-body"
          style={{ objectFit: "cover" }}
        />
      </section>
    )
  }
  if (src && !regular) {
    return (
      <section className="hero has-bg-img">
        <div className="hero-body">
          <Image
            src={src}
            alt="Hero"
            width={2048}
            height={1024}
            className={styles.heroImage}
            style={{
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    )
  }
  if (src && regular) {
    return (
      <section className="hero has-bg-img">
        <div className="hero-body">
          <Image
            src={src}
            alt="Hero"
            width={2048}
            height={1024}
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>
    )
  }
}
