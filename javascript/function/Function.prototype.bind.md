`bind()` 创建一个新的函数
=========
在调用时，设置`this`的值。并在调用新函数时，将给定参数列表作为原函数的参数序列的前若干项

返回一个原函数的拷贝，并拥有指定的this和初始参数


偏函数
---------
`bind()` 另外一个简单的用法是：使一个函数拥有预设的初始参数。在调用时，将预设参数插入到目标幻术的参数列表的开始位置


配合 `setTimeout`
---------


快捷调用
---------

```
var slice = Array.prototype.slice;
slice.apply(arguments);
```
```
var unbindSlice = Array.prototype.slice;
var slice = Function.prototype.apply.bind(unbindSlice);
slice(arguments);
```

牛逼了
``` 
5 + [1] === '51'
```

注意注意
=================
在自己写的bind实现中 箭头函数不仅会传递this 也会传递当前生命时的arguments
```
 Function.prototype.bind = function (thisArg, ...args) {
        // return () => this.call(thisArg, ...args, ...arguments); // ...arguments 没必要，和args+ thisArg一样

        const fn = this;
        return function () {
            console.log('arguments:', arguments);
            return fn.call(thisArg, ...args, ...arguments);
        }
    }
```