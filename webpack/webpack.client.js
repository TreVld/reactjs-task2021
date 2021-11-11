const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDevMod = process.env.NODE_ENV === 'development'

module.exports = merge(common, {
  name: 'client',
  target: 'web',
  entry: [
    isDevMod && 'webpack-hot-middleware/client',
    './src/client.jsx'
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          isDevMod ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    isDevMod && new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Netflixroulette'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    })
  ].filter(Boolean)
})
