import React from "react"
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi"
import "../styles/styles.scss"

export default function Media() {
  return (
    <div id="media">
      <p></p>
      <a href="https://linkedin.com/in/netalyramirez "target="_blank" rel="noopener norefferer">
        <FiLinkedin />
      </a>
      <a href="https://github.com/21shield "target="_blank" rel="noopener norefferer">
        <FiGithub />
      </a>
      <a href="https://www.instagram.com/21shield/ "target="_blank" rel="noopener norefferer">
        <FiInstagram />
      </a>
      <a href="https://twitter.com/NetalyCodes "target="_blank" rel="noopener norefferer">
        <FiTwitter />
      </a>
    </div>
  )
}
