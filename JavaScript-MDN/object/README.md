对象初始化
============
三种方案 new Ojbect()  Object.create()  字面量标记


牛掰Points
-------------
-  Object.prototype.md 中的`.__proto__`
-  Object.prototype.assign.md 中的 **拷贝访问器**


属性定义
------------------------
es6 中的简短标记
```
/* es5 */
var a = 'foo';
var o = {a: a}

/* es6 */
var a = 'foo';
var o = {a}
```

重复属性名，后面的属性会覆盖前面的属性
```
/*es5中会报错， es6中移除了该限制*/
var a = {x: 1, x:2}  // {x:2}
```

es6 支持计算属性名
```
var i = 0;
var a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
};

var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
}
```

es6 扩展属性
```
var obj1 = {foo: 'bar', x: 42}
var obj2 = {foo: 'baz', y: 13}

var cloneObj = {...obj1}
```

NOTE: 变更原型
------------------

定义属性为`__proto__:值` 或 `"__proto__": 值`时， 不会创建名为`__proto__`的属性
```
var obj1 = {};
assert(Object.getPrototypeOf(obj1) === Object.prototype);

var obj2 = { __proto__: null };
assert(Object.getPrototypeOf(obj2) === null);

var protoObj = {};
var obj3 = { "__proto__": protoObj };
assert(Object.getPrototypeOf(obj3) === protoObj);

var obj4 = { __proto__: "not an object or null" };
assert(Object.getPrototypeOf(obj4) === Object.prototype);
assert(!obj4.hasOwnProperty("__proto__"));
```

在对象字面值中，仅有一次变更原型的机会；多次变更原型，会被视为语法错误

不适用冒号标记的属性定义，不会变更原型；而是成为一个不同的属性
```
var __proto__ = "variable";

var obj1 = { __proto__ };
assert(Object.getPrototypeOf(obj1) === Object.prototype);
assert(obj1.hasOwnProperty("__proto__"));
assert(obj1.__proto__ === "variable");

var obj2 = { __proto__() { return "hello"; } };
assert(obj2.__proto__() === "hello");

var obj3 = { ["__prot" + "o__"]: 17 };
assert(obj3.__proto__ === 17);
```
