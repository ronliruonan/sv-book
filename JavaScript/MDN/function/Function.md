
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

### 1. 通过call 或者 apply 调用，不绑定this，第一个参数会被忽略
```
var adder = {
  base : 1,
    
  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };
            
    return f.call(b, a);
  }
};

console.log(adder.add(1));         // 输出 2
console.log(adder.addThruCall(1)); // 仍然输出 2（而不是3 ——译者注）
```

### 2. 没有自己的this，arguments， 
你在实现new的解析过程中有发现的，现在在mdn得到了证实

### 3. 没有prototype属性
### 4. 不能使用new操作
### 5. 不能在函数体中使用yield


