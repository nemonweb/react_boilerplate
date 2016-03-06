const cssnext = require('postcss-cssnext');
const postcssSorting = require('postcss-sorting');
const postcssImport = require('postcss-import');
module.exports = {
  output: {
    // YOU NEED TO SET libraryTarget: 'commonjs2'
    libraryTarget: 'commonjs2',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
          'postcss-loader',
        ],
      },
    ],
  },
  postcss: [
    postcssImport,
    cssnext,
    postcssSorting,
  ],
};
