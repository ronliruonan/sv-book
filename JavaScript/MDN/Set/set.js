

; (global => {
    let set = new Set();

    console.log('set.add ', set.add(1));

    set.add('some text');

    var o = { a: 1, b: 2 };
    set.add(o);

    set.add({ a: 1, b: 2 });

    set.has(1);

    console.group('for of set');
    for (let item of set) console.log(item);
    console.groupEnd();

    console.group('for of set.keys()');
    for (let item of set.keys()) console.log(item);
    console.groupEnd();

    console.group('for of set.values()');
    for (let item of set.values()) console.log(item);
    console.groupEnd();

    console.group('for of set.entires()');
    for (let item of set.entries()) console.log(item);
    console.groupEnd();


    var myarr = Array.from(set);
    console
        .log('myarr', myarr);
})(window);