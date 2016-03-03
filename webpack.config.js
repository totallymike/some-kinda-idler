const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    js: './index.js',
  },
  output: {
    path: 'builds',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loader: 'babel',
        include: path.resolve(__dirname, 'src'),
      },
    ],
  },
}
