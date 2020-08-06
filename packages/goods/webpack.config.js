const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 3001,
    historyApiFallback: true
  },
  output: {
    publicPath: "http://localhost:3001/",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "goods",
      library: { type: "var", name: "goods" },
      filename: "remoteEntry.js",
      remotes:{
        settings: 'settings'
      },
      exposes: {
        './GoodsList': "./src/GoodsList",
      },
      shared: {
        react: {
          singleton: true,
        },
        "react-dom": {
          singleton: true,
        },
        'antd': 'antd'
      },
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
