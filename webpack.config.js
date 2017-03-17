const webpack = require('webpack');
const path = require('path');

const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const CompressionPlugin = require('compression-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/component.js',
   devtool: 'sourcemap',
   output: {
      path: './build',
      filename: 'component.js'
   },
   resolve: {
      extensions: ['.js', 'jsx', '.json'],
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: [
               {
                  loader: 'babel-loader'
               }
            ]
         },
         {
            test: /\.css$/,
            loader: 'css-loader!postcss-loader'
         }
      ]
   },
   plugins: [
      new CompressionPlugin({
         asset: "[path].gz[query]",
         algorithm: "gzip",
         test: /\.js$|\.html$/,
         threshold: 10240,
         minRatio: 0.8
      }),
      new HtmlWebpackPlugin(
         {
            template: './src/index.html'
         }
      )
   ],
   devServer: {
      port: 8000,
      historyApiFallback: true,
      watchOptions: {
         aggregateTimeout: 300,
         poll: 1000
      }
   }
}