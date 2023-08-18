import { Grid } from "@mui/material"
import React from "react"
import BlogList from "../components/BlogList"
import { BlogItemData } from "../utils/getBlogPosts"
import { BlogPostsPagination } from "./BlogPostsPagination"

export default function BlogPostsPage({
  items,
  total,
  page,
}: {
  items: BlogItemData[]
  total: number
  page: number
}) {
  return (
    <main>
      <Grid
        container
        minHeight="80vh"
        direction="column"
        justifyContent="space-between"
      >
        <Grid item sx={{ marginBottom: 16 }}>
          <BlogList items={items} />
        </Grid>

        <BlogPostsPagination page={page} total={total} />
      </Grid>
    </main>
  )
}
