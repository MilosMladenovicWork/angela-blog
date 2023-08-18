import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import { IconLinkProps } from "./About"
import Link from "./Link"

const MotionGrid = motion(Grid)

export const IconLinks = ({ iconLinks }: { iconLinks: IconLinkProps[] }) => {
  return (
    <Grid item xs={12} container justifyContent="center" columnSpacing={1}>
      {iconLinks.map(iconLink => (
        <IconLink key={iconLink.src} {...iconLink} />
      ))}
    </Grid>
  )
}

const IconLink = ({ src, href, alt, width, height }: IconLinkProps) => {
  return (
    <MotionGrid item width={72} variants={appearAnimationVariants}>
      <Link to={href}>
        {/* <Image
          src={src}
          width={width}
          height={height}
          alt={alt}
          layout="responsive"
        /> */}
      </Link>
    </MotionGrid>
  )
}
