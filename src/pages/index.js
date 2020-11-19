import React from "react"
import Layout from "../Components/Layout"
import LandingPage from "../Containers/LandingPage"
// rcf to make a functional component
import "../styles/styles.scss"
export default function Home() {
  return (
    <Layout>
      <h1>Hello From Index</h1>
      <LandingPage />
    </Layout>
  )
}
