; (_ => {
    function sum(...args) {
        // args 直接是一个真数组
        console.log(args);
        return args.reduce((p, c) => p + c);
    }

    console.log(sum(1, 2, 3, 4, 5, 6))
})(window);


; (_ => {
    function sortArgs() {
        console.log(Array.prototype.sort.call(arguments, (a, b) => a > b ? 1 : -1));

        var args = Array.prototype.slice.call(arguments);
        console.log(args.sort((a, b) => a > b ? 1 : -1));
    }

    sortArgs(3, 7, 22, 5, 8, 4, 2, 4, 5)
})(window);