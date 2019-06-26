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