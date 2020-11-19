import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <div>
        {/* <ul> */}
        <div className="container">
          <Link> NR Codes </Link>
        </div>

        <div className="navigation">
          <Link to=""> About</Link>
          <Link to=""> Projects</Link>
          <Link to=""> Contact</Link>
        </div>
        {/* </ul> */}
      </div>
    </nav>
  )
}
