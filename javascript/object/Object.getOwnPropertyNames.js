; (_ => {
    var arr = ['a', 'b', 'c'];
    console.group('// ["0", "1", "2", "length"]')
    console.log(Object.getOwnPropertyNames(arr))
})();

; (_ => {
    var obj = Object.create({}, {
        getFoo: {
            enumerable: false,
            value: function () { return this.foo }
        }
    })

    obj.foo = 110;

    console.log(Object.getOwnPropertyNames(obj));
    console.log(Object.keys(obj))
})();

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