const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'add_item',
  entry: './src/index.jsx',
  cache: false,
  mode: 'development',
  output: {
    publicPath: '//localhost:3001/'
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
      name: 'add_item',
      exposes: {
        './AddItem': './src/AddItem.jsx'
      },
      library: { type: 'var', name: 'add_item' },
      filename: 'remoteEntry.js',
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^16.13.1',
          eager: true
        }
      }
    })
  ],
  devServer: {
    port: 3001,
    open: true,
    contentBase: path.join('dist'),
    disableHostCheck: true,
  }
}