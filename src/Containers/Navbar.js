import React from "react"
import { Link, useStaticQuery, graphql  } from "gatsby"
import Img from "gatsby-image"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      icon: file(relativePath: { eq: "icon.jpeg" }) {
        childImageSharp {
          fluid(maxHeight: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    
    }
  `)
  return (
    <nav>
      <div className="header">
        <div className="header__inner-header">
          <div className="header__logo">
            <Img fluid={data.icon.childImageSharp.fluid} alt="N Icon"/>
          </div>

          <div className="header__navigation">
            <Link aria-label="about arthur section"to="#about"> About</Link>
            <Link aria-label="projects section"to="#projects"> Projects</Link>
            <Link aria-label="contact section"to="#contact"> Contact</Link>
            <Link aria-label="media section"to="#media"> Media</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
