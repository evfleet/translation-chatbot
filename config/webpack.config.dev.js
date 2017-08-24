const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
      },
      {
				test: [/\.scss$/, /\.css$/],
				loader: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&minimize',
            {
              loader: 'postcss-loader',
              query: {
                config: {
                  path: path.resolve(__dirname, './postcss.config.js')
                }
              }
            },
						'sass-loader'
					]
				})
			},
		]
  },
  resolve: {
    modules: ['./src/', 'node_modules']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/assets/index.html')
    }),
    new ExtractTextPlugin('bundle.css'),
  ],
  devServer: {
    port,
    host: 'localhost',
    historyApiFallback: true,
    hot: true
  },
}