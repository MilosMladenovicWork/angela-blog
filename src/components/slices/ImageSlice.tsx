import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import { appearAnimationVariants } from "../../gatsby-theme-material-ui-top-layout/theme"

const MotionGrid = motion(Grid)

const ImageSlice = ({ data }: { data: Queries.PrismicPageDataBodyImage }) => {
  const imageData = data.primary.image
  const image = getImage(imageData)
  const alt = data.primary.image?.alt || ""

  if (!image) {
    return
  }

  return (
    <MotionGrid
      item
      xs={12}
      sx={{ position: "relative" }}
      variants={appearAnimationVariants}
    >
      <GatsbyImage image={image} alt={alt} />
    </MotionGrid>
  )
}

export default ImageSlice
