import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function About() {
  const data = useStaticQuery(graphql`
    query {
      profileImage: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div id="about" className="about">
      <div className="about__images">
        <div className="__left">
          <Img
            fluid={data.profileImage.childImageSharp.fluid}
            alt="Smiling Girl"
          />
        </div>
      </div>
      <div className="about__text">
        <div className="about__text__header">
          <h3> Hi there!</h3>
          <br />
          My name is <span>Netaly</span> Ramirez, it was mispelled when I was
          born and Microsoft Word won't let me forget it.
        </div>
        <br />
        <div className="about__text__blurb">
          <p>
            Programming is much like an art form; it takes teamwork and
            persistence to make the dream work. There are no wrong ways in
            solving a problem. Every perspective in turn is a building block to
            solving any problem. This is the beauty of programming: the
            collective effort in achieving a goal.
            <br />
            Learning has always been a passion of mine. The day is that much
            more meaningfull when I learn something new. I am eager to take on
            challenges, and to develop as I go.
          </p>
        </div>
      </div>
    </div>
  )
}
