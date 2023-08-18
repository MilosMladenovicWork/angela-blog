import { Grid, GridProps } from "@mui/material"
import { motion } from "framer-motion"
import React, { ForwardedRef, forwardRef } from "react"

type InViewAnimationGridProps = Omit<
  GridProps,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
> & {
  repeatOnView?: boolean
}

const MotionGrid = motion(Grid, { forwardMotionProps: true })

const variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
}

const StaggerAnimationGrid = (
  { children, repeatOnView = false, ...restProps }: InViewAnimationGridProps,
  ref: ForwardedRef<HTMLElement>
) => {
  return (
    <MotionGrid
      variants={variants}
      initial="hidden"
      animate={"show"}
      {...restProps}
      ref={ref}
    >
      {children}
    </MotionGrid>
  )
}

export default forwardRef(StaggerAnimationGrid)
