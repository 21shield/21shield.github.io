import React from "react"
import Navbar from "../Containers/Navbar"
import Footer from "../Containers/Footer"

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
