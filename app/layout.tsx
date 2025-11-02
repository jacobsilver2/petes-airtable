import React from "react"
import type { Metadata } from "next"
import "../src/components/myStyles.scss"
import Navbar from "../src/components/navbar"

export const metadata: Metadata = {
  title: "Pete's Candy Store",
  description: "Pete's Candy Store - Brooklyn's premier music venue and bar",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
