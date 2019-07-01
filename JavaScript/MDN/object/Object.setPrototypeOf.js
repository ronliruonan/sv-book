; (_ => {
    var new00 = function (classname, ...args) {
        // 1. 创建一个空的简单对象{}
        var obj = {};
        // 2. 将obj的构造函数链接到classname对象
        obj.__proto__ = classname.prototype;
        // 3. 将obj作为this上下文
        var res = classname.call(obj, ...args);
        // 4. 如果res为对象那么返回，如果不是，就返回obj
        return res ? res : obj;
    }
    console.log('p00', new00(Person, 'p00', 100))

    var new0 = function (__class, ...args) {
        var o = Object.assign({}, { '__proto__': __class.prototype });
        var r = __class.call(o, ...args);
        return r ? r : o;
    }
    console.log('p0', new0(Person, 'p0', 10))

    var new1 = function (__class, ...args) {
        var o = { '__proto__': __class.prototype };
        var r = __class.call(o, ...args);
        return r ? r : o;
    }
    console.log('p1', new1(Person, 'p1', 11))

    var new2 = function (__class, ...args) {
        var o = Object.create(__class.prototype);
        var r = __class.call(o, ...args);
        return r ? r : o;
    }
    console.log('p2', new2(Person, 'p2', 12))

    var new3 = function (__class, ...args) {
        var o = Object.setPrototypeOf({}, __class.prototype);
        var r = __class.call(o, ...args);
        return r ? r : o;
    }
    console.log('p3', new3(Person, 'p3', 13))

    // // 硬钢了
    // var new4 = function (__class, ...args) {
    //     var o = (({}).prototype = __class.prototype);
    //     var r = __class.call(o, ...args);
    //     return r ? r : o;
    // }
    // console.log('p4', new4(Person, 'p4', 14))

    function Person(name, age) {
        this.name = name, this.age = age;
    }
})();