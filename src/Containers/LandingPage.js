import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"

export default function LandingPage() {
  return (
    <>
      <h1 className="Me">|| Me Code ||</h1>
      {/* on click this should lead the rest of the info */}
      <Link to="#about"> More </Link>
    </>
  )
}
