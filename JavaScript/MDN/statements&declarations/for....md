`for...of` vs `for...in` vs `for`
=====================================
- `for...in` 以*原始的插入顺序*迭代对象的**可枚举属性** （自有的，继承的，可枚举的，非Symbole属性）
- `for...of` 遍历可迭代对象定义要**迭代的数据**

```
/* 注意 for...in 迭代可枚举属性， for...of 迭代定义的数据，而非对象的属性*/
; (function(global) {
    Object.prototype.objCustom = function () { }
    Array.prototype.arrCustom = function () { }

    let iterable = [3, 5, 7];
    iterable.foo = 'hello ';

    // 以原始插入顺序 迭代对象的可枚举属性，会包含原型链
    console.group('以原始插入顺序 迭代对象的可枚举属性，会包含原型链');
    for (const i in iterable) { // i 为对应的key
        console.log(i);
    }
    console.groupEnd();

    // 仅迭代自身 可枚举属性，需要借助Object.hasOwnProperty()
    console.group('仅迭代自身 可枚举属性，需要借助Object.hasOwnProperty()');
    for (const i in iterable) {
        if (iterable.hasOwnProperty(i)) {
            const element = iterable[i];
            console.log(i, element);
        }
    }
    console.groupEnd();

    // 迭代 for of 遍历对象定义要迭代的数据
    console.group('迭代 for of 遍历对象定义要迭代的数据')
    for (const value of iterable) {
        console.log(value);
    }
    console.groupEnd();
})(window);
```

`for...of`在**可迭代对象（Array,Map,Set,String,TypedArray, arguments...）
=====================================

迭代Array
----------
```
let iterable = [1,2,3];
for(let value of iterable){
    value += 1;
    console.log(value);
}
// 2 3 4
```
如果不想修改语句块中的变量，可以用const代替let

迭代String
----------
```
let iterable = 'hello'
for(let value of iterable){
    console.log(value)
}
```

迭代Map
--------------
```
iterable = new Map([['a',1],['b',2],['c',3]]);

for(let entry of iterable){
    console.log(entry);
}

// 用到了解构赋值
for(let [key, value] of iterable){
    console.log(value);
}
```

迭代Set
```
iterable = new Set([1,2,3,4,5,,3,2,1])

for(let value of iterable){
    console.log(value);
}
```

迭代arguments
```
(function(){
    for(let arg of arguments){
        console.log(arg);
    }
})(1,2,3);
```

关闭迭代器
对于for...of，可以使用break, throw, continue return 终止
```
```

