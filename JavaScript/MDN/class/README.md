
提升
------------------
函数声明 和 类声明 之间的一个重要区别是函数声明会提升，类生命不会。你首先需要声明你的类，然后访问它。


原型方法
------------------
```
class Pc {
    constructor(height, width){
        this.width = width;
        this.height = height;
    }

    get area(){
        return this.calcArea();
    }

    calcArea(){
        return this.height * this.width;
    }
}
```

静态方法
-------------------
static 关键字来定义一个类的静态方法。调用静态方法不需要实例化，但不能通过类实例调用静态方法。

静态方法通常用于为一个应用程序创建工具函数。

