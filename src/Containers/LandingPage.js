import React from "react"
import { Link } from "gatsby"
import Layout from "../Components/Layout"
import About from "./About"
import Media from "../Components/Media"
import "../styles/styles.scss"

export default function LandingPage() {
  return (
    <>
    <Layout>
      <div className="landing">
        <h1 className="Me">|| Me Code ||</h1>
      </div>
      {/* on click this should lead the rest of the info */}
      <Link to="#about"> More </Link>
      <About/>
      <Media/>
    </Layout>
    </>
  )
}
