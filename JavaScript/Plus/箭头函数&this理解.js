
; (() => {
    // 1 调用时的this
    this.x = 9;

    var module = {
        x: 81,
        getX: function () { return this.x; }
    }

    console.log('module.getX() ', module.getX())

    var retryX = module.getX;
    console.log('retryX() ', retryX())

    var boundX = retryX.bind(module);
    console.log('boundX() ', boundX())
})();


; (_ => {
    // 2  继承
    var A = function (name) {
        this.name = name;
    }

    var B = function () {
        A.apply(this, arguments);
    }

    B.prototype.getName = function () {
        return this.name;
    }

    var b = new B('sven');

    console.log(b.getName());
})();


; (_ => {
    //```
    //   arr.forEach(callback[, thisArg]);
    //   // callback 为数组中每个元素执行的函数，接收三个参数
    //   //          1. currentValue, 2. index, 3. array
    //   // thisArg, 当执行回调函数时，用作this的参考对象
    // ```
    function foo(el) {
        console.log(el, this.id);
    }

    var obj = {
        id: 'aya'
    }

    var arr = [1, 2, 3];
    arr.forEach(foo, obj);
})();

; (_ => {
    // apply  call 来绑定this
    function foo() {
        console.log(this.a);
    }

    var obj1 = { a: 2, foo: foo }

    var obj2 = { a: 3, foo: foo }

    obj1.foo(); // 2
    obj2.foo(); // 3

    obj1.foo.call(obj2); // 3
    obj2.foo.call(obj1); // 2
})();


// 有意思的题
; (global => {
    window.val = 1;
    var obj = {
        val: 2,
        dbl: function () {
            // console.log(this);
            // console.log(this.val);
            // console.log(val);
            this.val *= 2;
            val *= 2;
            console.log('val: ', val, 'this.val:', this.val);
        }
    }

    obj.dbl();  // val: 2, this.val: 4
    var func = obj.dbl;

    func();
    // val: 2, this.val: 4  is error
    // val: 4, this.val: 8  is error，哎 这俩都是window.val 咋就没转过弯来呢
    // val: 8, this.val: 8  is true 
})(window);