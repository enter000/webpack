const path = require('path');
// const config = require('./config');

module.exports = {
  mode: 'development',
  entry: './src/res/js-dev/scripts.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
}
