// webpack.config.js
// Source: Kirupa Chinnathambi, Learning React, p. 195
// Taken directly from book.  Won't run because of deprecation.

var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
  entry: DEV + "/index.jsx",
//
// Line below commented out.  It's kept because it might come in handy when
//  I build another version of this that might actually run.
//  entry: "./dev/index.jsx",
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  } // COMMA commented out here ,  // output
//  module: {
//    loaders: [{
//      include: DEV,
//      loader: "babel",
//    }]
  }
}; // config
