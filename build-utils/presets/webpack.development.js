module.exports = () => ({
	output: {
		filename: "[name].bundle.js",
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
