import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      {/* <ul> */}
      <div className="container">
        <div className="inner-header">
          <div className="logo">
            <Link> NR Codes </Link>
          </div>

          <div className="navigation">
            <Link to="#about"> About</Link>
            <Link to=""> Projects</Link>
            <Link to=""> Contact</Link>
          </div>
        </div>
      </div>

      {/* </ul> */}
    </nav>
  )
}
