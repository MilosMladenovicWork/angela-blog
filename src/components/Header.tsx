import { AppBar } from "@mui/material"
import { graphql, useStaticQuery } from "gatsby"
import { isNil } from "lodash"
import React, { useMemo } from "react"
import { HeaderToolbar } from "./HeaderToolbar"

export const Header = () => {
  const { prismicLayout } = useStaticQuery<Queries.HeaderQueryQuery>(
    graphql`
      query HeaderQuery {
        prismicLayout {
          data {
            title
            navigation_links {
              label
              link {
                url
              }
            }
          }
        }
      }
    `
  )

  const navigationLinks = useMemo(() => {
    const navigationLinks = prismicLayout?.data.navigation_links
    if (!isNil(navigationLinks)) {
      return navigationLinks.map(navigationLink => ({
        text: navigationLink?.label,
        href: navigationLink?.link?.url,
      }))
    }

    return []
  }, [])

  console.log(navigationLinks)

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
      <HeaderToolbar
        title={prismicLayout?.data.title}
        navigationLinks={navigationLinks}
      />
    </AppBar>
  )
}
