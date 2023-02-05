const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Airtable implements Node {
      cloudinaryImg: File @link(from: "fields.localFile")
    }
  `
  createTypes(typeDefs)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // it comes in as an array in the events/acts table for some reason, no idea why. But since
  // we're not using graphql for those pages, we can just ignore it.
  if (
    node.internal.type === "Airtable" &&
    Boolean(node?.data?.Image_URL) &&
    !Array.isArray(node?.data?.Image_URL)
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.data.Image_URL,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      getCache,
    })

    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  }
}
