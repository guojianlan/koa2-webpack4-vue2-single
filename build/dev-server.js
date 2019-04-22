let express = require('express');
let path = require('path');
let app = express();
let webpack = require('webpack')
let webpackConfig =require('./webpack-dev-config');
let webpackMiddleware = require('webpack-dev-middleware');
var compiler = webpack(webpackConfig);
let devMiddleware =webpackMiddleware(compiler,{
  publicPath:'/',
  stats: {
    colors: true,
    chunks: false
  },
  index:'index.html'
});
app.use(require('connect-history-api-fallback')())
app.use(devMiddleware)
app.use(require("webpack-hot-middleware")(compiler));
app.use('/resource',express.static(path.join(__dirname,'../src/resource')))
// app.use('/static',express.static(path.join(__dirname,'../static')))
app.listen('3009',()=>{
  console.log('express server start2')
})