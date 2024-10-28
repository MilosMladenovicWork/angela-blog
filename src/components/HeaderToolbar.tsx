import { Grid, Toolbar, Typography } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import Link from "./Link"
import StaggerAnimationGrid from "./StaggerAnimationGrid"

export interface NavigationLink {
  text?: string | null
  href?: string | null
}

const MotionGrid = motion(Grid)

export const HeaderToolbar = ({
  navigationLinks,
  title,
}: {
  navigationLinks: NavigationLink[]
  title?: string | null
}) => {
  return (
    <Toolbar>
      <StaggerAnimationGrid container>
        <MotionGrid
          item
          xs={12}
          textAlign="center"
          variants={appearAnimationVariants}
        >
          <Typography variant="h2" component={Link} to="/">
            {title}
          </Typography>
        </MotionGrid>
        <Grid item container xs={12} columnSpacing={2} justifyContent="center">
          {navigationLinks.map(({ href, text }) => (
            <MotionGrid item key={text} variants={appearAnimationVariants}>
              <Link to={href || ""}>{text}</Link>
            </MotionGrid>
          ))}
        </Grid>
      </StaggerAnimationGrid>
    </Toolbar>
  )
}
