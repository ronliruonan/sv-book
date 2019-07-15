/**
 * 中介者模式（Mediator）
 * 用一个中介对象来封装一系列的对象交互。
 * 中介者使得各对象不需要显式地相互调用，从而实现耦合松散，而且可以独立改变他们之间的交互。
 */

class Bus {
    constructor() {
        this.passengers = {};
    }

    broadcast(message) {
        Object.keys(this.passengers).forEach((ikey, index, array) => {
            this.passengers[ikey].listen && this.passengers[ikey].listen(message);
        })
    }

    aboard(passenger) {
        this.passengers[passenger.id] = passenger;
        return this;
    }

    debus(passenger) {
        this.passengers[passenger.id] = null;
        delete this.passengers[passenger.id];
        return this;
    }
}

class Passenger {
    constructor(id = Math.random() * 1000) {
        this.id = id;
    }

    listen(message) {
        console.log(`${new Date().toLocaleString()}  我[${this.id}]  收到了通知：`, message);
    }
}

(() => {
    const bus = new Bus();
    const p1 = new Passenger();
    const p2 = new Passenger();

    bus.aboard(p1).aboard(p2);
    function sb() {
        const waitme = 1000 * 100 * Math.random();
        bus.broadcast(`等我 ${waitme / 1000} 秒`);
        setTimeout(sb, waitme);
    }
    sb();
})();