const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  target: 'node',
  output: {
    path: path.join(process.cwd(), 'lib'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  externals: ['aws-sdk'],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
        exclude: [/node_modules/],
      },
    ],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { 
        warnings: false 
      },
      output: { 
        comments: false 
      },
      sourceMaps: false,
    }),
  ]
};