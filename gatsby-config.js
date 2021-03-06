/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
const path = require(`path`)

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Netaly's Portfolio Site",
    description: "Portfolio site built with Gatsby",
    image: "/MexMural.jpeg",
    twitterUserName: "@NetalyCodes",
    author: "Netaly Ramirez",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
}
