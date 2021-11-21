const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const common = require('./webpack.common')

module.exports = merge(common, {
  name: 'server',
  target: 'node',
  entry: './src/serverRenderer.tsx',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(css|s[ac]ss)$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportOnlyLocals: true
              }
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  output: {
    filename: 'serverRenderer.js',
    libraryTarget: 'commonjs2'
  }
})
