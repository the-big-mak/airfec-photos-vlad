const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public/dist'
    },
    module: {
      rules: [
        { 
          test: [/\.jsx$/],
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
          }
        },
        {
          test: /\.scss$/,
          use:  [  'style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
        }
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.[contenthash].css',
      }),
    ]
  };