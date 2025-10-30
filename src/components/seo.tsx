/**
 * SEO component for Next.js
 */

import React from "react"
import Head from "next/head"

interface SEOProps {
  description?: string
  title: string
}

const siteMetadata = {
  title: "Pete's Candy Store",
  description: "Live music venue and bar in Williamsburg, Brooklyn",
  author: "Pete's Candy Store",
}

const SEO: React.FC<SEOProps> = ({ description = "", title }) => {
  const metaDescription = description || siteMetadata.description

  return (
    <Head>
      <title>
        {title} | {siteMetadata.title}
      </title>
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
    </Head>
  )
}

export default SEO
