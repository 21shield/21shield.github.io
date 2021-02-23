import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Home from "../Containers/Home"
import "../styles/styles.scss"

export default function Index() {
  const data = useStaticQuery(graphql`
    query {
      skull: file(relativePath: { eq: "Skull.jpeg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      mom: file(relativePath: { eq: "Mom.jpeg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="landing">
        <Img fixed={data.skull.childImageSharp.fixed} alt="Smiling Girl" />
        <h1 className="Me">Netaly Ramirez</h1>

        <div className="side-image left">
          <Img fluid={data.skull.childImageSharp.fluid} />
        </div>
        <div className="main-image">
          <Img fluid={data.momImage.childImageSharp.fluid} />
        </div>
        <div className="side-image right">
          <Img fluid={data.mexMural.childImageSharp.fluid} />
        </div>
        {/* on click this should lead the rest of the info */}
        {/* the linkto reffers to the components "name" */}
        <Link to="#about"> More </Link>
      </div>
      <Home />
    </>
  )
}
