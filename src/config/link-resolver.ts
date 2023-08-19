import { PrismicDocumentNodeInput } from "gatsby-source-prismic"

exports.linkResolver = (doc: PrismicDocumentNodeInput) => {
  switch (doc.type) {
    case "post":
      return `/blog/${doc.uid}`

    default:
      if (!doc.uid) return "/"
      return `/${doc.uid}`
  }
}
