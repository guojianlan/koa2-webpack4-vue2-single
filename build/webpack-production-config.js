let path = require('path');
let webpackMerge = require('webpack-merge');
let webpack =require('webpack');
let htmlWebpackPlugin = require('html-webpack-plugin')
let VueLoaderPlugin = require('vue-loader/lib/plugin')
let baseConfig = require('./webpack-base-config')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");  
const UglifyJsPlugin = require("uglifyjs-webpack-plugin"); 
let HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')
let config = webpackMerge(baseConfig,{
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'url-loader',
        options: {
          publicPath: 'https://www.baidu.com',
          limit: 10000,
          name: 'images/[name].[hash:7].[ext]'
        },
      }
    }]
  },
  mode:"production",
  devtool:"source-map",
  optimization: {
    minimizer:[
      new UglifyJsPlugin({     
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
        uglifyOptions: {
            compress: true,
        }
    }),
    new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      // chunks:'all',
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 30000 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendors",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins:[
    new webpack.AutomaticPrefetchPlugin(),
    new CleanWebpackPlugin(['dist/*.*'],{
      root: path.join(__dirname, '../'),
      verbose: true,
      dry: false
    }),
    new webpack.DefinePlugin({
      "IMAGE_DIR":JSON.stringify('/image')
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename:  '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    }),
    new ModuleConcatenationPlugin(),
    new htmlWebpackPlugin({
      template:path.resolve(__dirname,'../src/index.html'),
      inject:true,
      filename:'index.html',
      chunksSortMode: 'none' //如果使用webpack4将该配置项设置为'none',
    }),
    // new BundleAnalyzerPlugin()
    new HtmlWebpackIncludeAssetsPlugin({
      assets:[''],
      append: false
    })
  ]
})
module.exports= config