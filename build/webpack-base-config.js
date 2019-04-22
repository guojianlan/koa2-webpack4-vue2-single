let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let config = {
  mode:"development",
  entry:{
    main:path.join(__dirname,'../src/main.js'),
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]_[hash:8].js',
    publicPath: '/'
  },
  module:{
    rules:[
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?cacheDirectory',
        include: [path.resolve(__dirname,'../src')],// 限定范围
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader:process.env.NODE_ENV !== 'production' ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader
          },
          "css-loader",
          'sass-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      "@":path.resolve(__dirname,'../src'),
      "assets":path.resolve(__dirname,'../src/assets')
    }
  }
}
module.exports = config