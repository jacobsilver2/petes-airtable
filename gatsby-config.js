require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: "Pete\'s Candy Store",
    description: `Pete\'s Candy Store\s new website!`,
    author: `Jacob Silver`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-airtable`,
      
      options: {
        apiKey: process.env.AIRTABLE_API, 
        tables: [
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `home`,
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `about`,
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `events and series`,
          },

        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    "gatsby-transformer-javascript-frontmatter",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
