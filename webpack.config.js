var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

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
          test: /\.jsx?$/,
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
      // new BundleAnalyzerPlugin(),
    ],
    resolve: {
      extensions: [".js", ".jsx"],
    },
  };

  if (argv.dev) {
    config.mode = "development";
    config.devServer = {
      compress: true,
      port: 9000,
      historyApiFallback: true,
    };
  }

  if (argv.prod) {
    config.mode = "production";
  }

  return config;
};
