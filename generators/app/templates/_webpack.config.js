const path = require('path');
var webpack = require('webpack');

module.exports = {
	context: __dirname,
	entry: {
		js: './index.js',
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'main.js'
	},
	devtool: 'source-map',
	resolve: {
		extensions: ['', '.js', '.json', '.jsx']
	},
	stats: {
		color: true,
		reasons: true
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				loader: 'babel',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			}]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			minimize: true,
			compress: {
				dead_code: true,
				warnings: false
			},
			beautify: false,
			'screw-ie8': true,
			'source-map': path.join(__dirname, '/dist','/fourbench.m'),
			'source-map-url': 'main.map.js',
		})
	]
}
