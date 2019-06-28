
; (global => {

    var resolveAfter2s = function () {
        console.log('starting slow promise');
        return new Promise(resolve => {
            setTimeout(function () {
                resolve('slow');
                console.log('slow promise is done')
            }, 2000);
        });
    }

    var resolveAfter1s = function () {
        console.log('staring faset promise');
        return new Promise(resolve => {
            setTimeout(function () {
                resolve('fase')
                console.log('fast promise is done')
            })
        })
    }

    var sequerntitalStart = async function () {
        console.log('== SEQUENTIAL START==');

        const slow = await resolveAfter2s();
        console.log(slow);

        const fast = await resolveAfter1s();
        console.log(fast);
    }

    var concurrentStart = async function () {
        console.log('==CONCURRENT START with await==');

        const slow = resolveAfter2s();
        const fast = resolveAfter1s();

        console.log(await slow);
        console.log(await fast);
    }

    var concurrentPromise = function () {
        console.log('==CONCURRENT START with Promise.all==');

        return Promise.all([resolveAfter2s(), resolveAfter1s()])
            .then(msg => {
                console.log(msg[0])
                console.log(msg[1])
            })
    }

    var parallel = async function () {
        console.log('==PARALLEL with await Promise.all==');

        await Promise.all([
            (async () => console.log(await resolveAfter2s()))(),
            (async () => console.log(await resolveAfter1s()))()
        ])
    }
})(window);