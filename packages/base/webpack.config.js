const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  cache: false,
  mode: 'development',
  output: {
    publicPath: '//localhost:3000/'
  },
  optimization: {
    minimize: false
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'base',
      library: { type: 'var', name: 'base' },
      filename: 'remoteEntry.js',
      exposes: {
        App: './src/App.jsx'
      },
      remotes: {
        add_item: 'add_item'
      },
      shared: ['react', 'react-dom']
    })
  ],
  devServer: {
    port: 3000,
    open: true,
    contentBase: path.join('dist'),
    historyApiFallback: true
  }
}