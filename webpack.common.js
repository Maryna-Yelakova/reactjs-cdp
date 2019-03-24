 const path = require('path');
 const CleanWebpackPlugin = require('clean-webpack-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     app: './src/index.tsx',
   },
   module: {
       rules: [
           { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
           { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
           { test: /\.css$/, loader: "style-loader!css-loader" }
       ]
   },
   resolve: {
     extensions: [ '.tsx', '.ts', '.js' ]
   },
   plugins: [
     new CleanWebpackPlugin(),
     new HtmlWebpackPlugin({template:'./src/template.html'})
   ],
   output: {
    filename: 'build.js',
     path: path.resolve(__dirname, 'dist')
   }
 };

// Since webpack v4, specifying mode automatically configures DefinePlugin for you
