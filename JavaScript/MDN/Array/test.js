; (global => {
    function fn(value) {
        const aa = Array.prototype.slice.call(value);
        console.log(aa);
    }

    var mp = new Map([[1], [2], [3], [4], [5]]);
    console.log(mp);
    fn(mp);

})(window);

/** Reduce */
; (global => {
    var maxCallback = (acc, cur) => Math.max(acc.x, cur.x);
    var maxCallback = (max, cur) => Math.max(max, cur);

    // var cc = [{ x: 22 }, { x: 42 }].map(el => el.x)
    //     .reduce(maxCallback, -1 / 0)

    var cc = [{ x: 22 }, { x: 42 }].map(el => el.x)
        .reduce(maxCallback)
    console.log(cc);
})(window);

/** Reduce */
; (global => {
    // var cc = [0, 1, 2, 3, 4].reduce((acc, curvalue) => acc + curvalue);
    var cc = [0, 1, 2, 3, 4].reduce((acc, curvalue) => acc + curvalue, -1 / 0);

    console.log(cc);
})(window);

/** Reduce */
; (global => {
    var initialValue = 0;
    var sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce((acc, curVal) => acc + curVal.x, initialValue);

    console.log(sum);
})(window);

/** Reduce 二维数组转化为一维数组 */
; (global => {
    var flattened = [[0, 1], [2, 3], [4, 5]].reduce((acc, curv) => acc.concat(curv), []);

    console.log(flattened);
})(window);

/** Reduce 计算数组中每个元素出现的次数 */
; (global => {
    var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

    var countedName = names.reduce((allNames, name) => {
        if (name in allNames) {
            allNames[name]++;
        } else {
            allNames[name] = 1;
        }
        return allNames;
    }, {});

    console.log(countedName);
})(window);

/** Reduce 按照属性对ojbect分类 */
; (global => {
    var people = [
        { name: 'Alice', age: 21 },
        { name: 'Max', age: 20 },
        { name: 'Jane', age: 20 }
    ];

    function groupBy(objArr = [], property) {
        return objArr.reduce((acc, cur) => {
            let key = cur[property];
            if (!acc[key]) {
                acc[key] = [];
            }

            acc[key].push(cur);
            return acc;
        }, {});
    }

    console.log(groupBy(people, 'age'))
})(window);


; (global => {
    var friends = [
        {
            name: 'Anna',
            books: ['Bible', 'Harry Potter'],
            age: 21
        },
        {
            name: 'Bob',
            books: ['War and peace', 'Romeo and Juliet'],
            age: 26
        },
        {
            name: 'Alice',
            books: ['The Lord of the Rings', 'The Shining'],
            age: 18
        }
    ];

    var allbooks = friends.reduce((acc, curValue) => {
        // return acc.concat(curValue.books);
        // return Array.prototype.push.apply(acc, curValue.books);
        return [...acc, ...curValue.books]
    }, ['a', 'a']);

    console.log(allbooks);
    console.log(Array.from(new Set(allbooks)));
})(window);

; (global => {
    function runPromiseInSequence(arr = [], input) {
        return arr.reduce(
            (promiseChain, curFun) => promiseChain.then(curFun),
            Promise.resolve(input)
        );
    }

    function p1(a) {
        return new Promise(resolve => resolve(a * 5));
    }

    function p2(a) {
        return new Promise(resolve => resolve(a * 2));
    }

    runPromiseInSequence([p1, p2], 10).then(console.log);
})(window);

/** Reduce 功能性函数管道 */
; (global => {

    const dobule = x => x + x;
    const triple = x => 3 * x;
    const quadruple = x => 4 * x;

    const pipe = (...functions) => input => functions.reduce(
        (acc, fn) => fn(acc),
        input
    );

    const ppp = function (...functions) {
        return function (input) {
            return functions.reduce(
                (acc, fn) => fn(acc),
                input
            );
        }
    }

    const m6 = pipe(dobule, triple);
    const m9 = pipe(triple, triple);

    console.log(m6(6));
    console.log(m9(9));
})(window);