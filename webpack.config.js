const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pkg = require('./package.json')

/*vue specific **/
const { VueLoaderPlugin } = require('vue-loader');

const appDirectory = fs.realpathSync(process.cwd());
const resolvePath = relativePath => path.resolve(appDirectory, relativePath);
const paths = {
	buildFolder: resolvePath('build'),
};



module.exports = {
	entry: './src/js/index.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, './build')
	},
	devServer: { // Configure the local web server
		contentBase: path.resolve(
			process.cwd(),
			paths.buildFolder
		), // Serve files from the build directory
		open: true, // Launch served content in the browser once ready
		writeToDisk: true, // Actual create output files (rather than doing it all in memory)
		clientLogLevel: 'error', // Minimising logs in the browser
		historyApiFallback: true
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(['./build']),
		new HtmlWebpackPlugin({
			title: pkg.name,
			template: './src/index.html',
			filename: 'index.html'
		})
	],
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				"vue-style-loader",
				"css-loader",
				"sass-loader"
			]
		},
		{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
			}
		},
		{
			test: /\.(ico)$/,
			use: {
				loader: 'file-loader'
			}
		},
		{
			test: /\.vue$/,
			use: 'vue-loader'
		},
		{
			enforce: 'pre',
			test: /\.(js|vue)$/,
			loader: 'eslint-loader',
			exclude: /node_modules/
		}]
	}
}
