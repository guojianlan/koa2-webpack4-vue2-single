var path = require('path')
var webpack = require('webpack')
module.exports = {
  mode:'production',
  entry: {
		libs:[
      'vue',
      'vue-router',
      'axios'
    ]
  },
  output:{
    path:path.join(__dirname,'../static/libs'),
    filename: '[name].[chunkhash:7].js',
    library: '[name]_library',
  },
  plugins: [
    // 接入 DllPlugin
    new webpack.DllPlugin({
      // 动态链接库的全局变量名称，需要和 output.library 中保持一致
      // 该字段的值也就是输出的 manifest.json 文件 中 name 字段的值
      // 例如 react.manifest.json 中就有 "name": "_dll_react"
      name: '[name]_library',
      // 描述动态链接库的 manifest.json 文件输出时的文件名称
      path: path.join(__dirname, '../static/libs', '[name].manifest.json'),
    }),
  ],
  resolve: {
		extensions: ['.js', '.vue', '.json'],
  },
}
