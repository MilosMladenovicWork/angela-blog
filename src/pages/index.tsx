import React from "react"
import BlogPostsPage from "../components/BlogPostsPage"
import { getBlogPosts } from "../utils/getBlogPosts"

export default function Home() {
  const data = getBlogPosts({ page: 1 })
  return <BlogPostsPage items={data.items} total={data.total} page={1} />
}
