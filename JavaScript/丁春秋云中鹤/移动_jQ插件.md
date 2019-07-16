

-  使用闭包来完成jQ插件的封装，避免了污染window其他变量，减少插件的作用域链查找

-  插件主体
  1.  插件的默认参数，和用户可配参数，合并参数
  2.  采用事件委托 绑定click事件   // 性能
  3.  clone header的outerHTML    // 修改dom的性能，回流
  4.  监听scroll事件，使用防抖    // 防抖性能
  5.  **gun()** 实现             // 重绘，二分查找， 通过data-* 与下面的具体part进行绑定


## 获取某个element距离页面顶部的大小
jQuery('selector').offset().top

element.offsetTop 相对于定位容器的位置

## （举一反三）获取某个element距离视口顶部的大小
element.getBoundingClientRect()
// top: 元素
## 获取滚动高度
jQuery(window).scrollTop();

## 动画滚动
jQuery(html, body).animate({scrollTop: 1000}, 500)

## 二分查找（当前scrollTop位于哪两个导航中间）



## clientTop/ clientLeft
-  border-top-width
-  border-left-width
## clientWidth/ clientHeight
内宽度，内高度
-  内容框 + 内边距

##  offsetWidth / offsetHeight
外宽度，外高度
-  边框 + 内边距 + 内容框
## getBoundingClientRect()
-  width/ Height 和 offsetWidth/ offsetHeight 对应

## offsetTop / offsetLeft
-  上边偏移量

## 可视区域的大小
document.documentElement.clientWidth

## 页面的实际大小
document.documentElement.scrollWidth

https://www.cnblogs.com/cloud-k/p/7681386.html