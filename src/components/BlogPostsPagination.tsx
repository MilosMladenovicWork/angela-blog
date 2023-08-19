import { Grid, Pagination, PaginationItem } from "@mui/material"
import React from "react"
import Link from "./Link"

export const BlogPostsPagination = ({
  page,
  totalPages,
}: {
  page: number
  totalPages: number
}) => {
  if (page === 1 && totalPages === 1) {
    return
  }
  return (
    <Grid
      container
      item
      justifyContent="center"
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      <Grid
        container
        item
        justifyContent="center"
        sx={{
          width: "100%",
          padding: 2,
          backgroundColor: "background.paper",
        }}
      >
        <Grid item>
          <Pagination
            count={totalPages}
            page={page}
            size="small"
            siblingCount={1}
            hideNextButton
            hidePrevButton
            renderItem={item => {
              const to = item.page === 1 ? "/" : `/${item.page}`
              return <PaginationItem {...item} component={Link} to={to} />
            }}
          />
        </Grid>
      </Grid>
    </Grid>
  )
}
