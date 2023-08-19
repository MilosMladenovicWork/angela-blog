import { Grid } from "@mui/material"
import { motion } from "framer-motion"
import { isNil } from "lodash"
import React, { useMemo } from "react"
import { appearAnimationVariants } from "../../gatsby-theme-material-ui-top-layout/theme"
import RichText from "../RichText"

const MotionGrid = motion(Grid)

const RichTextSlice = ({
  data,
}: {
  data: Queries.PrismicPageDataBodyRichText
}) => {
  const content = data.primary.content?.html

  if (isNil(content)) {
    return
  }

  const textProps = useMemo(() => {
    if (data.primary.big_first_letter) {
      return {
        sx: {
          "&:first-child::first-letter": {
            fontSize: "300%",
            lineHeight: 1,
          },
        },
      }
    }
  }, [])

  return (
    <MotionGrid item xs={12} variants={appearAnimationVariants}>
      <RichText text={content} textProps={textProps} />
    </MotionGrid>
  )
}

export default RichTextSlice
