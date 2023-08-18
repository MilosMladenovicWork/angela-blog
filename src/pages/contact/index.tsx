import React from "react"
import Contact from "../../components/Contact"
import { getContactPageData } from "../../utils/getContactPageData"

export default function ContactPage() {
  const data = getContactPageData()

  if (!data) {
    throw Error()
  }

  return (
    <main>
      <Contact
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
        mainContent={data.mainContent}
      />
    </main>
  )
}
