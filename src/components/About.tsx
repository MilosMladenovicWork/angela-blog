import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import React from "react"
import { appearAnimationVariants } from "../gatsby-theme-material-ui-top-layout/theme"
import Link from "./Link"
import RichText from "./RichText"
import StaggerAnimationGrid from "./StaggerAnimationGrid"

const MotionGrid = motion(Grid)

export interface AboutProps {
  image: { src: string; alt: string; width: number; height: number }
  mainContent: string
  iconLinks: IconLinkProps[]
}

export interface IconLinkProps {
  src: string
  href: string
  alt: string
  width: number
  height: number
}

export default function About({ image, mainContent, iconLinks }: AboutProps) {
  return (
    <StaggerAnimationGrid container direction="row" rowSpacing={2}>
      <MotionGrid item xs={12} variants={appearAnimationVariants}>
        <Link sx={{ textDecoration: "underline" }} variant="body1" to="/">
          back
        </Link>
      </MotionGrid>
      <MotionGrid
        item
        xs={12}
        sx={{ position: "relative" }}
        variants={appearAnimationVariants}
      >
        {/* <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          layout="responsive"
        /> */}
      </MotionGrid>
      <MotionGrid item xs={12} variants={appearAnimationVariants}>
        <RichText text={mainContent} />
      </MotionGrid>
      <Grid item xs={12} container justifyContent="center" columnSpacing={1}>
        {iconLinks.map(iconLink => (
          <IconLink key={iconLink.src} {...iconLink} />
        ))}
      </Grid>
    </StaggerAnimationGrid>
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
