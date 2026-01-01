"use client"

import React from "react"
import Image from "next/image"
import TitleBar from "./TitleBar"
import SubscriptionEmbed from "./SubscriptionEmbed"
import { LayoutProps } from "../../types"
import styles from "./PageLayout.module.css"

const PageLayout: React.FC<LayoutProps> = ({
  children,
  fluid,
  text,
  subText,
  maxWidth,
  showSubscription = true,
}) => {
  return (
    <>
      {fluid && (
        <div
          className={styles.imgContainer}
          style={maxWidth ? { maxWidth } : undefined}
        >
          <Image
            src={fluid}
            alt="Pete's Candy Store"
            width={1200}
            height={600}
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      )}
      {text && <TitleBar text={text} subText={subText} />}
      <section
        className={`section ${styles.section} ${fluid ? styles.sectionWithImage : styles.sectionWithoutImage}`}
      >
        {children}
      </section>
      {showSubscription && <SubscriptionEmbed />}
    </>
  )
}

export default PageLayout
