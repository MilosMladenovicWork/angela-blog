require("dotenv").config({
  path: `.env`,
})

import { PrismicDocumentNodeInput } from "gatsby-source-prismic"

const { linkResolver } = require("./src/config/link-resolver")

module.exports = {
  graphqlTypegen: true,
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `blurred`,
          quality: 50,
          breakpoints: [768, 1024, 1440, 1920],
        },
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Diary of an Existentialist`,
        short_name: `DoE`,
        start_url: `/`,
        background_color: `#282828`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#F5E9E9`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: (doc: PrismicDocumentNodeInput) => linkResolver(doc),
        shouldDownloadFiles: true,
      },
    },
  ],
}
