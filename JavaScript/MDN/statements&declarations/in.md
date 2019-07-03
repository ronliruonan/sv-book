#  如果指定的属性在指定的对象或者其原型中，则in运算符返回true。

```
  prop in object
```
-  prop    一个字符串类型或者 symbol类型的属性或者数组索引
-  ojbect  检查他或者原型链是否包含期具有指定名称的的属性的对象

##  实例

```
    // 数组
    var trees = new Array('a', 'b', 'c');

    0 in trees        // true
    2 in trees        // true
    'a' in trees      // false 必须使用索引号，而不是数组元素的值
    'length' in trees // true

    Symbol.iterator in trees  // true

    // 内置对象
    'PI' in Math  // true

    // 自定义对象
    var mycar = {make: 'hah', model: 'sdf', year: 1235};

    'make' in mycar // true
    'model' in mycar // true
```

**in 有操作数必须是一个对象值，否则报错**

##  对被删除或者为undefineed的属性使用in
如果你使用delete 删除了一个属性，则in运算符对所删除的额属性返回false

```
var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // 返回false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // 返回false
```

```
var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // 返回true
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // 返回true
```

换句话说：in 对于数组中的empty无效。