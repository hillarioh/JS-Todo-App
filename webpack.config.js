const path = require('path');

module.exports = {
  entry: './js/index.js',
  output: {
    filename: 'main.js',
    path: path.join(__dirname, 'dist'),
  },
};