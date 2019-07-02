; (global => {
    console.warn('function 声明提升')
    console.group('使用new关键字滴啊用一个构造函数除外【return this】');
    function fn() {
        this.x = 10, this.y = 20;
        console.log('使用new关键字滴啊用一个构造函数除外【return this】');
        return this;
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    console.groupEnd();

    console.group('使用new关键字滴啊用一个构造函数除外【return 200】');
    function fn() {
        this.x = 10, this.y = 20;
        console.warn('使用new关键字滴啊用一个构造函数除外【return 200】');

        return 200;
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    console.groupEnd();

    console.group('使用new关键字滴啊用一个构造函数除外【return {a:200}】');
    function fn() {
        this.x = 10, this.y = 20;
        console.warn('使用new关键字滴啊用一个构造函数除外【return {a:200}】');

        return { a: 200 };
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    console.groupEnd();

    console.group('使用new关键字滴啊用一个构造函数除外【return function(){}】');
    function fn() {
        this.x = 10, this.y = 20;
        console.warn('使用new关键字滴啊用一个构造函数除外【return function(){}】');

        return () => console.log(200);
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    sv();
    console.groupEnd();

    console.group('使用new关键字滴啊用一个构造函数除外【return null】');
    function fn() {
        this.x = 10, this.y = 20;
        console.warn('使用new关键字滴啊用一个构造函数除外【return null】');

        return null;
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    console.groupEnd();
})(window);

////////////////////////////////////////////////////////////////////////////////////////////

; (global => {
    console.warn('function 声明提升')
    console.group('使用new关键字滴啊用一个构造函数除外【return this】');
    function fn() {
        this.x = 10, this.y = 20;
        console.log('使用new关键字滴啊用一个构造函数除外【return this】');
        return this;
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    console.groupEnd();
})(window);

; (global => {
    console.group('使用new关键字滴啊用一个构造函数除外【return 200】');
    function fn() {
        this.x = 10, this.y = 20;
        console.warn('使用new关键字滴啊用一个构造函数除外【return 200】');

        return 200;
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    console.groupEnd();
})(window);

; (global => {
    console.group('使用new关键字滴啊用一个构造函数除外【return {a:200}】');
    function fn() {
        this.x = 10, this.y = 20;
        console.warn('使用new关键字滴啊用一个构造函数除外【return {a:200}】');

        return { a: 200 };
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    console.groupEnd();
})(window);

; (global => {
    console.group('使用new关键字滴啊用一个构造函数除外【return function(){}】');
    function fn() {
        this.x = 10, this.y = 20;
        console.warn('使用new关键字滴啊用一个构造函数除外【return function(){}】');

        return () => console.log(200);
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    sv();
    console.groupEnd();
})(window);

; (global => {
    console.group('使用new关键字滴啊用一个构造函数除外【return null】');
    function fn() {
        this.x = 10, this.y = 20;
        console.warn('使用new关键字滴啊用一个构造函数除外【return null】');

        return null;
    }
    var sv = new fn();
    console.log(sv);
    console.log('typeof sv: ', typeof sv);
    console.log('Object.prototype.toString.call sv:', Object.prototype.toString.call(sv));
    console.log('sv.x', sv.x);
    console.groupEnd();
})(window);

; (global => {
    function myFunc(obj) {
        obj.y = 10000;
    }

    var obj = {};
    console.log('obj', obj);
    myFunc(obj);
    console.log('myfunc: ', obj);
})(window);


; (global => {
    // 百度面试，活用基础知识，不要死磕正则
    function parseno(length, initnum, value = '') {
        var arr = new Array(length).fill(initnum);
        value = '' + value;
        for (let i = value.length - 1, j = length - 1; i >= 0; i-- , j--) {
            arr[j] = value.charAt(i);
        }
        return arr.join('');
    }

    console.log(parseno(6, 0, 123), 123);
    console.log(parseno(6, 0, 1234), 1234);
    console.log(parseno(6, 0, 12345), 12345);
    console.log('====================')
    // MDN 问答
    function padZeros(totlaLength, initnum, num) {
        var numStr = num + '';
        var zeroLength = totlaLength - numStr.length;
        for (let i = 0; i < zeroLength; i++) {
            numStr = initnum + '' + numStr;
        }
        return numStr;
    }


    console.log(padZeros(6, 0, 123), 123);
    console.log(padZeros(6, 0, 1234), 1234);
    console.log(padZeros(6, 0, 12345), 12345);



    ; (global => {

        function padStart(str, targetLength, padString) {
            targetLength = targetLength - str.length;
            targetLength > padString.length && (padString += padString.repeat(targetLength / padString.length))

            return padString.slice(0, targetLength) + str;// String(this);
        }

        console.log(padStart('123', 6, '0'));
    })(window);
})(window);

; (global => {
    var code = 'cd'
    var rex = RegExp(`[\\?|\\&](${code})=([^\\&]+)`, 'gi');
    var mya = rex.exec('?cdd=23234&cd=cd&ccd=ccd');
    console.log(mya);
})(window);

; (global => {
    function* gen() {
        yield 10;
        y = yield 'foo';
        yield y;
    }
    var gun = gen();
    console.log('1', gun.next())
    console.log('2', gun.next());
    console.log('3', gun.next(1000000));
    console.log('4', gun.next());
})(window);

; (global => {
    var obj = {
        get foo() {
            console.log('110');
            return 110;
        },
        set foo(v) {
            console.log('120', v);
        }
    };

    var bb = obj.foo = 23456;
    console.log('bb', bb);
    console.log('obj', obj)
})(window);


; (global => {

    function fn() {
        this.Symbol('log') = 100;

        console.log(this.Symbol('log'))
    }

    fn();
})(window);