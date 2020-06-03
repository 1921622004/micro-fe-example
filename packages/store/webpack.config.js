const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {

  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'store',
      library: { type: 'var', name: 'store' },
      filename: 'remoteEntry.js',
      exposes: {
        store: './src/index'
      }
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.join('dist'),
    historyApiFallback: true
  }
}