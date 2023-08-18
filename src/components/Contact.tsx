import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import { IconLinkProps } from "./About"
import { IconLinks } from "./IconLinks"
import Link from "./Link"
import RichText from "./RichText"
import StaggerAnimationGrid from "./StaggerAnimationGrid"

const MotionGrid = motion(Grid)

export interface ContactProps {
  mainContent: string
  iconLinks: IconLinkProps[]
}

export default function Contact({ mainContent, iconLinks }: ContactProps) {
  return (
    <StaggerAnimationGrid container direction="row" rowSpacing={2}>
      <MotionGrid item xs={12} variants={appearAnimationVariants}>
        <Link sx={{ textDecoration: "underline" }} variant="body1" to="/">
          back
        </Link>
      </MotionGrid>
      <MotionGrid item xs={12} variants={appearAnimationVariants}>
        <RichText text={mainContent} />
      </MotionGrid>
      <IconLinks iconLinks={iconLinks} />
    </StaggerAnimationGrid>
  )
}
