const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  mode: "production",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [{loader: "ts-loader"}]
      },
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "source-map-loader"
      }
    ]
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    hot: true
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM",
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  }
};
