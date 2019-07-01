Object.prototype 表示Object的原型对象
======================================
对象内部的[[Prototype]]

Object.prototype 的特性：

writable      true    是否支持赋值操作
enumerable    false   是否支持在遍历是显示当前属性
configurable  true    是否支持在对象中被删除

属性 `Object.prototype.constructor`
===============================
所有对象都会从他的原型上继承一个`constructor`属性
```
var o = {};
o.constructor === Object; // true

var a =[];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true
```

属性 `Object.prototype` vs `Object.__proto___`
==============================================
这俩 有没有关系？
啥关系？

官方推荐  使用Object.getPrototypeOf/Reflect.getPrototypeOf 和 Object.setPrototypeOf/Reflect.setPrototypeOf

`__proto__` 描述：    
----------------------    
`__proto__`的读取器报录一个对象的内部`[[Prototype]]`。
对于使用字面量创建的对象，这个值是Object.prototype
对于使用数组字面量创建的对象，这个值是Array.prototype
对于function ，这个值是Function.prototype
对于new fn穿件的对象，这个值是fn.prototype

`.__proto__`属性是`Object.prototype`一个简单的访问器属性。
任何一个`__proto__`的存取属性都集成于Ojbect.prototype.


方法：`Object.prototype.hasOwnProperty()`
========================================
所有继承了Object对象的都会 有`hasOwnProperty`方法。这个方法用来检测是否含有特定的*自身属性*;

**和`in`不同的是，该方法会忽略掉从原型链上集成到的属性**


方法：`Object.prototype.isPrototypeOf()`
========================================
检测一个对象是否存在于另一个对象的原型链上

isPrototypeOf() 与 instancof 运算不同；在`object instanceof AFunction`中，object的原型链是针对AFunction.prototype 进行检查的，而不是针对AFunction本身。
*土话： instanceof 判断是 原型链 和 原型上的事儿；isPrototypeOf() 是对象本身的事儿*
** instanceof 有自己的作用域，拿iframe举例子，winow.frames[0]  和 window.frames[1] 的都不是一会儿事儿

```
prototypeObj.isPrototypeOf(object)
```

```
function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
```