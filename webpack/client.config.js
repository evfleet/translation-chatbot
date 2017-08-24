const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const port = process.env.PORT ? process.env.PORT : 8080

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  devtool: 'inline-source-map',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/assets/index.html')
    })
  ],
  devServer: {
    port,
    host: 'localhost',
    historyApiFallback: true,
    hot: true
  },
}