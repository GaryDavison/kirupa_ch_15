// webpack.config.js
// Source: Kirupa Chinnathambi, Learning React, p. 195

var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");

var config = {
  entry: DEV + "index.jsx";
  output: {
    path: OUTPUT,
    filename: "myCode.js"
  }  // output
}; // config
