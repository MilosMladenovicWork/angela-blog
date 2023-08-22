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
    `gatsby-plugin-netlify`,
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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-N9QDDWNQHK"],
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sitemap",
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
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
        linkResolver: (doc: PrismicDocumentNodeInput) => linkResolver(doc),
        shouldDownloadFiles: false,
      },
    },
  ],
}
