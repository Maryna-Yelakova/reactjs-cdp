const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',
  entry: {
    server: './server.js',
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  // Make sure we include all node_modules etc
  externals: [/node_modules/],
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  },
  externals: [webpackNodeExternals()]
}
