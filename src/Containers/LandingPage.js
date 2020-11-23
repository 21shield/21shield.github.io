import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"

export default function LandingPage() {
  return (
    <>
      <div className="landing">
        <h1 className="Me">|| Me Code ||</h1>
      </div>
      {/* on click this should lead the rest of the info */}
      <Link to="#about"> More </Link>
    </>
  )
}
