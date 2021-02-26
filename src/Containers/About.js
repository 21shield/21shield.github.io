import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function About() {
  const data = useStaticQuery(graphql`
    {
      profileImage: file(relativePath: { eq: "me.jpeg" }) {
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
      <h1 className="about">__About__</h1>

      <h1>About Me</h1>
      <Img fixed={data.profileImage.childImageSharp.fixed} alt="Smiling Girl" />
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
        Additionally, I love learning and it gives me great joy to end my day
        having learned something that I did not know before. I'm excited to
        develop a better grasp on creating scalable software, and collaborate
        with an innovative company like Lob.
        <br />
        <br />I am eager to take on challenges in cloud computing and value
        continuous learning. I am thrilled to have the opportunity to help carry
        out Lob’s mission in increasing connectivity between offline and online
        worlds, thank you for your time and consideration in reviewing my
        application.
      </p>
    </div>
  )
}
