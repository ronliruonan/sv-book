#  Map对象保存键值对。任何值都可以所谓一个键或一个值

```
    new Map([iterable])
```

一个Map对象在迭代时候会根据对象中元素的插入顺序来进行一个个for...of 循环在每次迭代后会返回一个形式为[key, value]的数组


###  Objects 和 Maps 比较
他们都运行叫你按照建制村兑取、删除键、检测一个键是否绑定了值。

-  一个Ojbect的键只能是字符串或者Symboles，但一个Map的键可以是任意值，包括函数、对象、基本类型

-  Map中的兼职是有序的，而添加到对象中的键则不是。 因此，当对他们进行遍历是，Map对象是按照插入的书讯返回键值

-  可以通过size属性直接获取一个Map的键值对个数，而Ojbect的需要手动计算

-  Map可直接进行迭代，而Ojbect的迭代需要获取他的件数组，然后在进行爹地啊

-  Ojbect都有自己的额原型，原型链上的键名有可能和你自己在对象上的设置键名产生冲突。

-  Map在设计频繁增删兼职对的场景下会有些性能优势。


##  `Map.prototype.size`
返回Map对象的键值对的数量


##  `Map.prototype.clear()`
移除Map对象的所有键值对。


##  `Map.prototype.delete(key)`
如果Map对象中存在该元素，则删除他并返回true；否则如果该元素不存在则返回false


##  `Map.prototype.entries()`
返回一个新的Iterator对象，他按照插入顺序包含了Map对象中的每个元素的[key, value]数组


##  `Map.prototype.forEach(callbackFn[, thisArg])`
按照插入书讯，为Map对象里的每一个键值对调用一次callbackFn函数。


##  `Map.prototype.get(key)`
返回键对应的值，如果不存在，则返回undefinded


##  `Map.protootype.has(key)`
返回一个bool值，表示Map对象是否包含键值对


##  `Map.prototype.keys()`
返回一个新的Iterator对象，按照插入顺序包含了Map对象中的每个元素的键。


##  `Map.prototype.set(key, value)`
设置Map对象中的组件的值，放回该Map对象。


##  `Map.prototype.values()`
返回一个新的Iterator对象，按照插入顺序包含了Map对象中的每个元素的值。

#  示例
## 使用Map对象
 