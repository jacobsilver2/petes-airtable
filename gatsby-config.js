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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-airtable`,
      
      options: {
        apiKey: process.env.AIRTABLE_API, 
        tables: [
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `home`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `events and series`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `photo shoots`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `parties`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `booking`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `history`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `press`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `gallery`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `contact`,
            mapping: { 'Attachments': `fileNode` },
          },
        ]
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API,
        tables: [
          {
            baseId: `app4Eb0X39KtGToOS`,
            tableName: `Events`,
            tableView: `Future`,
            mapping: { 'Act Image': `fileNode` },
          },
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
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
