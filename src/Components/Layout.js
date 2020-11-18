import React from "react"
import Navbar from "../Containers/Navbar"
import Footer from "../Containers/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main> {children} </main>
      <Footer />
    </div>
  )
}
