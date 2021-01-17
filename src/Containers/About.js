import React from "react";
// import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Img  from "gatsby-image";

export default function About() {
  const data = useStaticQuery(graphql`
  {
    profileImage: file(relativePath: {eq: "Smile.jpeg"}) {
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
      <p>
        Lorem non sunt mollit minim elit consequat enim enim ex incididunt. Consectetur nostrud culpa culpa adipisicing ut labore consectetur occaecat est ipsum Lorem nulla minim sit. Anim amet non excepteur laborum veniam nostrud laboris voluptate. Cupidatat minim non dolore reprehenderit ipsum consequat mollit commodo aute occaecat id pariatur. Sunt et consequat non esse excepteur et ipsum magna qui culpa laborum nisi aute. Aliqua sunt incididunt laboris qui consectetur exercitation duis aute ea incididunt. Eiusmod amet tempor excepteur officia.

        Ex officia cupidatat est pariatur nisi. Occaecat enim dolor nisi mollit nisi elit. Aute eu est magna nulla dolor do ipsum culpa ex ullamco ipsum id minim. Quis qui aliqua anim aute magna. Qui incididunt quis occaecat velit velit labore dolore sit sint nisi officia. Do nulla enim irure est ullamco aliquip.

      </p>
    </div>
  )
}
