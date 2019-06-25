`Object.freeze()`可以冻结一个对象
=================
一个被冻结的对象再也不能被修改，且该对象的原型也不能被修改


浅冻结
-----------------
```
; (_ => {
    // 浅冻结
    var obj = { o: {} }

    var freeze = Object.freeze(obj);
    freeze.o.a = 'aValue';

    console.log(freeze === obj);
    console.log(freeze);

})();

```

深冻结
----------------
```
; (_ => {
    // 深冻结函数
    function deepFreeze(obj) {
        var propNames = Object.getOwnPropertyNames(obj);

        propNames.forEach(name => {
            let prop = obj[name];

            typeof prop === 'object' && prop !== null && deepFreeze(prop);
        })

        return Object.freeze(obj);
    }
})();
```