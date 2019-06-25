; (_ => {

    const obj = {
        foo: 1,
        get bar() {
            return 2;
        },
        set bar(v) {
            this.foo = 110;
        }
    };

    let copy = Object.assign({}, obj);
    console.log(copy);

    function completeAssign(target, ...sources) {
        sources.forEach(source => {
            let descriptors = Object.keys(source).reduce((descriptors, key) => {
                descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
                return descriptors;
            }, {});

            // object.assign 默认也会拷贝可枚举的Smbols
            Object.getOwnPropertySymbols(source).forEach(sym => {
                let descriptor = Object.getOwnPropertyDescriptor(source, sym);
                descriptor.enumerable && (descriptors[sym] = descriptor);
            });

            Object.defineProperties(target, descriptors);
        });
        return target;
    }

    copy = completeAssign({}, obj);
    console.log(copy);
    // expected output: {foooo:1, get bar(){return 2}}

})();