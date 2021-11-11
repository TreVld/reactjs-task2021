const path = require('path')

module.exports = {
  mode: process.env.NODE_ENV,
  context: path.join(__dirname, '../'),
  devtool: 'source-map',

  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      }
    ]
  }
}
