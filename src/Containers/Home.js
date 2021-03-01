import React from "react"
import Layout from "../Components/Layout"
import About from "./About"
import Media from "../Components/Media"
import "../styles/index.scss"
export default function Home({ children }) {
  return (
    <Layout>
      <About />
      <Media />
    </Layout>
  )
}
