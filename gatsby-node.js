/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@icons': path.resolve(__dirname, 'src/icons'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNode, createParentChildLink } = actions;

  if (
    node.sourceInstanceName === 'publications' &&
    node.internal.mediaType === `application/pdf`
  ) {
    const path = createFilePath({ node, getNode, basePath: `publications` });
    const metadata = {};
    const pdfPath = node.absolutePath;

    pdfExtract.extract(pdfPath, {}, function(err, data) {
      if (err) {
        return console.error(err);
      }

      if (data.meta.info) {
        const downloadPath = pdfPath.match(/(.*)\/publications\/(.*)/)[2];
        const fallbackName = downloadPath.replace(/\.pdf$/, '');

        metadata.downloadPath = `publications/${downloadPath}`;
        metadata.title = data.meta.info.Title || fallbackName;
        metadata.author = data.meta.info.Author || 'Unknown';
        metadata.abstract = data.meta.info.Subject;
        metadata.pageCount = data.pages.length || 0;
        metadata.fingerprint = Math.random().toString();
        metadata.date = data.meta.info['Custom']['date'];
      }

      const publicationNode = {
        ...metadata,
        path: path.replace(/\s|\(|\)|\[|\]<|>/g, '-'),
        id: `${node.id} >>> ${node.extension}`,
        children: [],
        parent: node.id,
        internal: {
          contentDigest: metadata.fingerprint,
          type: 'publication',
        },
      };

      createNode(publicationNode);
      createParentChildLink({ parent: node, child: publicationNode });
    });
  }
};

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;

//   return new Promise((resolve, reject) => {
//     const viewBook = path.resolve('./src/templates/view-book.js');
//     resolve(
//       graphql(
//         `
//           {
//             allPublication(limit: 1000) {
//               edges {
//                 node {
//                   path
//                 }
//               }
//             }
//           }
//         `,
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors);
//           reject(result.errors);
//         }

//         // Create blog posts pages.
//         console.log(result.data);
//         // result.data.allBook.edges.forEach(edge => {
//         //   createPage({
//         //     path: edge.node.path,
//         //     component: viewBook,
//         //     context: {
//         //       path: edge.node.path
//         //     }
//         //   });
//         // });
//       }),
//     );
//   });
// };
