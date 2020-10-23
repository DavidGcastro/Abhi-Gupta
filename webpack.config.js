const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	mode: 'development',
	plugins: [new webpack.ProgressPlugin(), new HtmlWebpackPlugin({template: path.resolve('./src/index.html')})],

	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			include: [path.resolve(__dirname, 'src')],
			loader: 'babel-loader'
		}, {
			test: /.(scss|css)$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader',
				options: {
					sourceMap: false
				}
			}, {
				loader: 'sass-loader',
				options: {
					sourceMap: false
				}
			},
			{
				loader: 'sass-loader',
				options: {
					sourceMap: false
				}
			}]
		}]
	},
};