import { Grid, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { PageProps, graphql } from "gatsby"
import React from "react"
import { CmsSlices } from "../components/CmsSlices"
import Link from "../components/Link"
import StaggerAnimationGrid from "../components/StaggerAnimationGrid"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import Seo from "../components/Seo"

const MotionGrid = motion(Grid)

export default function PostPage({ data }: PageProps<Queries.PostQueryQuery>) {
  return (
    <main>
      <StaggerAnimationGrid container direction="column" rowSpacing={2}>
        <Seo
          title={data.prismicPost?.data.title1}
          description={data.prismicPost?.data.description1}
        />
        <MotionGrid item variants={appearAnimationVariants}>
          <Link sx={{ textDecoration: "underline" }} variant="body1" to="/">
            back
          </Link>
        </MotionGrid>
        <MotionGrid item variants={appearAnimationVariants}>
          <Typography variant="h2" component="h1">
            {data.prismicPost?.data.title}
          </Typography>
        </MotionGrid>
        <MotionGrid item variants={appearAnimationVariants}>
          <Typography variant="body1">
            {data.prismicPost?.last_publication_date}
          </Typography>
        </MotionGrid>
        <CmsSlices slices={data.prismicPost?.data.body} />
      </StaggerAnimationGrid>
    </main>
  )
}

export const PostQuery = graphql`
  query PostQuery($page_path: String!) {
    prismicPost(url: { eq: $page_path }) {
      data {
        body {
          ... on PrismicPostDataBodyIconLinks {
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
                document {
                  ... on PrismicPost {
                    id
                    url
                  }
                  ... on PrismicPage {
                    id
                    url
                  }
                }
                url
                link_type
              }
            }
          }
          ... on PrismicPostDataBodyImage {
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
          ... on PrismicPostDataBodyRichText {
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
        title1
        description1
      }
      last_publication_date(formatString: "D/MM/YY")
    }
  }
`
