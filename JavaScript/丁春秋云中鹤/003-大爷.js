https://www.cnblogs.com/roam/p/7423805.html


; (_ => {
    /**
     * 栈
     * 后入先出 LIFO   Array.prototype.push(), Array.prototype.pop()
     */
    /**
     * 队列
     * 先进先出  FIFO  Array.prototype.push(), Array.protoype.shift()
     */
})();

// 冒泡
; (_ => {
    function bubbleSort(arr = []) {
        var indexLen = arr.length - 1;
        while (indexLen > 0) {
            let pos = 0;
            for (let j = 0; j < indexLen; j++) {
                let jj = arr[j], jj1 = arr[j + 1];
                if (jj > jj1) {
                    pos = j;
                    ([arr[j], arr[j + 1]] = [jj1, jj]);
                }
                // arr[j] > arr[j+1] && (pos=j) &&  ([arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]);
            }
            indexLen = pos;
        }
        return arr;
    }
    var a = [45, 927, 36, 4, 2, 436734];
    console.log(bubbleSort(a));
})();

// 快速排序, 递归版，low版
; (_ => {
    function qSort(arr = []) {
        if (arr.length === 0) return [];
        var left = [], right = [];
        var pivot = arr[0];
        for (let i = 1; i < arr.length; i++) {
            arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
        }

        return qSort(left).concat(pivot, qSort(right));
    }
    console.log(qSort([12, 45, 77, 8987, 8, 64, 54, 432, 3213, 253, 45, 64, 567, 454, 3, 4]))
})();

// 快速排序
; (_ => {

    function _quickSort(num, left, right) {
        if (left >= right) return; // 若左右指针相遇，待排序数组长度小宇1，即递归的终点，return(注意不能写成left==right，这里left是有可能大于right的)。
        var i = left, j = right, flag = left; // 定义可移动的左右指针 i，j，定义flag为基数下标。
        while (i < j) { // 在i<j时不断循环，i一旦与j碰头，则跳出循环。
            while (num[j] >= num[flag] && j > flag) j--; // j不断左移，找到在num[flag]右侧且比它大的数。
            if (i >= j) {
                break; // 由于j可能已被改变，需再次判断i与j是否碰头。
            }
            while (num[i] <= num[flag] && i < j) i++; // i不断右移，找到且比基数小的数，且i不能与j碰头。(由于两次交换已合并，此处不需要使得i在flag左侧)
            // num[flag] num[j] num[i]三者换位，可用ES6语法糖[num[flag],num[j],num[i]] = [num[j],num[i],num[flag]];
            let temp = num[flag];
            num[flag] = num[j];
            num[j] = num[i];
            num[i] = temp
            flag = i; // 基数已经在原num[i]的位置，flag同时也要赋值成i。
        }
        _quickSort(num, left, flag - 1); // 将flag左边数组作为待排序数组，递归调用。
        _quickSort(num, flag + 1, right); // 将flag右边数组作为待排序数组，递归调用。
    }
    var a = [12, 45, 77, 8987, 8, 64, 54, 432, 3213, 253, 45, 64, 567, 454, 3, 4];
    _quickSort(a, 0, a.length);
    console.log(a)
})();

; (_ => {
    /**
     * 
     */
})();

; (_ => {
    /**
     * 
     */
})();


