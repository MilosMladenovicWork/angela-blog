/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

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
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={logo} />
      <meta name="twitter:card" content={logo} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={logo} />
      <meta name="og:title" content={metaTitle} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:image" content={logo} />
      <meta name="theme-color" content="#F5E9E9" />
      <link rel="apple-touch-icon" href={logo} sizes="180x180" />
      <link rel="icon" href={logo} type="image/png" sizes="32x32" />
      <link rel="icon" href={logo} type="image/png" sizes="16x16" />
      <link rel="mask-icon" href={logo} color="#F5E9E9" />
    </>
  )
}

export default Seo
