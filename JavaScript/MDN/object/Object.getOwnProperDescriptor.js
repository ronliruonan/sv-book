// `Object.getOwnPerpertyDescriptor()` 返回对象自有属性的属性描述符
// ===================================
// 如果指定的属性存在于对象上，则返回其属性描述符对象，否则返回`undefined`


; (_ => {
    var o, d;
    o = {
        get foo() { return 17; }
    }

    d = Object.getOwnPropertyDescriptor(o, 'foo');
    console.log(d);


    o = { bar: 43 }
    d = Object.getOwnPropertyDescriptor(o, 'bar')
    console.log(d);

    o = {};
    Object.defineProperty(o, 'baz', {
        value: 235345,
        writable: true,
        enumerable: true
    })
    console.log(Object.getOwnPropertyDescriptor(o, 'baz'))
})();