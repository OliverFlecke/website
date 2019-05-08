/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@icons': path.resolve(__dirname, 'src/icons'),
      },
    },
  });
};
