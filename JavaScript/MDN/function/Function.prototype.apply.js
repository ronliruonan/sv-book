; (_ => {

    function minOfArray(arr) {
        var gulu = 10000;
        var min = 1 / 0;
        for (let index = 0, len = arr.length; index < len; index += gulu) {
            var tempMin = Math.min(min, ...arr.slice(index, Math.min(length, index + gulu)));
            min = Math.min(min, tempMin);
        }
        return min;
    }
})(window);


; (_ => {
    Function.prototype.call = function (thisArg, ...args) {
        var context = thisArg || window;
        context.fn = this;

        var result = context.fn(...args);
        delete context.fn;
        return result;
    }
    Function.prototype.apply = function (thisArg = window, argArray) {
        thisArg.fn = this;
        var result = thisArg.fn(...argArray);
        delete thisArg.fn;
        return result;
    }

    function fn(y, z) {
        console.log(this.x + y + z);
    }

    fn.call({ x: 888 }, 100, 200);
    fn.apply({ x: 888 }, [10000, 20000]);
})(window);