const path = require('path')
module.exports = {
  mode:'development',   //开发的模式
  // mode:'production',   //开发的模式
  //入口文件
  entry:'./src/main.js',
  //出口文件
  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'xzy_self-defining.js',
    // filename:'xzy_self-defining.min.js',
    library:'xUtils',    //向外暴露的对象的名称
    libraryTarget:'umd'  //针对 esm/commonjs
  }

}