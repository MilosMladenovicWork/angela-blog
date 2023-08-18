module.exports = {
  siteMetadata: {
    title: `Website title`,
    author: {
      name: `Eve Lyon`,
    },
    description: `Website description`,
    siteUrl: `https://domain.com`,
    social: {
      twitter: `evelyon`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-theme-material-ui`,
      options: {
        webFontsConfig: {
          fonts: {
            google: [
              {
                family: `Abhaya Libre`,
                variants: [`500`, `800`],
              },
            ],
          },
        },
      },
    },
    `gatsby-plugin-layout`,
    // "gatsby-plugin-google-gtag",
    `gatsby-plugin-image`,
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
