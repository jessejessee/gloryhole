const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Global Paths
const paths = {
	export_js: 'js/app.[hash].js',
	export_css: 'css/app.[contenthash].css',
	entry_point: './src/app.js',
	root_output: 'dist/'
}

// Plugins
const ExtractAssets = new ExtractTextPlugin({filename:paths.export_css});
const CleanDistFolder = new CleanWebpackPlugin([paths.root_output]);
const IndexSetup = new HtmlWebpackPlugin({title: 'Glory Hole'});

// SCSS Compiling and Setup
const scssLoading = {
	test: /\.scss$/,
		use: ExtractTextPlugin.extract({
			fallback:'style-loader',
			use:['css-loader','sass-loader'],
		})
	}

// Config Setup
module.exports = {
	entry: paths.entry_point,
	output: {
		filename: paths.export_js,
		path: path.resolve(__dirname,paths.root_output),
		publicPath: paths.root_output
	},
	module: {
		rules: [scssLoading]
	},
	plugins: [
		ExtractAssets,
		CleanDistFolder,
		IndexSetup
	]
};	