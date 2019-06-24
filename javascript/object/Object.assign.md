`Object.assign(target, ...sources)`
=================================================
用于将所有*可枚举属性*的值从一个或多个源对象复制到目标对象；返回目标对象`target`。

**啰嗦一句：`target`将会被更改，返回的对象和`target`为同一个**

描述
-----------
源对象中的属性 将会覆盖目标对象

Object.assign 只拷贝源对象自身可枚举的属性，将调用源对象的`[[Get]]`和目标对象的`[[Set]]`


继承属性和不可枚举属性是不能拷贝的
-----------------------------------
```
var obj = Object.create({foo: 1},{ // foo 是一个继承属性
    bar: {value:2}, // bar 是一个不可枚举属性
    baz: {value:3, enumerable: true} // baz 是一个可枚举属性
});
var copy = Object.assign({},obj)
console.log(copy)
```

原始类型会被包装为对象
--------------------------

保证脑袋炸掉
```
const v1 = "abc";
const v2 = true;
const v3 = 10;
const v4 = Symbol("foo")

const obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// 原始类型会被包装，null 和 undefined 会被忽略。
// 注意，只有字符串的包装对象才可能有自身可枚举属性。
console.log(obj); // { "0": "a", "1": "b", "2": "c" }
```

异常会打断后续拷贝任务
------------------------
```
const target = Object.defineProperty({}, "foo", {
    value: 1,
    writable: false
}); // target 的 foo 属性是个只读属性。

Object.assign(target, {bar: 2}, {foo2: 3, foo: 3, foo3: 3}, {baz: 4});
// TypeError: "foo" is read-only
// 注意这个异常是在拷贝第二个源对象的第二个属性时发生的。

console.log(target.bar);  // 2，说明第一个源对象拷贝成功了。
console.log(target.foo2); // 3，说明第二个源对象的第一个属性也拷贝成功了。
console.log(target.foo);  // 1，只读属性不能被覆盖，所以第二个源对象的第二个属性拷贝失败了。
console.log(target.foo3); // undefined，异常之后 assign 方法就退出了，第三个属性是不会被拷贝到的。
console.log(target.baz);  // undefined，第三个源对象更是不会被拷贝到的。
```

拷贝访问器，牛掰
-----------
可以理解为Object.assign()的js高级实现

代码Object.assign.html中

阅读需要准备 Object.keys() Array.prototype.reduce() Object.getOwnpropertyDescriptor() Object.getOwnPropertySumbols() Object.definedProperyies()


牛掰的Polyfill
------------------