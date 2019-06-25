`Object.getOwnPropertyNames()`返回指定对象的自身属性的属性名的数组
==============================
- 包括**不可枚举属性**， 不包括**Symbol属性**

```
Object.getOwnPropertyNames(obj)
```

```
// 包括 不可枚举的属性
var obj = Object.create({},{
    getFoo: {
        enumerable: false,
        value: function(){return this.foo}
    }
})

obj.foo = 110;

console.log(Object.getOwnPropertyNames(obj));
```

```
; (_ => {
    /**
     * 摘取 不可枚举的属性
     */
    var obj = Object.create({}, {
        getFoo: {
            enumerable: false,
            value: function () { return this.foo }
        }
    })

    obj.foo = 110;
    obj.bar = 100;

    var propNames = Object.getOwnPropertyNames(obj),
        keys = Object.keys(obj);

    console.log('getOwnPropertyNames: ', propNames)
    console.log('keys: ', keys)

    console.log(propNames.filter(v => !keys.includes(v)))
})();
```