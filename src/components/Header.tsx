import { AppBar } from "@mui/material"
import React from "react"
import { getNavigationData } from "../utils/getNavigationData"
import { HeaderToolbar } from "./HeaderToolbar"

export const Header = () => {
  const data = getNavigationData()

  return (
    <AppBar
      component="nav"
      sx={{
        color: "text.primary",
        backgroundColor: "background.paper",
        boxShadow: "none",
        padding: 2,
        marginBottom: 4,
      }}
      position="sticky"
    >
      <HeaderToolbar navigationLinks={data.navigationLinks} />
    </AppBar>
  )
}
