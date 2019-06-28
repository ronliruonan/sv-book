
在JavaScript中，函数是头等对象。


描述
---------------
如果一个函数没有使用return语句，则它默认返回undefined。要想返回一个特定的值，则函数必须使用return语句来制定一个要返回的值（使用new 关键字滴啊用一个构造函数除外*代码验证疑问***new的实现中的return**）

调用函数时，传递给函数的值被称为函数的形参，对应位置的函数参数名叫做形参。



IIFE(Immediately Invokable Function Exproseeions)
---------------

当函数只使用一次时


`function*` 定义生成器函数
================

```
function* generator(i){
    yield i;
    yield i + 10;
}

var gen = generator(10);
conso.log(gen.next().value);

console.log(gen.next().value);
```



牛逼的箭头函数
================

通过call 或者 apply 调用，不绑定this，第一个参数会被忽略
----------------

不绑定arguments
---------------
你在实现new的解析过程中有发现的，现在在mdn得到了证实

箭头函数没有prototype属性
---------------

