// `Object.values()` 返回给定对象的自身可枚举的属性组成 值数组
; (_ => {
    var obj = Object.create({}, {
        getFoo: {
            configurable: true,
            value: function () { return this.foo }
        }
    });
    obj.foo = '100';

    console.log(Object.values(obj));

    Object.defineProperty(obj, 'getFoo', {
        enumerable: true
    })

    console.log(Object.getOwnPropertyDescriptor(obj, 'getFoo'))
    console.log(Object.values(obj));

})();