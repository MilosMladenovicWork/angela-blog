import { isNil } from "lodash"
import path from "path"

const pageTemplate = path.resolve("./src/templates/page.tsx")
const postTemplate = path.resolve("./src/templates/post.tsx")
const postsTemplate = path.resolve("./src/templates/posts.tsx")

exports.createPages = async function ({
  actions: { createPage },
  graphql,
}: {
  actions: any
  graphql: any
}) {
  const { data } = await graphql(`
    query SlugsQuery {
      allPrismicPage {
        edges {
          node {
            url
          }
        }
      }
      allPrismicPost {
        edges {
          node {
            url
          }
        }
        totalCount
      }
    }
  `)

  const pageEdges = data?.allPrismicPage?.edges

  if (!isNil(pageEdges)) {
    pageEdges.forEach((edge: any) => {
      if (edge.node.url) {
        createPage({
          path: edge.node.url,
          component: pageTemplate,
          context: {
            page_path: edge.node.url,
          },
        })
      }
    })
  }

  const postEdges = data?.allPrismicPost?.edges

  if (!isNil(postEdges)) {
    postEdges.forEach((edge: any) => {
      if (edge.node.url) {
        createPage({
          path: edge.node.url,
          component: postTemplate,
          context: {
            page_path: edge.node.url,
          },
        })
      }
    })
  }

  const postsPerPage = 10

  const numberOfPages = Math.ceil(
    data?.allPrismicPost?.totalCount / postsPerPage
  )

  for (let i = 1; i < numberOfPages; i++) {
    createPage({
      path: `/${i + 1}`,
      component: postsTemplate,
      context: {
        //number represents items per page
        skip: i * postsPerPage,
      },
    })
  }
}
