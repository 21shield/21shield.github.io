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
      me: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fluid(maxHeight: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      monkey: file(relativePath: { eq: "aleksey-kuprikov.jpg" }) {
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
        <div className="landing__container">
          <div className="landing__text">Netaly Ramirez</div>
          {/* <div className="landing__left-image">
            <Img fluid={data.skull.childImageSharp.fluid} />
          </div> */}
          <div
            className="landing__main-image"
            onMouseOver={console.log("this event")}
          >
            <Img fluid={data.mom.childImageSharp.fluid} />
          </div>
          {/* <div className="landing__right-image">
            <Img fluid={data.monkey.childImageSharp.fluid} />
          </div> */}
          {/* on click this should lead the rest of the info */}
          {/* the linkto reffers to the components "name" */}
          <Link to="#about"> More </Link>
        </div>
      </div>
      <Home />
    </>
  )
}
