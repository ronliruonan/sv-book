/** 使用Map对象 */
; (global => {
    var myMap = new Map();

    var keyObj = {},
        keyFn = function () { },
        keyString = 'a';

    myMap.set(keyString, '字符串');
    myMap.set(keyObj, 'Obj key');
    myMap.set(keyFn, 'fn key');

    console.log(myMap.size); // 3

    console.log(myMap.get(keyObj));

    // 如果我修改了keyObj的内容，不修改指针
    keyObj.a = 'a';
    console.log(myMap.get(keyObj));

    console.log(myMap.get('a'));
})(window);

/**NaN 作为Map的键 */
; (global => {
    var myMap = new Map();
    console.log('myMap: ', myMap.set(NaN, 'not a number'));
    console.log('getNaN:', myMap.get(NaN));

    var otherNaN = Number('asdfasdfasdf');
    console.log('OtherNaN:', myMap.get(otherNaN))

})(window);

/** 使用for...of 方法迭代Map */
; (global => {
    var myMap = new Map();
    myMap.set(0, 'zero')
    myMap.set(1, 'one');

    for (let [key, value] of myMap) {
        console.log(key + '  =  ' + value);
    }

    for (let key of myMap.keys()) {
        console.log(key);
    }

    for (let value of myMap.values()) {
        console
            .log(value);
    }

    for (let [key, value] of myMap.entries()) {
        console
            .log(key + '   =  ' + value);
    }
})(window);

/** Map 与数组的关系 */
; (global => {
    var kvs = [["key1", "value1"], ["key2", "value2"]];

    // 使用常规的map 构造函数可以看经衣蛾为二位爱你只对舒总积分拉克丝待交房拉克丝待交房
    var map = new Map(kvs);
    console
        .log('msp', map);

    console.log(map.get('key1')); // value1

    console
        .log(Array.from(map))

    console
        .log(Array.from(map.keys()))
})(window);


/** Map对象合并，但报纸键的惟一性 */
; (() => {
    var first = new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
    ]);

    var second = new Map([
        [1, 'uno'],
        [2, 'dos']
    ]);

    // 合并两个Map对象时，如果有重复的键值，则后面的会覆盖前面的。
    // 展开运算符本质上是将Map对象转换成数组。
    var merged = new Map([...first, ...second]);

    console.log(merged.get(1)); // uno
    console.log(merged.get(2)); // dos
    console.log(merged.get(3)); // three
})();