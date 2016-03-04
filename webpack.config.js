var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
    html: "./index.html",
  },
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      }
    ]
  }
};
