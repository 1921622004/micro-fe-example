const path = require('path');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'add_item',
  entry: './src/index.js',
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
          singleton: true
        },
        'react-dom': {
          singleton: true
        }
      }
      // shared: {
      //   react: {
      //     singleton: true,
      //     requiredVersion: '^16.13.1',
      //     eager: true
      //   },
      //   'react-dom': {
      //     singleton: true,
      //     requiredVersion: '^16.13.1',
      //     eager: true
      //   },
      //   'antd': {
      //     eager: true
      //   },
      //   '@ant-design/icons': {
      //     eager: true
      //   },
      //   'recoil': {
      //     singleton: true,
      //     requiredVersion: '0.0.8'
      //   }
      // }
    })
  ],
  devServer: {
    port: 3001,
    contentBase: path.join('dist'),
    disableHostCheck: true,
  }
}