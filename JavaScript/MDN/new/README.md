new 运算符干了什么
==================
之前没有思考过这个问题，也没有详细搂过MDN，原来在MDN中`new`运算符的操作如此清晰：
```
1. 创建一个空的简单JavaScript对象（即{}）；
2. 链接该对象（即设置该对象的构造函数）到另一个对象 ；
3. 将步骤1新创建的对象作为this的上下文 ；
4. 如果该函数没有返回对象，则返回this。
```
用代码来实现以下
```
/* 最新官方已经不推荐 `__proto__` */
function FnNew(classname, args) {
            // 1. 创建一个空的简单对象{}
            var obj = {};
            // 2. 将obj的构造函数链接到classname对象
            obj.__proto__ = classname.prototype;
            // 3. 将obj作为this上下文
            var res = classname.call(obj, ...args);
            // 4. 如果res为对象那么返回，如果不是，就返回obj
            return res ? res : obj;
        }
```


来个新鲜的看看
-------------------
```
Function.prototype.a = 'a';
Object.prototype.b = 'b';
function Person(){};
var p = new Person();
console.log('p.a: '+ p.a); // p.a: undefined
console.log('p.b: '+ p.b); // p.b: b
```
p 是new出来的对象，所以 p.b === 'b' 没毛病， p 不是一个Function实例，所有p.a undefined 正常

Person.a === 'a' 没毛病

p.constructor.a === 'a' 没毛病


MDN的这个举例值得注意
-------------------------
```
function Car() {}
car1 = new Car();
car2 = new Car();

console.log(car1.color);    // undefined
 
Car.prototype.color = "original color";
console.log(car1.color);    // original color
 
car1.color = 'black';
console.log(car1.color);   // black

console.log(car1.__proto__.color) //original color
console.log(car2.__proto__.color) //original color
console.log(car1.color)  // black
console.log(car2.color) // original color
```
实例可以覆盖 Car原型中的属性值


看到一个运算优先级的问题
------------------------------
优先级由高到低：小括号(xxx)  >  属性访问.   >  new foo()  >  foo()

注意new Foo()优先级高于Foo();
```
function getName(){
    console.log(1)
}
function Foo() {
    this.getName = function () {
        console.log(2); 
    };
    return this;
}
Foo.getName = function () {
    console.log(3);
};
// 从 .属性访问符号 开始往前面找一个最近的对象，同时注意new Foo()优先于Foo();
var a=new Foo.getName(); //3;

// .的优先级高于new foo()，所以===new (Foo.getName)();返回Foo.getName类型的实例
var b=new Foo().getName(); //2;

// new foo()的优先级高于foo()，所以就相当于new foo()的属性，===(new Foo()).getName()；返回undefined
var c=new new Foo().getName();//2;

// new foo()优先级低于属性.，相当于new一个new foo()的getName属性函数，===new (new Foo().getName)();返回Foo.getName类型的实例
new Date().getTime();//===((new Date()).getTime)()
(new Date).getTime();//===((new Date()).getTime)()
new Date.getTime();//Uncaught TypeError: Date(...).getTime is not a function；===new (Date.getTime)()
```
感谢作者：https://www.cnblogs.com/goloving/p/9297019.html


es6 的实现
-------------
参考点：[Object.create()](../object/Object.create.md)
```
const myNew = function(constructor, ...args){
    const o = Object.create(constructor.prototype);
    const res = constructor.call(o, ...args);
    return typeof res ==='object'? res|| o:o;
}
```