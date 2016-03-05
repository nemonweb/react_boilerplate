const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// let webpack = require('webpack');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  style: path.join(__dirname, 'src/main.css'),
  html: path.join(__dirname, 'src/index.html'),
};

module.exports = {
  context: PATHS.src,
/*
  entry: {
    javascript: './app.js',
    html: './index.html',
    style: './style.css',
  },
*/
  entry: './app.js',
  output: {
    path: PATHS.dist,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style',
          'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss'
        ),
      },
    ],
  },
  postcss: [
    require('autoprefixer'),
  ],
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new HtmlWebpackPlugin({
      inject: false,
      template: path.join(__dirname, '/node_modules/html-webpack-template/index.ejs'),
      appMountId: 'content',
      mobile: true,
    }),
  ],
};
