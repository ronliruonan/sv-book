https://juejin.im/post/5b6133a351882519d346853f


##  1. 内联首屏关键CSS
##  2. 文件压缩
##  3. 去除无用的CSS

##  4. 建议
-  CSS选择器的匹配是从右往左进行的。
-  减少使用昂贵的属性： box-shadow | border-radius
-  优化重排与重绘
    - 减少重排
        1. 重排会导致浏览器重新计算这个文档
        2. 改变font-size 和 font-family
        3. 修改元素的内外边距
        4. js 修改css class
        5. js 获取DOM 的 位置相关属性
        6. 窗口大小的改变
    flex 重排性能较好， inline-block  float 重排更快
    - 避免不必要的重绘
      1. color   backgorund 改变时
      2. 开启硬件加速，例如使用transfor absolute