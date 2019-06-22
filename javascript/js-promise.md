JS 实现 Promise
===============
MDN Promise 参考地址： 
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise


之前查阅了几篇blog作为参考，最终参考了这篇blog：https://www.cnblogs.com/hjj2ldq/p/9489598.html   感谢原文作者！！

MDN语法的理解
--------------------
```
var executor = function(resolve, reject){...}

new Promise(executor);
```
-  Promise构造函数 接收的一个executor函数
-  executor函数 接收两个参数(resolve, reject)：resolve 被作为成功函数来对待使用，reject 被作为失败函数来对待使用；
-  resolve函数 被调用时，Promise的状态改为`fulfilled`，reject函数被调用时，Promise状态改为`reject`

-  Promise 在接收到executor函数时，将会 ```立即执行```executor函数，并且发生在Promise返回promise实例之前被调用
-  executor执行过程中，成功逻辑调用resoleve函数；失败逻辑调用reject函数；如果发生异常，Promise的状态将是`reject`
-  executor函数的返回值将被忽略。

MDN描述的理解
---------------
Promsie 具有3种状态，除了上面提到的两种，还有一个种：`pending`（初始状态，不代表成功，也不代表失败状态）
