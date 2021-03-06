const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
module.exports = {
	entry: path.resolve(__dirname, 'src/entry.js'),
	mode: 'development',
	plugins: [
		new webpack.ProgressPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: path.join(__dirname, './assets/research'), to: path.join(__dirname, 'root/research') },
				{ from: path.join(__dirname, './assets/projects'), to: path.join(__dirname, 'root/projects')},
				{ from: path.join(__dirname, './assets/images'), to: path.join(__dirname, 'root/images') },
				{ from: path.join(__dirname, './assets/contact'), to: path.join(__dirname, 'root/contact') },
				{ from: path.join(__dirname, './assets/research'), to: path.join(__dirname, 'root/research') },
				{ from: path.join(__dirname, './assets/_redirects'), to: path.join(__dirname, 'root/_redirects.txt') },
			],
		}),
		new HtmlWebpackPlugin({template: path.resolve('./src/index.html')}),
	],
	devServer: {
		contentBase: path.join(__dirname, 'root'),
		compress: true,
		port: 9000
	},
	output: {
		path:path.resolve(__dirname, 'root'),

	},
	module: {
		rules: [
			{
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
				}, 
				{
					loader: 'resolve-url-loader'
				},
				{
					loader: 'sass-loader',
					options: {
						sourceMap: true
					}
				}]
			}, 
			{
				test: /\.(otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[name].[ext]',
							outputPath: './fonts/'
						}
					}
				]
			},
			{
				test: /\.(jpe?g|gif|png|svg)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
						
						},
					},
				],
			},
		]
	},
};