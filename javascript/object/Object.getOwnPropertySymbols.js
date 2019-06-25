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