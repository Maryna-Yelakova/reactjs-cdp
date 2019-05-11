const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'none',
  entry: {
    server: './src/server/server.tsx',
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js', '.tsx'] },
  // Make sure we include all node_modules etc
  externals: [/node_modules/],
  output: {
    // Puts the output at the root of the dist folder
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
         test: /\.(gif|png|jpe?g|svg)$/i,
         use: [
           'file-loader',
           {
             loader: 'image-webpack-loader',
             options: {
               bypassOnDebug: true, // webpack@1.x
               disable: true, // webpack@2.x and newer
             },
           },
         ],
       }
    ]
  },
  externals: [webpackNodeExternals()]
}
