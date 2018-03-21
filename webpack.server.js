const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  //inform webpack we are bundling for node  and not for the browser
  target: 'node',
  //Tell webpack whats the root file
  //of our server app
  entry: './src/index.js',
  //Where to put output file that is generated
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  //Dont include modules in bundle if they exist in node_module folder
  externals: [webpackNodeExternals()]

}

module.exports = merge(baseConfig, config)
