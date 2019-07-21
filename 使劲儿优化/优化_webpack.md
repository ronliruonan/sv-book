
 
```
{
    test: /\.(png|jpg:gif)$/,
    use: [
        {
            // 路径处理
            loader: 'file-loader',
            options: {
                name: '[name]-[hash:5].[ext],
                limit: 1000,
                publicPath: '',
                outputPath: 'dist/',
                useRelativePath: true
            }
        },
        {
            // img-loader 图片压缩处理
            loader: 'img-loader',
            options:{
                pngquant:{
                    quality: 80
                }
            }
        },
        {
            // base64
            loader: 'url-loader',
            options:{
                name: '[name]-[hash:5].[ext],
                limit: 5000,
                publicPath:'',
                outputPath:'dist/',
                useRelativePath: true
            }
        },
        {
            loader: 'sass-loader',
        },
        {
            // postcss
            loader: 'postcss-loader',
            options:{
                ident: 'postcss',
                plugins:[
                    // 雪碧图
                    require('postcss-sprites')({
                        spritePath: 'dist/assets/imgs/sprite',
                        retian: true
                    }),
                    <!-- // postcss 使用下一代css
                    require('postcss-cssnext')(), -->
                    // 自动前缀
                    require('autoprefixer')(),
                ]
            }
        }
    ]
}
```

- css,js编译、合并、分割、压缩、提取公共代码

-  CompressPlugin  .gzip文件
 
-  CommonsChunksWebpackPlugin
```
// 提起异步模块
new webpack.optimize.CommonsChunkPlugin({
    async: 'async-common',
    children: true,
    minChunks: 2
}),
// 单独打包 vender 和 webpack runtime（manifest）
new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
    minChunks: Infinity
}),
new webpack.optimize.UglifyJsPlugin()
```
-  ExtractTextWwebpackPlugin css压缩包



## 加载策略
-  懒加载

-  预加载

--------------------------------------


## 1. webpac 和 gulp 的不同？

两者都是前端构建工具，

gulp 是基于任务和流的，找到一个或者一类文件，对其进行一系列的链式操作，更新流上的数据，整条链式操作构成一个任务，多个任务构成整个web的构建流程

webpack 是基于入口的，webpack会自动递归解析入口所需加载的所有资源文件，然后用不用的loader来处理不同的文件，用Plugin来扩展webpack功能

## 2. 常见的Loader
-  file-loader: 把文件输出到一个文件夹中，在代码中通过相对URL去引用输出的文件
-  url-loader:  和file-loader类似，but能在文件很小的情况下以base64的方式把文件内容注入到代码中
-  source-map-loader: 加载额外的SourceMap文件，方便调试
-  image-loader: 加载并压缩图片文件
-  babel-loader:  把es6 转换成es5
-  css-loader: 加载CSS，支持模块化、压缩、文件导入等特性
-  style-loader: 把css代码注入到js中，通过dom操作去加载css
-  eslint-loader: 通过ESLint 检查js代码

##  3. 哪些Plugin
-  define-plugin 定义环境变量
-  commons-chunk-plugin: 提取公共代码
-  uglifyjs-webpack-plugin： 压缩js代码

## 4. Loader和Plugin不一样？
**不同的作用：**
- Loader 让webpack 拥有加载和解析非js文件的能力，webpack原生只能解析js文件
- Plugin Plugin监听Webpack运行的生命周期中会广播出许多事件，Pluginn监听这些事件，在合适的时机通过Webpack提供的API改变出处结果

**不同的用法：**
-  Loader 在module.rules 中配置，也就是说ta作为模块的解析规则而存在
-  Plugin 在plugins中配置，每一项都是一个plugin实例，参数能够通过构造函数传入

## 5. Webpack的构建流程：
1. 初始化参数： 从配置文件和Shell语句中读取与合并参数，得到最终的参数
2. 开始编译：用上一步得到的Compiler对象，加载所有配置的插件，执行对象的run方法开始编译
3. 确定入口： 根据配置中的entry找出所有的入口文件
4. 编译模块： 从入口文件触发，滴啊用所有配置的Loader对模块进行编译，在找出该模块依赖的模块，递归本步骤
5. 完成模块编译： 在第四步使用Loader翻译所有的模块后，得到每个模块被翻译后的最终内容以及他们之间的依赖关系
6. 输出资源： 根据入口和模块的依赖关系，组装成一个包含多个模块的Chunkj，再把每个chunk转换成一个单独的文件加入输出列表，这是可以修改内容的最后机会；
7. 输出完成： 在确定好输出内容后，根据配置确定输出的路径和文件名，把内容写入到文件系统



##  优化：
-  删除死代码   Tree Shaking  通过webpack时追加参数 --optimize-minimize


##  提高webpack构建速度
1. 多入口情况下，使用CommonsChunkPlugin提取公共代码
2. externals 配置来提取常用库
3. uglify多线程
4. 使用Tree-Shaking & ScopeHoisting 剔除多余代码， Purify-css 纯净CSS的