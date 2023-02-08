const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "app/dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, "app/src")],
        loader: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx", ".json"]
        }
      },
      {
        test: /\.(html)$/,
        include: [path.resolve(__dirname, "app/src")],
        use: {
          loader: "html-loader"
        }
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "index.html"),
        filename: "index.html"
      })
  ]
}

