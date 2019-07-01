`Object.create()`创建一个新对象，使用现有对象来提供新对象的`__proto__`
================================================
```
  /* 语法 */
  Object.create(proto, [propertiesObject])
```
-  `proto` 新创建对象的原型对象
-  `propertiesOjbect` 对应`Object.defineProperties()`的第二个参数
-  返回一个新对象，带着指定的原型对象 和  属性
-  在 [`new`](../new/README.md) 的原理中，可以用得到


实现类式继承
-----------------
Interview中的优雅继承实现

```
 function SuperClass() {
            this.first = '1';
        }
        function OtherSuperClass() {
            this.seconde = '2';
        }
        function MyClass() {
            SuperClass.call(this);
            OtherSuperClass.call(this);
        }
        // 继承一个类
        MyClass.prototype = Object.create(SuperClass.prototype);
        // 混合其它的
        Object.assign(MyClass.prototype, OtherSuperClass.prototype);
        // 重新制定constructor
        MyClass.prototype.constructor = MyClass;
        MyClass.prototype.vv = function () { console.log('vv') }
```


使用Object.create的propertiesObject参数
------------------------------------------
```
var o = {}; // 相当于 Object.create(Object.prototype);

o = Object.create(Object.prototype,{
    foo: {
        writable: true,
        configurable: true,
        enumable: true,
        value: 'foo'
    },
    bar: {
        configurable: false,
        get: function(){return 100},
        set: function(vale){console.log(20)}
    }
})
```

额外：访问器的两种写法
-----------------------
```
var o = {
    foo: 'foo',
    get bar(){
        return 2;
    },
    set bar(v){
        this.foo = v + this.foo;
    }
}
```
```
var o = Object.create(Object.prototype,{
    bar: {
        configurable: false,
        get: function(){return 10},
        set: function(v){console.log(v)}
    }
})
```

Polyfill
--------------
```
if(typeof Object.create !== 'function'){
    Object.create = function(proto, propertiesObject){
        if(typof proto !== 'object' && typeof proto !== 'function'){
            throw new Error('Object prototype may onley be an Object')
        }else if (proto === null){
            throw new Error('不支持null')
        }
       
       if(typeof propertiesObject !== 'undefined') throw new Error('不支持');

       /*mdn原文*/
       function F(){}
       F.prototype = proto;
       return new F();

       // 我觉的这样更符合Object.create()的解释
       // return {'__proto__': proto};
    }
}
```
