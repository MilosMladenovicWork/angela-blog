import React, { ForwardedRef, forwardRef } from "react"
import Link, { LinkProps } from "./Link"

const ListItemLink = (
  props: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>
) => {
  return <Link sx={{ color: "inherit" }} ref={ref} {...props} />
}

export default forwardRef(ListItemLink)
