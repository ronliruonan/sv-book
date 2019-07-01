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