import { Grid, Typography } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import Link from "./Link"
import RichText from "./RichText"
import StaggerAnimationGrid from "./StaggerAnimationGrid"

const MotionGrid = motion(Grid)

export interface PostProps {
  title: string
  shortDescription: string
  htmlContent: string
}

export default function Post({
  title,
  shortDescription,
  htmlContent,
}: PostProps) {
  return (
    <StaggerAnimationGrid
      container
      direction="column"
      rowSpacing={2}
      sx={{ paddingBottom: { xs: 5, sm: 15 } }}
    >
      <MotionGrid item variants={appearAnimationVariants}>
        <Link sx={{ textDecoration: "underline" }} variant="body1" to="/">
          back
        </Link>
      </MotionGrid>
      <MotionGrid item variants={appearAnimationVariants}>
        <Typography variant="h2" component="h1">
          {title}
        </Typography>
      </MotionGrid>
      <MotionGrid item variants={appearAnimationVariants}>
        <Typography variant="body1">{shortDescription}</Typography>
      </MotionGrid>
      <MotionGrid item variants={appearAnimationVariants}>
        <RichText
          text={htmlContent}
          textProps={{
            sx: {
              "&:first-child::first-letter": {
                fontSize: "300%",
                lineHeight: 1,
              },
            },
          }}
        />
      </MotionGrid>
    </StaggerAnimationGrid>
  )
}
