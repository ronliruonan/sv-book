
; (global => {
    /**
     * 原生实现String.prototype.split()
     */
    function stringSplit(str, split) {
        var strCharts = [...str], len = strCharts.length;
        var result = [];
        var temp = '';
        strCharts.forEach((v, i) => {
            v !== split && (temp += v);
            (v === split || i === len - 1) && result.push(temp) && (temp = '');
        });

        return result;
    }

    console.log('new', stringSplit('adafdfiudsfadfagadaf', 'd'))
    console.log('ori', 'adafdfiudsfadfagadaf'.split('d'))
})(window);

; (global => {
    /**
     * 原生实现String.prototype.slice()
     */
    function stringSlice(str = '', beginWith = 0, endWith = 0) {
        var strchars = [...str];
        beginWith = beginWith > -1 ? beginWith : strCharts.length + beginWith;
        endWith = endWith > -1 ? endWith : endWith + strchars.length;

        return strchars.slice(beginWith, endWith).join('');
    }

    console.log('new', stringSlice('fihoeidiuf8473rfdiu8273r', 3, 9));
    console.log('ori', 'fihoeidiuf8473rfdiu8273r'.slice(3, 9));
})(window);


; (global => {

    function padStart(str, targetLength, padString) {
        targetLength = targetLength - str.length;
        targetLength > padString.length && (padString += padString.repeat(targetLength / padString.length))

        return padString.slice(0, targetLength) + str;// String(this);
    }

    console.log(padStart('123', 6, '0'));
})(window);