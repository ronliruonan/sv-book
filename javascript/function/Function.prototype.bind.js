; (_ => {
    var module = {
        x: 42,
        getX: function () {
            return this.x;
        }
    }

    var getx = module.getX;
    console.log(getx()); // undefined

    bindGetX = getx.bind(module);
    console.log(bindGetX()); // 42
})(window);

; (_ => {
    /** 偏函数 */
    function list() {
        return Array.prototype.slice.call(arguments);
    }
    function addArguments(arg1, arg2) {
        return arg1 + arg2;
    }

    var list1 = list(1, 2, 3); // [1,2,3]
    console.log(list1);

    var res1 = addArguments(1, 2); // 3
    console.log(res1);

    // 创建一个函数，他拥有预设参数列表
    var leading37List = list.bind(null, 37);

    // 创建一个函数，让拥有预设的第一个参数
    var add37 = addArguments.bind(null, 37);

    var list2 = leading37List();
    console.log(list2);


    var list3 = leading37List(12, 4, 5);
    console.log(list3);

    var result2 = add37(5);
    console.log(result2);

    var result3 = add37(5, 10);
    console.log(result3); // 直接忽略第二个参数
})(window);


// ; (_ => {
//     // 配合setTimeout

//     function Bloomer() {
//         this.pp = 'hello';
//     }
//     Bloomer.prototype.declare = function () {
//         console.log('验证setTimeout(this.delcare)的this指向，是否有效')
//         console.log(this.pp);
//         console.log('end');

//     }

//     Bloomer.prototype.bloom = function () {
//         // setTimeout(this.declare, 1000);
//         setTimeout(this.declare.bind(this), 1000);
//     }

//     var b = new Bloomer();
//     b.bloom();

// })(window);


; (_ => {
    // 为什么在实现bind的时候，要slice(1)
    function fnBind(fn, thisArg, ...args) {
        return function () {
            return fn.call(thisArg, ...args, ...arguments); // return fn的返回值
        }
    }

    console.group('Bind')
    Function.prototype.bind = function (thisArg, ...args) {
        // return () => this.call(thisArg, ...args, ...arguments); // ...arguments 没必要，和args+ thisArg一样

        const fn = this;
        return function () {
            console.log('arguments:', arguments);
            return fn.call(thisArg, ...args, ...arguments);
        }
    }
    // Function.prototype.bind = function (thisArgs) {
    //     var fn = this,
    //         slice = Array.prototype.slice,
    //         args = slice.call(arguments, 1);//都是为了截取参数
    //     return function () {
    //         console.log('arguments:', arguments);
    //         return fn.apply(thisArgs, args.concat(slice.call(arguments)));
    //     }

    //     // return () => fn.apply(thisArgs, args.concat(slice.call(arguments)));
    // }

    var m = {
        "x": 1
    };
    function foo(y, z, p) {
        console.group('foo constructor');
        console.log('foo 应该含有1000', arguments);
        console.log('foo computed: ', this.x + y);
        console.log('foo z: ', z);
        console.log('foo p: ', p);
        console.groupEnd();
    }
    // foo.apply(m, [5]); // 1 + 5 = 6
    // foo.call(m, 5); // 1 + 5 = 6
    var foo1 = foo.bind(m, 5);  // foo(this=m, 5)

    console.group('foo1()')
    foo1();
    console.groupEnd();

    console.group('foo1(1000,10)')
    console.log('z 1000, p: 10')
    foo1(1000, 10);
    console.groupEnd();

    console.group(' foo(1, 2);')
    foo(1, 2);
    console.groupEnd();

    console.groupEnd();


    function cc(x, y, z) {
        console.group('args');
        console.log('x', x);
        console.log('y', y);
        console.log('z', z);
        console.log(...arguments);
        console.groupEnd();
    }
    cc(1, 2, 3, 4);

    var cp = cc.bind({ o: 0 }, 120);
    cp(1, 2, 3, 4);
    console.log('怎么推理呢？ 120 作为第一个参数，1，2，3，4依次后移')
})(window);

