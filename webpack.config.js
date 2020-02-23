const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
	mode: "production",
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[name].bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "ts-loader",
					}
				],
			},
			{
				test: /\.js$/,
				enforce: "pre",
				loader: "source-map-loader",
			}
		],
	},
	devtool: "cheap-module-eval-source-map",
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		historyApiFallback: true,
	},
	optimization: {
		minimizer: [new UglifyJsPlugin()],
		splitChunks: {
			automaticNameDelimiter: ".",
			chunks: "all",
		},
		sideEffects: true,
		nodeEnv: "production",
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "react-typescript-styled-components-skeleton",
			template: path.join(__dirname, "templates/index.ejs"),
		}),
		new CleanWebpackPlugin()
		// new BundleAnalyzerPlugin()
	],
};
