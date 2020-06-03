const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  mode: 'development',
  output: {
    publicPath: '//localhost:3001/'
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
        exclude: /node_modules/,
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
      name: 'addItem',
      library: { type: 'var', name: 'addItem' },
      exposes: {
        AddItem: './src/AddItem.jsx'
      },
      filename: 'remoteEntry.js',
      shared: ['react', 'react-dom', 'antd']
    })
  ],
  devServer: {
    port: 3001,
    open: true,
    contentBase: path.join('dist'),
    disableHostCheck: true,
  }
}