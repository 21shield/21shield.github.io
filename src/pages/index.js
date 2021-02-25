import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Home from "../Containers/Home"
import "../styles/styles.scss"

export default function Index() {
  const data = useStaticQuery(graphql`
    query {
      mom: file(relativePath: { eq: "Mom.jpeg" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skull: file(relativePath: { eq: "Skull.jpeg" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="landing">
        <h1 className="Me">Netaly Ramirez</h1>
        <div className="landing__side-image left">
          <Img fluid={data.skull.childImageSharp.fluid} />
        </div>
        <div className="landing__main-image">
          <Img fluid={data.mom.childImageSharp.fluid} />
        </div>
        {/* <div className="side-image right">
          <Img fluid={data.mexMural.childImageSharp.fluid} />
        </div> */}
        {/* on click this should lead the rest of the info */}
        {/* the linkto reffers to the components "name" */}
        <Link to="#about"> More </Link>
      </div>
      <Home />
    </>
  )
}
