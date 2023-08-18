import { Grid, Pagination, PaginationItem } from "@mui/material"
import React from "react"
import Link from "./Link"

export const BlogPostsPagination = ({
  page,
  total,
}: {
  page: number
  total: number
}) => (
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
          count={total}
          page={page}
          size="small"
          siblingCount={1}
          hideNextButton
          hidePrevButton
          renderItem={item => (
            <PaginationItem {...item} component={Link} to={`/${item.page}`} />
          )}
        />
      </Grid>
    </Grid>
  </Grid>
)
