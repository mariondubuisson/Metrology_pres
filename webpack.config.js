var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = (env, argv) => {
  var config = {
    entry: "./js/main.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "main.js",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/i,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        inject: "head",
        template: "index.tpl.html",
        filename: argv.dev ? "index.html" : "../index.html",
        hash: true,
      }),
    ],
  };

  if (argv.dev) {
    config.mode = "development";
    config.devServer = {
      compress: true,
      port: 9000,
    };
  }

  if (argv.prod) {
    config.mode = "production";
  }

  return config;
};
