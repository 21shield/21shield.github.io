import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FiArrowDownRight } from "react-icons/fi"
import Img from "gatsby-image"
import Media from "../Components/Media"

const Landing = () => {
  const data = useStaticQuery(graphql`
    query {
      mom: file(relativePath: { eq: "Mom.jpeg" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="landing">
      <div className="landing__container">
        <h1 className="landing__text">Netaly Ramirez</h1>

        <div className="landing__main-image">
          <Img fluid={data.mom.childImageSharp.fluid} alt="Mother and child" />
        </div>
      </div>
      <div className="landing__moreInfo">
        <Link to="#about" aria-label="link to more info">
          <FiArrowDownRight />
        </Link>
      </div>
      <Media />
    </div>
  )
}

export default Landing
