import React from "react"
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi"
import "../styles/index.scss"

export default function Media() {
  return (
    <div id="media">
      <a href="https://linkedin.com/in/netalyramirez "target="_blank" rel="noopener noreferrer">
        <FiLinkedin />
      </a>
      <a href="https://github.com/21shield "target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
      <a href="https://www.instagram.com/21shield/ "target="_blank" rel="noopener noreferrer">
        <FiInstagram />
      </a>
      <a href="https://twitter.com/NetalyCodes "target="_blank" rel="noopener noreferrer">
        <FiTwitter />
        </a>
      <a href="https://twitter.com/NetalyCodes "target="_blank" rel="noopener noreferrer">
        <FiMail />
        </a>
    </div>
  )
}
