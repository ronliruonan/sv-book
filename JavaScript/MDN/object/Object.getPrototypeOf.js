; (_ => {
    const prototype1 = {};
    const obj = Object.create(prototype1);

    console.log(Object.getPrototypeOf(obj) === prototype1);
})();