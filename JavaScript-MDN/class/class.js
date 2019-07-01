
; (global => {
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        static distance(a, b) {
            console.log('a', a);
            console.log('b', b);
        }
    }

    Point.distance(1, 2);
})(window);

; (global => {
    function FA() {

    }
    FA.eat = function () {
        return this;
    }
})(window);