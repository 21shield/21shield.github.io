import React from "react"
import "../styles/index.scss"
import Landing from "../Containers/Landing"
import About from "../Containers/About"
import Layout from "../Components/Layout"
import Projects from "../Containers/Projects"

export default function Index() {
 
  return (
      <Layout >
        <Landing />
        <About />
        <Projects />
      </Layout>
  )
}
