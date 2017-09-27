const path = require('path');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      }
    ]
  },
  devServer: {
    port: 9000,
    compress: true,
    contentBase: path.resolve(__dirname,'dist')
  }
}