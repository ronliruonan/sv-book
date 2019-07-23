// `Object.getOwnPropertySymbols()` 返回一个给定对象 自身的所有Sumbol属性的数组
// ================================

; (_ => {
    var obj = {};
    var a = Symbol('a');
    var b = Symbol.for('b')

    obj[a] = 'localSymbol';
    obj[b] = 'globalSymbol';

    var objSymbols = Object.getOwnPropertySymbols(obj);

    console.log(objSymbols)
    console.log(a);
    console.log(b);
})();