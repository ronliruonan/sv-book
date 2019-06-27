; (_ => {
    var str = (new Array(1234)).fill('sdfr').join('');

    console.group('String.prototype.split() 耗时效率性能【快】');
    console.time();
    var a = str.split('');
    // console.log(a);
    console.timeEnd();
    console.groupEnd();
})(window);

; (_ => {
    var str = (new Array(1234)).fill('sdfr').join('');

    console.group('展开运算符 耗时效率性能');
    console.time();
    var a = [...str];
    // console.log(a);
    console.timeEnd();
    console.groupEnd();
})(window);

; (_ => {
    function sum(x, y, z) {
        return x + y + z;
    }

    const numbers = [1, 2, 3];
    console.log(sum(...numbers));

    console.log(sum.apply(null, numbers));
})(window);


; (_ => {
    var obj1 = { foo: 'bar', x: 42 };
    var obj2 = { foo: 'baz', y: 13 };
    const merge = (...objs) => ({ ...objs });
    // function(...objs) {
    //     return {...objs}
    // }

    console.log({ ...[22, 33] })

    console.log(merge(obj1, obj2));
    console.log(merge({}, obj1, obj2))
})(window);