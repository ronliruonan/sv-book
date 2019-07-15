

##  yoyo
-  `productionSourceMap: false`
-  `css:{ sourceMap: false}`

##  用过的Plugin
-  compression-webpack-plugin


##  用过的Loader
-  


## Vue多页面配置
```
 pages: {
        // notice: {
        //     // 应用入口配置，相当于单页面应用的main.js，必需项
        //     entry: 'src/modules/notice/notice.js',
        //     chunks: ['notice']
        // },
        // 只有entry属性时，直接用字符串表示模块入口
        index: 'src/modules/index/index.js',
        todo: 'src/modules/todo/todo.js'
 }
```