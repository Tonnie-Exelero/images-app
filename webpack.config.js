const path = require("path")
const fs = require("fs")
const HtmlWebPackPlugin = require("html-webpack-plugin")

const appDirectory = fs.realpathSync(process.cwd())
const resolveAppPath = (relativePath) => path.resolve(appDirectory, relativePath)
const host = process.env.HOST || "localhost"

process.env.NODE_ENV = "development"

module.exports = {
  mode: "development",
  entry: resolveAppPath("src"),
  output: {
    filename: "public/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: resolveAppPath("public"),
    compress: true,
    hot: true,
    host,
    port: 3000,
    publicPath: "/",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      inject: true,
    }),
  ],
}
