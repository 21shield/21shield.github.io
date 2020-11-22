import React from "react"
import "../styles/styles.scss"
import { Link } from "gatsby"

export default function LandingPage() {
  return (
    <>
      <h1 className="Me">|| Me ||</h1>
      {/* on click this should lead the rest of the info */}
      <Link to="#about"> More </Link>
    </>
  )
}
