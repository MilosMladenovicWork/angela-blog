import { getImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"
import { IconLinks } from "../IconLinks"

const IconLinksSlice = ({
  data,
}: {
  data: Queries.PrismicPageDataBodyIconLinks
}) => {
  const iconLinks = useMemo(() => {
    const builtIconLinks = []
    for (const { icon_image, icon_link } of data.items) {
      const image = getImage(icon_image)

      const alt = icon_image?.alt || ""

      const href = icon_link?.url || ""

      if (!image) {
        continue
      }

      builtIconLinks.push({
        image,
        imageAlt: alt,
        href,
      })
    }
    return builtIconLinks
  }, [])

  return <IconLinks iconLinks={iconLinks} />
}

export default IconLinksSlice
