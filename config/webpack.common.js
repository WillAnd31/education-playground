var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
	entry: {
		'polyfills': helpers.fromRoot('client/polyfills.ts'),
		'vendor': helpers.fromRoot('client/vendors.ts'),
		'app': helpers.fromRoot('client/bootstrap.tsx')
	},

	resolve: {
		extensions: ['', '.js', '.ts', '.tsx', '.jsx'],
		root: helpers.fromRoot('client'),
		modulesDirectories: ['node_modules']
	},

	output: {
		path: helpers.fromRoot('dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js',
		sourceMapFilename: '[name].bundle.map'
	},

	module: {
		loaders: [
			{
				test: /\.ts$|\.tsx$/,
				loaders: ['ts']
			},
			// {
			// 	test: /\.html$/,
			// 	loader: 'html'
			// },
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.(png|jpe?g|gif|mp4|svg|woff|woff2|vtt|ttf|eot|ico)$/,
				loader: 'file?name=assets/[name].[ext]'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: ExtractTextPlugin.extract([
					'css?minimize',
					'postcss',
					'resolve-url',
					'sass?sourceMap'
				])
			}
		]
	},

	sassLoader: {
		outputStyle: 'compressed'
	},
	postcss: function () {
		return [precss, autoprefixer];
	},

	plugins: [
		new ExtractTextPlugin('styles.min.css'),

		new webpack.optimize.CommonsChunkPlugin({
			name: ['app', 'vendor', 'polyfills']
		}),

		new HtmlWebpackPlugin({
			template: helpers.fromRoot('client/index.html'),
			favicon: helpers.fromRoot('client/media/WillAndFavicon.svg')
		})
	]
};
