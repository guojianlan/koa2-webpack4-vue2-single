var postcss = require('postcss');
module.exports = postcss.plugin('postcss-checkcolor', function(options) {
 return function(root, result) {
  root.replaceValues('/~images~/',()=>{
    return 'https://www.baidu.com/'
  })
 };
})