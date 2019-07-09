
; (_ => {

    setTimeout(() => console.log('a'), 0);

    var p = new Promise(resolve => {
        console.log('b');
        resolve();
    });

    p.then(_ => console.log('c'));
    p.then(_ => console.log('d'));

    console.log('e');

    // 宏 a0,
    //  b, e, c, d, a

    async function async1() {
        console.log('a');
        await async2();
        console.log('b');
    }
    async function async2() {
        console.log('c')
    }

    console.log('d')

    setTimeout(function () {
        console.log('e')
    }, 0)

    async1();

    new Promise(resolve => {
        console.log('f');
        resolve()
    }).then(_ => console.log('g'));

    console.log('h')
    // hong   e         wei   b g
    // d, a, c, f, h, b, g
})();


; (() => {
    // 单链表
    function LinkedList() {
        let Node = function (element) {
            this.value = element;
            this.next = null;
        }
        let length = 0;
        let head = null;

        this.append = function (element) {
            let node = new Node(element), current;

            if (head === null) {
                head = node;
            } else {
                current = head;
                while (current.next) {
                    current = current.next;
                }
                current.next = node;
            }

            length++;
        }

        this.removeAt = function (position) {
            var current = head, pre, index = 0;
            while (index++ < position) {
                pre = current;
                current = current.next;
            }
            pre.next = current.next;

            return current.value;
        }
    }
})();