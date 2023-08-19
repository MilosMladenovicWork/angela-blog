import { isNil } from "lodash"
import React from "react"
import IconLinksSlice from "./slices/IconLinksSlice"
import ImageSlice from "./slices/ImageSlice"
import RichTextSlice from "./slices/RichTextSlice"

const CmsSlice = ({
  slice,
}: {
  slice: Partial<Queries.PrismicPageDataBodySlicesType>
}) => {
  switch (slice.slice_type) {
    case "rich_text":
      return (
        <RichTextSlice data={slice as Queries.PrismicPageDataBodyRichText} />
      )
    case "icon_links":
      return (
        <IconLinksSlice data={slice as Queries.PrismicPageDataBodyIconLinks} />
      )
    case "image":
      return <ImageSlice data={slice as Queries.PrismicPageDataBodyImage} />

    default:
      return
  }
}

export const CmsSlices = ({
  slices,
}: {
  slices:
    | ReadonlyArray<Partial<Queries.PrismicPageDataBodySlicesType>>
    | undefined
}) => {
  if (isNil(slices)) {
    return
  }

  return (
    <>
      {slices.map(slice => (
        <CmsSlice slice={slice} />
      ))}
    </>
  )
}
