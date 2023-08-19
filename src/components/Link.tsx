import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material"
import { Link as GatsbyLink } from "gatsby-theme-material-ui"
import React, { ForwardedRef, forwardRef } from "react"

export type LinkProps = MuiLinkProps & { to: string }

const Link = (
  { href, to, ...restProps }: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) => {
  return (
    <MuiLink
      sx={{ color: "inherit", textDecoration: "none" }}
      ref={ref}
      component={GatsbyLink}
      to={to || href}
      {...restProps}
    />
  )
}

export default forwardRef(Link)
