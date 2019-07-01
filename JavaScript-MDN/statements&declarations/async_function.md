

描述
-----------------
当滴啊用`async`函数时，会返回一个Promise对象。

当`async`函数返回一个值时，Promise的resolve方法会负责传递这个值

当`async`函数抛出异常时，Promise的reject方法会负责传递这个异常值



 



await 
=================
语法节
[return_value] = await expression;
表达式
一个 Promise 对象或者任何要等待的值。
返回值
返回 Promise 对象的处理结果。如果等待的不是 Promise 对象，则返回该值本身。

描述