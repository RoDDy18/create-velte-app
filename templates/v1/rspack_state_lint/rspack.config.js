/**
 * @type {import('@rspack/cli').Configuration}
 */

const path = require('path');

module.exports = {
	context: __dirname,
	entry: {
		main: "./src/App.jsx"
	},
	devServer:{
		hot: true,
		liveReload: true,
		port: 3030,
		historyApiFallback: true
	},
	devtool:"source-map",
	optimization: {
		splitChunks: {
		  chunks: 'all',
		},
	},
	builtins: {
		html: [
			{
				template: "./index.html",
				favicon: "./public/favicon.png"
			}
		]
	},
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg)$/,
				type: "asset/resource"
			},
			{
				test: /\.s[ac]ss$/,
				use: ["sass-loader"],
				type: "css"
			},
			{
				test: /.less$/,
				use: ["less-loader"],
				type: "css"
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {}
						}
					}
				],
				type: "css"
			},
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							presets: ['@babel/preset-env']
						}
					}
				]
			}
		]
	},
	output: {
		filename: '[contenthash].bundle.js',
		path: path.resolve(__dirname, "dist"),
		publicPath: '/',
		assetModuleFilename: '[name][ext]',
	}
};
