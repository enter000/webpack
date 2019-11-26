const path = require('path');
const config = require('./config');
const WebpackNotifier = require('webpack-notifier');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/res/js-dev/scripts.js',
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, `${config.BUILD_DIR}`)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new WebpackNotifier({ alwaysNotify: true }),
  ],
  watch: config.WATCH,
  watchOptions: config.WATCH_OPTIONS,
}
