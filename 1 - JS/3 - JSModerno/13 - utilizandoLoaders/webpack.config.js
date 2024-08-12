const path = require('path')
const MiniCssExtractPlugins = require('mini-css-extractplugin')

module.eports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugins, 'css-loader']
    }]
  },
  pluguns: [
    new MiniCssExtractPlugins()
  ]
}