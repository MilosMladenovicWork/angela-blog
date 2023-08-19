import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import React from "react"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import Link from "./Link"

const MotionGrid = motion(Grid)

export interface IconLinkProps {
  image: IGatsbyImageData
  imageAlt: string
  href: string
}

export const IconLinks = ({ iconLinks }: { iconLinks: IconLinkProps[] }) => {
  return (
    <Grid item xs={12} container justifyContent="center" columnSpacing={1}>
      {iconLinks.map(iconLink => (
        <IconLink key={iconLink.href} {...iconLink} />
      ))}
    </Grid>
  )
}

const IconLink = ({ href, image, imageAlt }: IconLinkProps) => {
  return (
    <MotionGrid item width={72} variants={appearAnimationVariants}>
      <Link to={href}>
        <GatsbyImage image={image} alt={imageAlt} />
      </Link>
    </MotionGrid>
  )
}
