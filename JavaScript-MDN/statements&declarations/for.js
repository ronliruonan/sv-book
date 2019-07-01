; (function(global) {
    function fnFor() {
        const iterable = '123456789'.split('');
        for (const value of iterable) {
            console.log(value);
            if (value == 2) {
                return 'hello';
            }
        }

        console.log('这里会被出现吗？')
    }

    let res = fnFor();
    console.log('fnFor', res);
    console.log('return 会结束function的运行')
})(window);

; (function(global) {
    function fnFor() {
        const iterable = '123456789'.split('');
        for (const index in iterable) {
            const value = iterable[index];
            console.log(value);
            if (value == 2) {
                return 'hello';
            }
        }

        console.log('这里会被出现吗？')
    }

    let res = fnFor();
    console.log('fnFor', res);
    console.log('return 会结束function的运行')
})(window);

; (function(global) {
    function fnFor() {
        const iterable = '123456789'.split('');
        for (const value of iterable) {
            console.log(value);
            if (value == 3) { break; }
            console.log('for 不会出现 在3后面')
        }

        console.log('这里会被出现吗？')
    }
    fnFor();
})(window);

; (function(global) {
    function fnFor() {
        const iterable = '123456789'.split('');
        for (const value of iterable) {
            console.log(value);
            if (value == 3) { continue; }
            console.log('for 不会出现 在3后面')
        }

        console.log('这里会被出现吗？')
    }
    fnFor();
})(window);

; (function(global) {
    function fnFor() {
        const iterable = '123456789'.split('');
        for (const value of iterable) {
            console.log(value);
            if (value == 3) { throw Error('error'); }
            console.log('for 不会出现 在3后面')
        }

        console.log('这里会被出现吗？')
    }
    fnFor();
})(window);

; (function(global) {
    Object.prototype.objCustom = function () { }
    Array.prototype.arrCustom = function () { }

    let iterable = [3, 5, 7];
    iterable.foo = 'hello ';

    // 以原始插入顺序 迭代对象的可枚举属性，会包含原型链
    console.group('以原始插入顺序 迭代对象的可枚举属性，会包含原型链');
    for (const i in iterable) { // i 为对应的key
        console.log(i);
    }
    console.groupEnd();

    // 仅迭代自身 可枚举属性，需要借助Object.hasOwnProperty()
    console.group('仅迭代自身 可枚举属性，需要借助Object.hasOwnProperty()');
    for (const i in iterable) {
        if (iterable.hasOwnProperty(i)) {
            const element = iterable[i];
            console.log(i, element);
        }
    }
    console.groupEnd();

    // 迭代 for of 遍历对象定义要迭代的数据
    console.group('迭代 for of 遍历对象定义要迭代的数据')
    for (const value of iterable) {
        console.log(value);
    }
    console.groupEnd();
})(window);