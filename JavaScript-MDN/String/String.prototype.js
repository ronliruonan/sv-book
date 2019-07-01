

; (global => {
    // \s\n\t
    /**
     * 去掉字符串前后所有空格
     */
    function trimStartEnd(str = '') {
        return str.replace(/(^\s*)|(\s*$)/g, '');
    }

    function trimAll(str = '') {
        return str.replace(/[\s+]/g, '');
    }


    function rp(olds, news, fulls) {
        return fulls.replace(new RegExp(olds, 'g'), news);
    }

    rp('aa', '-->', 'aaaaaabbbbbcccdddadfwerertioehsf')
})(window);


; (global => {
    function sp(str = 'bbaddaff', sp = 'a') {

        // 找到所有的索引
        let indexs = [];
        let indexs_last = indexs[indexs.length - 1];

        do {
            debugger;
            indexs.push(str.indexOf(sp, indexs_last));
            indexs_last = indexs[indexs.length - 1] + 1;
        } while (str.indexOf(sp, indexs_last) !== -1);

        return indexs;
    }

    console.log(sp());
})(window);