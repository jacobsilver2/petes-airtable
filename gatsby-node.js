const { createRemoteFileNode } = require("gatsby-source-filesystem")

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Airtable implements Node {
      data: AirtableData
      cloudinaryImg: File @link(from: "fields.localFile")
    }
    type AirtableData {
      Name: String
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
  if (Boolean(node?.data?.Image_URL)) {
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
