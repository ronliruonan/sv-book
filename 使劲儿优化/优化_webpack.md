
 
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