const path = require('path');
const slash = require('slash');
const slugify = require('./src/utility/slugify');

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.preLoader('eslint-loader', {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      });

      break;
  }
  return config;
};

// exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
//   const { createNodeField } = boundActionCreators;
//   if (node.internal.type === 'MarkdownRemark') {
//     const fileNode = getNode(node.parent);
//     const parsedFilePath = parseFilepath(fileNode.relativePath);

//     const slug = `/${parsedFilePath.dir}`;
//     createNodeField({ node, name: 'slug', value: slug });
//   }
// };

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const firstTemplate = path.resolve(
      'src/templates/template.js'
    );
    resolve(
      graphql(
        `
        {
          allAirtable {
            distinct(field: table)
          }
        }
        `
      ).then(result => {
        if (result.error) {
          reject(result.error);
        }
        result.data.allAirtable.distinct.forEach(edge => {
          createPage({
            path: slugify.slugify(edge),
            component: slash(firstTemplate),
            context: {
              name: edge
            }
          });
        });
      })
    );
  });
};

