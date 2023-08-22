import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { PageProps, graphql } from "gatsby"
import React from "react"
import { CmsSlices } from "../components/CmsSlices"
import Link from "../components/Link"
import Seo from "../components/Seo"
import StaggerAnimationGrid from "../components/StaggerAnimationGrid"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"

const MotionGrid = motion(Grid)

export default function Page({ data }: PageProps<Queries.PageQueryQuery>) {
  return (
    <main>
      <StaggerAnimationGrid container direction="row" rowSpacing={3}>
        <MotionGrid item xs={12} variants={appearAnimationVariants}>
          <Link sx={{ textDecoration: "underline" }} variant="body1" to="/">
            back
          </Link>
        </MotionGrid>
        <CmsSlices slices={data.prismicPage?.data.body} />
      </StaggerAnimationGrid>
    </main>
  )
}

export const Head = ({ data }: PageProps<Queries.PageQueryQuery>) => (
  <Seo
    title={data.prismicPage?.data.title}
    description={data.prismicPage?.data.description}
  />
)

export const PageQuery = graphql`
  query PageQuery($page_path: String!) {
    prismicPage(url: { eq: $page_path }) {
      data {
        body {
          ... on PrismicPageDataBodyIconLinks {
            id
            slice_type
            items {
              icon_image {
                alt
                dimensions {
                  height
                  width
                }
                gatsbyImageData(width: 200)
              }
              icon_link {
                url
              }
            }
          }
          ... on PrismicPageDataBodyImage {
            id
            slice_type
            primary {
              image {
                alt
                dimensions {
                  height
                  width
                }
                gatsbyImageData(width: 1200)
              }
            }
          }
          ... on PrismicPageDataBodyRichText {
            id
            slice_type
            primary {
              big_first_letter
              content {
                html
              }
            }
          }
        }
        title
        description
      }
    }
  }
`
