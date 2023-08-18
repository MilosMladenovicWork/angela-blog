import { List } from "@mui/material";
import BlogListItem from "./BlogListItem";
import StaggerAnimationGrid from "./StaggerAnimationGrid";
import React from "react";
import { BlogItemData } from "../utils/getBlogPosts";

export default function BlogList({ items }: { items: BlogItemData[] }) {
  return (
    <StaggerAnimationGrid>
      <List>
        {items.map(({ id, title, shortDescription, description }) => (
          <BlogListItem
            key={id}
            id={id}
            title={title}
            shortDescription={shortDescription}
            description={description}
          />
        ))}
      </List>
    </StaggerAnimationGrid>
  );
}
