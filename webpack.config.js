const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const react_app_src = "app/src";
const react_app_dist = "app/dist";

module.exports = {
  entry: "./app/src/index.jsx",
  output: {
    path: path.resolve(__dirname, react_app_dist),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, react_app_src)],
        loader: "babel-loader",
        resolve: {
          extensions: [".js", ".jsx", ".json"]
        }
      },
      {
        test: /\.(html)$/,
        include: [path.resolve(__dirname, react_app_src)],
        use: {
          loader: "html-loader"
        }
      },
      {
        test: /\.css$/,
        include: [path.resolve(__dirname, react_app_src)],
        use: [
            "style-loader",
            "css-loader"
        ]
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

