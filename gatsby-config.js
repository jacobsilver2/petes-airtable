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
        apiKey: process.env.GATSBY_AIRTABLE_API, 
        concurrency: 5,
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
            tableName: `gallery`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `contact`,
            mapping: { 'Attachments': `fileNode` },
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `private party`,
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `public party`,
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `host a cool event`,
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `open mic`,
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: `reading series`,
          },
          {
            baseId: `appNuB0fX4vQbOqdy`,
            tableName: 'menu',
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_API,
        tables: [
          {
            baseId: `app4Eb0X39KtGToOS`,
            tableName: `Events`,
            tableView: `Future`,
            mapping: { 'Act Image': `fileNode` },
          },
          {
            baseId: `app4Eb0X39KtGToOS`,
            tableName: `Events`,
            tableView: `TodayGrid`,
            queryName: `TodayGrid`
          },
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-images-zoom`,
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
        name: `Pete's Candy Store`,
        short_name: `Pete's`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, 
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
