const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  //Tell webpack whats the root file
  //of our server app
  entry: './src/client/index.js',
  //Where to put output file that is generated
  output:{
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}

module.exports = merge(baseConfig, config)
