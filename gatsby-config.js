/* eslint-disable @typescript-eslint/camelcase */
module.exports = {
  siteMetadata: {
    title: `OliverFlecke`,
    description: `Personal site for Oliver Fleckenstein`,
    author: `Oliver Fleckenstein`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
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
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTsx: true,
        transpileOnly: false,
      },
    },
    // 'gatsby-plugin-typescript-checker',
    `gatsby-plugin-sass`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `publications`,
        path: `${__dirname}/publications`,
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/publications`,
        destination: '/publications',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'other',
        path: `${__dirname}/other`,
      },
    },
    {
      resolve: 'gatsby-plugin-copy-files',
      options: {
        source: `${__dirname}/other`,
        destination: '/',
      },
    },
  ],
};
