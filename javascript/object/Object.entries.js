; (_ => {
    console.log(this);
})();

; (function (global) {
    console.log(this);
})(window);
/**上面的两种方式，应该都是可以达到 作用域近的目的 */

; (_ => {
    /* 这个顺序真的没想到， 但和for...in的顺序一致的。*/
    const anObj = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
})();

; (_ => {
    const myObj = Object.create({}, {
        getFoo: {
            enumerable: true,
            value() { return this.foo }
        }
    });
    myObj.foo = 'bar';

    console.log(myObj);
    console.log(Object.entries(myObj))
    console.log(myObj.foo);
    console.log(myObj.getFoo())
})();
