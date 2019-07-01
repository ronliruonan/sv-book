; (_ => {
    console.group('原生方法push(...a)，效率应该比较快');
    var a = new Array(12345).fill(Math.random() * 10);
    var b = new Array(1234).fill(String.fromCharCode(97 + Math.ceil(Math.random() * 50)));

    console.time();
    b.push(...a);
    console.log(b.length);
    console.timeEnd();
    console.groupEnd();
})();

; (_ => {
    console.group('原型用法apply(b,a)，效率应该快')
    var a = new Array(12345).fill(Math.random() * 10);
    var b = new Array(1234).fill(String.fromCharCode(97 + Math.ceil(Math.random() * 50)));

    console.time();
    Array.prototype.push.apply(b, a);
    console.log(b.length);
    console.timeEnd();
    console.groupEnd();
})();

; (_ => {
    console.group('原型用法call(b,...a)，效率应该快')
    var a = new Array(12345).fill(Math.random() * 10);
    var b = new Array(1234).fill(String.fromCharCode(97 + Math.ceil(Math.random() * 50)));

    console.time();
    Array.prototype.push.call(b, ...a);
    console.log(b.length);
    console.timeEnd();
    console.groupEnd();
})();

; (_ => {
    console.group('forEach，效率应该慢')
    var a = new Array(12345).fill(Math.random() * 10);
    var b = new Array(1234).fill(String.fromCharCode(97 + Math.ceil(Math.random() * 50)));

    console.time();
    a.forEach(v => b.push(v))
    console.log(b.length);
    console.timeEnd();
    console.groupEnd();
})();

; (_ => {
    console.group('concat，效率应该快，但会耗费内存')
    var a = new Array(12345).fill(Math.random() * 10);
    var b = new Array(1234).fill(String.fromCharCode(97 + Math.ceil(Math.random() * 50)));

    console.time();
    b = b.concat(a);
    console.log(b.length);
    console.timeEnd();
    console.groupEnd();
})();