let path = require('path');
let webpackMerge = require('webpack-merge');
let webpack =require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let baseConfig = require('./webpack-base-config')
let HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
let config = webpackMerge(baseConfig,{
  entry:{
    main:['webpack-hot-middleware/client?path=/__webpack_hmr&noInfo=true'].concat(baseConfig.entry.main)
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'url-loader',
        options: {
          publicPath: '/',
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        },
      }
    }]
  },
  devtool:"eval-source-map",
  plugins:[
    new VueLoaderPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require(path.join(__dirname,'../static/libs/libs.manifest.json')),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      "IMAGE_DIR":JSON.stringify('/image')
    }),
    new htmlWebpackPlugin({
      template:path.resolve(__dirname,'../src/index.html'),
      inject:true,
      filename:'index.html'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets:[{path:'',assetPath:path.join(__dirname,'../static/libs/libs.b33f30c.js'),glob:'*.js',globPath:path.join(__dirname,'../static/libs')}],
      append: false
    })
  ]
})
module.exports= config