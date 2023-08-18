import { Grid, Toolbar, Typography } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import { NavigationLink } from "../utils/getNavigationData"
import Link from "./Link"
import StaggerAnimationGrid from "./StaggerAnimationGrid"

const MotionGrid = motion(Grid)

export const HeaderToolbar = ({
  navigationLinks,
}: {
  navigationLinks: NavigationLink[]
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
          <Typography variant="h3" component={Link} to="/">
            Diary of an Existentialist
          </Typography>
        </MotionGrid>
        <Grid item container xs={12} columnSpacing={2} justifyContent="center">
          {navigationLinks.map(({ href, text }) => (
            <MotionGrid item key={text} variants={appearAnimationVariants}>
              <Link to={href}>{text}</Link>
            </MotionGrid>
          ))}
        </Grid>
      </StaggerAnimationGrid>
    </Toolbar>
  )
}
