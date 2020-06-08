const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  cache: false,
  mode: 'development',
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
      name: 'base',
      remotes: {
        add_item: 'add_item'
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^16.13.1',
          eager: true,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^16.13.1',
          eager: true
        }
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