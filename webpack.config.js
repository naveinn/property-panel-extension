const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'public/pluginAuto'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.bpmn$/,
        use: {
          loader: 'raw-loader'
        }
      }
    ]
  }
};