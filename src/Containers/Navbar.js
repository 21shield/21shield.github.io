import React from "react"
// import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <div className="header">
        <div className="header__inner-header">
          <div className="header__logo">NR</div>

          <div className="header__navigation">
            <a aria-label="about arthur section"to="#about"> About</a>
            <a aria-label="projects section"to="#projects"> Projects</a>
            <a aria-label="contact section"to="#contact"> Contact</a>
            <a aria-label="media section"to="#media"> Media</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
