

作用域
----------
let声明的变量 旨在 它声明的块或者字块中可用。与var相似，但var尚明的变量的作用域是整个封闭函数。

暂存死区
----------
let被创建在包含该声明的作用域顶部，一般被成为提升。与通过var声明的初始化值undefined的变量不同，通过let声明的变量知道他们的定义被执行时才初始化。

在变量初始化前访问该变量会导致ReferenceError。该变量处在一个字块顶部到初始化处理的“暂存死区”中。


模仿私有接口
----------
发生在处理构造函数的时候
```

; (global => {
    var Fn;
    {
        let private = {};

        Fn = function Fn() {
            private.a = '2';
        }

        Fn.prototype.ap = function () {
            console.log('this.', this.private);
            console.log('private', private);
        }
    }

    var instance = new Fn();
    instance.ap();
})(window);
```


let vs var
-----------

let 的作用域是块，var的作用域是函数

