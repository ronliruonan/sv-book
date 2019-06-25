; (_ => {
    const obj = { prop: 42 }

    var sb = Object.freeze(obj);

    obj.prop = 100;
    console.log('sb', sb);
    console.log('prop', obj.prop);
})();

; (_ => {
    var obj = {
        prop() { },
        foo: 'bar'
    }

    obj.foo = 'baz';
    boj.lumpy = 'woof';

    delete obj.prop;

    var o = Object.freeze(obj);
    o === obj;

    obj.foo = 'asdfasdfasdf';
    obj.quaxxor = 'ther reiendly duck';
})();

; (_ => {
    var a = [0];
    console.log(Object.freeze(a) === a);

    a.push('asdf');
    console.log(a);
})();

; (_ => {
    // 浅冻结
    var obj = { o: {} }

    var freeze = Object.freeze(obj);
    freeze.o.a = 'aValue';

    console.log(freeze === obj);
    console.log(freeze);

})();

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

; (_ => {
    function deepFreeze(obj) {
        const propNames = Object.getOwnPropertyNames(obj);

        propNames.forEach(name => {
            let value = obj[name];

            typeof value === 'object' && value !== null && deepFreeze(value);
        })

        return Object.freeze(obj);
    }
})();

; (_ => {
    // 一个对象默认是可扩展的，所以他也是非冻结的
    console.log(Object.isFrozen({}));

    // 一个不可扩展的空对象 同事也是一个冻结对象
    var fr = Object.preventExtensions({});
    console.log(Object.isFrozen(fr))

    
})();