## 打包自定义库
    1.生成package.json文件
      命令:yarn init -y
      1)main是运行的入口文件
      2)license是开源的许可(只能用不能改,或者可用可改) --- MIT是最宽泛的许可
    2.创建src,test文件
      --src
        --main --> 入口文件,向外暴露工具函数
        --function
        --array
      --test
        --.html
    3.创建webpack的配置文件:webpack.config.js
      下载webpack的工具包:yarn add webpack webpack-cli -D (是开发式依赖,只有编译打包的时候调用)
    4.运行打包
      1)可以用webpack devserver
      2)可以直接运行npx webpack --watch  (监视文件,一旦更改文件,则自动生成打包文件)
## 发布npm工具库

## lodash
  前身库:underscore --- 下划线_

## 数组

  1.函数对象的方法称为静态方法 
    -- from()  of()  isArray()
  2.界面效果不变
    在data中的一个数组,根据下标改变相应的元素,界面不会发生改变,响应式失效
  3.sort方法:改变原数组,并将结果返回
  4.indexOf:找到对应元素的下标
    findIndex:是找出满足条件的下标