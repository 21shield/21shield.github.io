import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/index.scss"

export default function About() {
  const data = useStaticQuery(graphql`
  query {
      profileImage: file(relativePath: { eq: "me.jpeg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      skull: file(relativePath: { eq: "Skull.jpeg" }) {
        childImageSharp {
          fixed(width: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <div id="about">
      <div className="about__images">
        <div className= "image__right">

        <Img fixed={data.profileImage.childImageSharp.fixed} alt="Smiling Girl" />  
        </div>
        <div className= "image__left">

        <Img fixed={data.skull.childImageSharp.fixed} alt="Feline Cranium with Roses" />  
        </div>
      </div>
      <div className="about__text">
        <h1>About Me</h1>
        <h2>
          Hi there! My name is <span>Netaly</span> Ramirez,
        </h2>
        <h3>
          it was mispelled when I was born and Microsoft Word doesn't let me
          forget it.
        </h3>
        <p>
          While studying at the Flatiron School for Software Engineering, I
          developed projects with people of different backgrounds and different
          perspectives. There I collaborate with teams to develop full stack web
          applications in a fast paced environment. Programming is much like an
          art form; it takes teamwork and persistence to make the dream work.
          There is no wrong way in solving a problem and every perspective is a
          different building block to understanding hidden problems. This is the
          beauty of programming: that collective effort in achieving a goal.
          <br />
          <br />
          Learning has always been a passion of mine. The day is that much more meaningfull when I learned something new. 
          <br />
          <br />I am eager to take on challenges, and to develop as I go. 
        </p>
      </div>
    </div>
  )
}
