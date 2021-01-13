import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <div className="header">
        <div className="header__inner-header">
          <div className="header__logo">
            <Link> NR Codes </Link>
          </div>

          <div className="header__navigation">
            <Link to="#about"> About</Link>
            <Link to=""> Projects</Link>
            <Link to=""> Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
