const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const entryPath = path.join(__dirname, '/client/src/index.jsx');
const outputPath = path.join(__dirname, '/public/dist');

module.exports = {
  entry: ['babel-polyfill', entryPath],
  output: {
    filename: 'bundle.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.scss$/,
        use: ['eslint-loader', 'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.[contenthash].css',
    }),
  ],
};
