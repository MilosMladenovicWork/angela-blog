/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"

type SeoProps = {
  description?: string | null
  lang?: string | null
  title?: string | null
}

const Seo = ({ description, title }: SeoProps) => {
  const { prismicLayout } = useStaticQuery<Queries.SEOQueryQuery>(
    graphql`
      query SEOQuery {
        prismicLayout {
          data {
            logo {
              localFile {
                publicURL
              }
            }
            title
            description
          }
        }
      }
    `
  )

  const metaDescription =
    description || prismicLayout?.data.description || undefined

  const metaTitle = title || prismicLayout?.data.title || undefined

  const logo = prismicLayout?.data.logo?.localFile?.publicURL || undefined

  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: logo,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `theme-color`,
          content: "#F5E9E9",
        },
      ]}
      link={[
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: logo,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: logo,
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: logo,
        },
        {
          rel: "mask-icon",
          color: "#F5E9E9",
          href: logo,
        },
      ]}
    />
  )
}

export default Seo
