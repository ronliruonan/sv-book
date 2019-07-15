; (async (global) => {

    async function throwerr() {
        return new Promise((resolve, reject) => {
            throw new Error('我疯了');

            // setTimeout(() => {
            //     // resolve('我接收');
            //     reject('我拒绝');
            // }, 1000);
        })
    }

    async function doit() {
        try {
            const res = await throwerr();
            console.log('result:', res); // resolve
        } catch (error) {
            console.log('error: ', error); // reject, Error
        }
    }

    doit();
})(window);