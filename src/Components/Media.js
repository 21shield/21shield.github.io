import React from "react"
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi"
import "../styles/index.scss"
import { FaMediumM } from "react-icons/fa"

export default function Media() {
  return (
    <div id="media">
      <a aria-label="media icon" href="https://linkedin.com/in/netalyramirez "target="_blank" rel="noopener noreferrer">
        <FiLinkedin />
      </a>
      <a aria-label="media icon" href="https://github.com/21shield "target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
      {/* <a aria-label="media icon" href="https://www.instagram.com/21shield/ "target="_blank" rel="noopener noreferrer">
        <FiInstagram />
      </a> */}
      <a aria-label="media icon" href="https://twitter.com/NetalyCodes "target="_blank" rel="noopener noreferrer">
        <FiTwitter />
        </a>

        <a aria-label="media icon" href="https://21netaly.medium.com/ "target="_blank" rel="noopener noreferrer">
        <FaMediumM/>
        </a>
        
      <a aria-label="media icon" href="https://twitter.com/NetalyCodes "target="_blank" rel="noopener noreferrer">
        <FiMail />
        </a>
    </div>
  )
}
