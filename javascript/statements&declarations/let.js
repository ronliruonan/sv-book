
; (global => {
    var Fn;
    {
        let private = {};

        Fn = function Fn() {
            private.a = '2';
        }

        Fn.prototype.ap = function () {
            console.log('this.', this.private);
            console.log('private', private);
        }
    }

    var instance = new Fn();
    instance.ap();
})(window);