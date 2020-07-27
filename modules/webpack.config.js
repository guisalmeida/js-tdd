const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const nodeENV = process.env.NODE_ENV || 'production';

module.exports = {
  mode: 'development',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: './build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { modules: false }]
          ]
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          output: {
            comments: false,
          },
        },
        sourceMap: true,
      }),
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      'NODE_ENV': nodeENV
    })
  ]
}
