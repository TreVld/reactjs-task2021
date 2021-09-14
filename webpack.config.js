const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    main: './index.js'
  },

	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].[contenthash].js"
	},

	resolve: {
    extensions: ['.js', '.jsx'],
  },

	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							"@babel/preset-react"
						]
					}
				}
			},
			{
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
		]
	},
	
	plugins: [new HtmlWebpackPlugin({
		title: "Mini netflix",
		template: '../public/index.html'
	})]
};
