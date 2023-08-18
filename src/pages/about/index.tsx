import React from "react"
import About from "../../components/About"
import { getAboutPageData } from "../../utils/getAboutPageData"

export default function AboutPage() {
  const data = getAboutPageData()

  if (!data) {
    throw Error()
  }

  return (
    <main>
      <About
        image={{
          src: data.imageUrl,
          alt: data.imageDescription,
          width: data.imageWidth,
          height: data.imageHeight,
        }}
        mainContent={data.mainContent}
        iconLinks={data.iconLinks.map(
          ({
            imageLink,
            imageUrl,
            imageHeight,
            imageWidth,
            imageDescription,
          }) => ({
            href: imageUrl,
            src: imageLink,
            alt: imageDescription,
            width: imageWidth,
            height: imageHeight,
          })
        )}
      />
    </main>
  )
}
