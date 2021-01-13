import React from "react"
import Layout from "../Components/Layout"
import About from "./About"
import Media from "../Components/Media"
import "../styles/styles.scss"
export default function Home({ children }) {
  return (
    <Layout>
      <h1>something about home</h1>
      <About />
      <Media/>
    </Layout>
  )
}
