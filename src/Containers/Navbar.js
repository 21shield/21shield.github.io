import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav>
      <div className="header">
        <div className="header__inner-header">
          <div className="header__logo">NR</div>

          <div className="header__navigation">
            <Link aria-label="about arthur section" to="#about">
              {" "}
              About
            </Link>
            <Link aria-label="projects section" to="#projects">
              {" "}
              Projects
            </Link>
            <Link aria-label="contact section" to="#contact">
              {" "}
              Contact
            </Link>
            <Link aria-label="media section" to="#media">
              {" "}
              Media
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
