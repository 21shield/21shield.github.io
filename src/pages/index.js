import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { FiArrowDownRight } from "react-icons/fi"
import Img from "gatsby-image"
import "../styles/index.scss"
import Media from "../Components/Media"
import About from "../Containers/About"
import Layout from "../Components/Layout"

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
    
    }
  `)
  return (
    <>
    <Layout>

      <div className="landing">
        <div className="landing__container">
          <h1 className="landing__text">Netaly Ramirez</h1>
       
          <div className="landing__main-image">
            <Img fluid={data.mom.childImageSharp.fluid} alt="Mother and child"/>
          </div>
    
        </div>
        <div className="landing__moreInfo">
        
          <Link to="#about" aria-label="link to more info"> <FiArrowDownRight/> </Link>
        </div>
       
        <Media />
      </div>
      
      <About/>
    </Layout>

    </>
  )
}
