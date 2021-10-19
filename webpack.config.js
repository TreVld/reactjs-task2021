const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    main: './index.js'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Netflixroulette',
      template: '../public/index.html'
    }),
    new ESLintPlugin({
      context: path.join(__dirname, 'src'),
      extensions: ['.js', '.jsx']
    })
  ]
}
