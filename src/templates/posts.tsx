import { Grid } from "@mui/material"
import { PageProps, graphql } from "gatsby"
import React, { useMemo } from "react"
import BlogList, { BlogItemData } from "../components/BlogList"
import { BlogPostsPagination } from "../components/BlogPostsPagination"
import Seo from "../components/Seo"

export default function PostsPage({
  data,
}: PageProps<Queries.PostsPageQueryQuery>) {
  const items: BlogItemData[] = useMemo(() => {
    const builtItems: BlogItemData[] = []
    for (const {
      node: {
        url,
        last_publication_date,
        data: { description, title },
      },
    } of data.allPrismicPost.edges) {
      if (url) {
        builtItems.push({
          id: url,
          description,
          title,
          shortDescription: last_publication_date,
          href: url,
        })
      }
    }
    return builtItems
  }, [])

  return (
    <Grid
      container
      minHeight="80vh"
      direction="column"
      justifyContent="space-between"
    >
      <Grid item sx={{ marginBottom: 16 }}>
        <BlogList items={items} />
      </Grid>

      <BlogPostsPagination
        page={data.allPrismicPost.pageInfo.currentPage}
        totalPages={data.allPrismicPost.pageInfo.pageCount}
      />
    </Grid>
  )
}

export const Head = () => <Seo />

export const PostsPageQuery = graphql`
  query PostsPageQuery($skip: Int!) {
    allPrismicPost(
      limit: 10
      skip: $skip
      sort: { order: DESC, fields: last_publication_date }
    ) {
      edges {
        node {
          url
          data {
            title
            description
          }
          last_publication_date(formatString: "D/MM/YY")
        }
      }
      pageInfo {
        currentPage
        pageCount
      }
    }
  }
`
