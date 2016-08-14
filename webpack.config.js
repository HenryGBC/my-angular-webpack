'use strict';

//require in webpack
var webpack = require('webpack');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');

var ENV = process.env.npm_lifecycle_event;

var isProd = ENV === 'build';


/*
* Webpack requires a config objects to set all the defaults
* We are returning a self invoked function that returns the 
* config object below
*/

module.exports = (function makeWebpackConfig () {

  var config = {};

  config.entry = {
    app: './src/app/app.js'
  };
  
  
  config.output = {
    path: path.resolve(__dirname, './dist'),
    publicPath: isProd ? '/' : 'http://localhost:8080/',
    filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
    chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
  };

  if (isProd) {
    config.devtool = 'source-map';
  } else {
    config.devtool = 'eval-source-map';
  }

  config.resolve = {
    modulesDirectories: [
      'node_modules',
      'src/'
    ]
  };

  config.module = {
    preLoaders: [],
    loaders: [{
      test: /\.js$/,
      loaders: ['ng-annotate', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      loaders: ["style", "css?sourceMap", "sass?sourceMap"]
    }, { 
      test: /\.css$/, 
      loader: 'style-loader!css-loader' 
    },  
    {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      test: /\.html$/,
      loader: 'raw',
      exclude: /index\.html/
    }]
  };

  config.plugins = [];
  
  config.plugins.push(
    new HtmlWebpackPlugin({
      title: 'My Angular Webpack starter',
      template: './src/index.html',
      inject: 'body'
    })
  );

  // run if build phase
  if (isProd) {
    config.plugins.push(
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new CopyWebpackPlugin([{
        from: path.resolve(__dirname, './src')
      }], { ignore: ['*.html'] })
    );
  }

  // set dev server for testing options
  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  // return config object
  return config;
}());