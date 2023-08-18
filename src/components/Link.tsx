import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material"
import { Link as GatsbyLink } from "gatsby-theme-material-ui"
import React, { ForwardedRef, forwardRef } from "react"

export type LinkProps = Omit<MuiLinkProps, "href"> & { to: string }

const Link = (props: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  return (
    <MuiLink
      sx={{ color: "inherit", textDecoration: "none" }}
      ref={ref}
      component={GatsbyLink}
      {...props}
    />
  )
}

export default forwardRef(Link)
