const path = require('path')

module.exports = {
  entry: './src',
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
