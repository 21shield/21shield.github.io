import React from "react"
import { Link } from "gatsby"
import Home from "../Containers/Home"
import "../styles/styles.scss"

export default function Index() {
  return (
    <>
      <div className="landing">
        <h1 className="Me">|| Me Code ||</h1>
      </div>
      {/* on click this should lead the rest of the info */}
      {/* the linkto reffers to the components "name" */}
      <Link to="#about"> More </Link>
      <Home/>
    </>
  )
}