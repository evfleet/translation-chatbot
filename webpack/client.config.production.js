const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
          loader: 'babel-loader',
          query: {
              presets: ['react', 'env', 'stage-0']
          }
        }
			}
		]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/assets/index.html')
    })
  ]
}