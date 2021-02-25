import React from "react"
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoFacebook,
} from "react-icons/io5"

export default function Media() {
  return (
    <div id="media">
      <h1 className="Media">~~Follow me one Social Media~~</h1>
      <p></p>
      <button href="">
        <IoLogoGithub />
      </button>
      <button href="">
        <IoLogoInstagram />
      </button>
      <button href="">
        <IoLogoTwitter />
      </button>
      <button href="">
        <IoLogoFacebook />
      </button>
    </div>
  )
}
