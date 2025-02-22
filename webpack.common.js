const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlWebpackPluginConfig = {
  templateParameters: {
    brandName: "Story App",
  },
};

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/js/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(s[ac]ss)$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: () => [require("autoprefixer")],
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: path.resolve(__dirname, "src/views/index.html"),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: "Add Stories",
      filename: "add.html",
      template: path.resolve(__dirname, "src/views/add.html"),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: "Company Profile",
      filename: "company-profile.html",
      template: path.resolve(__dirname, "src/views/company-profile.html"),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: "User Profile",
      filename: "user-profile.html",
      template: path.resolve(__dirname, "src/views/user-profile.html"),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: "Detail Story",
      filename: "detail-story.html",
      template: path.resolve(__dirname, "src/views/detail-story.html"),
      ...htmlWebpackPluginConfig,
    }),

    // Auth pages
    new HtmlWebpackPlugin({
      title: "Login",
      filename: "login.html",
      template: path.resolve(__dirname, "src/views/login.html"),
      ...htmlWebpackPluginConfig,
    }),
    new HtmlWebpackPlugin({
      title: "Register",
      filename: "register.html",
      template: path.resolve(__dirname, "src/views/register.html"),
      ...htmlWebpackPluginConfig,
    }),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public/"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),

    new CleanWebpackPlugin(),
  ],
};
