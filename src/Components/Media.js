import React from "react"
import { FiGithub, FiInstagram, FiTwitter, FiLinkedin } from "react-icons/fi"
import "../styles/styles.scss"

export default function Media() {
  return (
    <div id="media">
      <p></p>
      <button href="https://linkedin.com/in/netalyramirez">
        <FiLinkedin />
      </button>
      <button href="https://github.com/21shield">
        <FiGithub />
      </button>
      <button href="">
        <FiInstagram />
      </button>
      <button href="https://twitter.com/NetalyCodes">
        <FiTwitter />
      </button>
    </div>
  )
}
