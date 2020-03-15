module.exports = () => ({
	devtool: "source-map",
	output:{
		filename: "[chunkhash].js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [{loader: "ts-loader"}],
			}
		],
	},
});
