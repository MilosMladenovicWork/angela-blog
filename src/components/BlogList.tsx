import { List } from "@mui/material"
import React from "react"
import BlogListItem from "./BlogListItem"
import StaggerAnimationGrid from "./StaggerAnimationGrid"

export interface BlogItemData {
  id: string
  title?: string | null
  shortDescription?: string | null
  description?: string | null
  href: string
}

export default function BlogList({ items }: { items: BlogItemData[] }) {
  return (
    <StaggerAnimationGrid>
      <List>
        {items.map(({ id, title, shortDescription, description, href }) => (
          <BlogListItem
            key={id}
            id={id}
            title={title}
            shortDescription={shortDescription}
            description={description}
            href={href}
          />
        ))}
      </List>
    </StaggerAnimationGrid>
  )
}
