import { Grid, ListItem, Typography } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import ListItemLink from "./ListItemLink"

interface BlogListItemProps {
  id: string
  title?: string | null
  shortDescription?: string | null
  description?: string | null
  href: string
}

const MotionGrid = motion(Grid)

export default function BlogListItem({
  id,
  title,
  description,
  href,
  shortDescription,
}: BlogListItemProps) {
  return (
    <ListItem
      disablePadding
      sx={{
        "&:not(:last-child)": {
          marginBottom: 7,
        },
      }}
      component={ListItemLink}
      to={href}
    >
      <MotionGrid
        container
        direction="column"
        variants={appearAnimationVariants}
      >
        <Grid item>
          <Typography variant="h3" component="h2">
            {title}
          </Typography>
        </Grid>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <Typography variant="body1" textAlign="center">
              {shortDescription}
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">{description}</Typography>
          </Grid>
        </Grid>
      </MotionGrid>
    </ListItem>
  )
}
