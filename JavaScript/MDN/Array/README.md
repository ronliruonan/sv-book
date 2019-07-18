来了
================= 


Array.prototype.push(element)
如果element 是一个新array，那么element将作为一个数组元素插入到Array中，

高级牛逼的用法
----------------
Array.prototype.push.call(thisArr, ...[1,2,3,3,4,5,5,5]) 

这样就完美了。

别着急，concat 也可以能够达到我们的效果，但是该方法是创建并返回一个新数组，而不是附加



`Array.from(arrayLike[, mapFn[, thisArg]])`
===================
从一个类似数组或者可迭代对象中创建一个新的，浅拷贝的数组实例

-  类似数组对象 （拥有一个length属性和若干索引属性的任意对象）
-  可迭代对象，如Map、Set

    ```
    Array.from('foo');

    Array.from([1,2,3], x=>x+2)  // Array.from(obj).map()

    Array.from(new Set(['foo', window]))

    Array.from(new Map([[1, 2], [2, 4], [4, 8]]))

    function fn()}{return Array.from(arguments)}

    // 这个牛逼了, 生成一个长度为50的数组，每项的值等于对应的索引
    Array.from({lenght: 5},(v,i)=>i);

    // 数组去重
    function combine(){
        let arr = [...arguments]; // Array.prototype.slice.call(arguments);
        return Array.from(new Set(arr));
    }
    ```


`Array.isArray()`
===================
可以用Object.prototype.toString.call(obj)=== '[object Array]'

instanceof  不太靠谱的原因是iframe的Object不是一个事儿


`Array.of()`
==================

    ```
    Array.of(7)
    Array.of(1,2,3,)
    ```

`Array.prototype`
==================

`Array.prototype.copyWithin()`
-----------------------
潜伏之数组的一部分到同意数组中的另一个位置，并返回他，不会改变原数组的长度



`Array.prototype.fill(value[, start[, end]])`
-----------------------
方法用一个固定值填充一个数组中从其实所以引导奥终止索引内的全部元素，不包括终止索引

```
 [].fill.call({length: 3},4) // {0:4, 1:4, 2:4, length:3}

 var arr = Array(3).fill({});
 arr[0].hi = 'hi'   // [{hi:hi},{hi:hi},{hi:hi}]
```


`Array.prototype.pop()`
-----------------------
空数组返回undefined

`Array.prototype.push(element1, ..., elementN)`
-----------------------
将一个或者多个元素添加到数组的末尾，并返回该数组的新长度。

push 方法有通用性。该方法和call 或者 apply 一起使用时，可以应用在类似数组的对象上。push 方法根据length属性来决定从哪里开始插入给定的值；如果length不能被转成一个数字，则插入的元素索引为0，包括length不存在时。当length不存在是，将会创建他。

String 不行


牛逼不牛逼的用法
------------------
```
  var obj = {
      length: 0,

      addElem: function addElem(elem){
          [].push.call(this, elem)
      }
  };

  obj.addElem({});
  obj.addElem({});
  obj.length === 2
```


##  `Array.prototype.reverse()`

reverse（） 方法将数组中的元素位置颠倒，并返回该数组。该方法会改变原数组。


##  `Array.prototype.shift()`

从数组中删除第一个元素，并返回钙元素的值。该方法更改数组长度。

如果length为0，则返回undefined


##  `Array.prototype.sort([compareFunction])`

使用原地算法对数组的元素进行排序，并返回数组。

如果 compareFunction(a, b) 小于0， 那么a排列到b前面
如果 compreaFunction(a, b) 大于0， 那么b排列到a前面

### 使用映射改善排序
```
 var list = ['asdf', 'grge', 'asdfry'];

 var mapped = list.map((el,i)=>{
     return {index: i, value : el.tolowercase()}
 })

 mapped.sort((a, b)=>{ +(a.value> b.value)});

 var result = mapped.map(el=>{
     reutrn list[el.index]
 })
```


## `Array.prototype.splice(start[, deleteCount[, item1[, item2]]])`

通过删除或者替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。

-  start  指定修改的开始位置。如果超出了数组的长度，则从数组我末尾开始添加内容；如果是负值，则表示从数组末尾开始的第几位（从-1计数，）。

-  deleteCount 可选
    整数，表示要移除的数组元素的个数。
    如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。
    如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。
    如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。

-  返回值：  有被删除的元素组成的一个数组。

### 从第2位开始删除0个元素，插入‘dd’
```
  var myFish = ['a', 'b', 'c', 'd', 'e'];
  var removed = myFish.splice(2, 0, 'dd');
  // removed [], ["a", "b", "dd", "c", "d", "e"]
```

### 从第2位开始删除1个元素，插入‘dd’
```
  var myFish = ['a', 'b', 'c', 'd', 'e'];
  var removed = myFish.splice(2, 1, 'dd');
  // removed [c], ["a", "b", "dd", "d", "e"]
```


##  `Array.prototype.concat(value1[, value2[, value3]])`

将多个数组合并为一个数组，返回一个新数组。


## `Array.prototype.includes(valueToFind[, fromIndex])`

includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回true，则返回false


## `Array.prototype.join([separator])`

join() 方法将一个数组或者类数组对象 的所有元素链接哼一个字符串 并返回这个字符串。如果数组中只有一个项目，那么将返回该项目而不适用分隔符


## `Array.prototype.slice()`

返回一个新的数组对象；该对象有begin和end（不含end）的原数组的浅拷贝。原数组不变
按照索引走，默认从0开始

## `Array.prototype.indexOf()`

返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1

```
  arr.indexOf(searchElement)
  arr.indexOf(searchElement[, fromIndex = 0])
```


#  迭代方法
##  Array.prototype.forEach()
语法
```
  arr.forEach(callback[, thisArg]);
  // callback 为数组中每个元素执行的函数，接收三个参数
  //          1. currentValue, 2. index, 3. array
  // thisArg, 当执行回调函数时，用作this的参考对象
```

除了抛出一个异常，否则无法终止 或者 跳出

可以使用for...of 循环， every(), some(),find(),findIndex()

如果数组在迭代时候被修改了，则其他元素会被跳过

###  点化
```
  function copy(obj){
      var copy = Object.create(Object.getPrototypeOf(obj));
      var propNames = Object.getOwnPropertyNames(obj);

      propNames.forEach(name=>{
          var desc = Object.getOwnPropertyDescriptor(obj, name);
          Object.defineProperty(copy, name, desc);
      })
      
      return copy;
  }
```

##  Array.prototype.entries()

返回一个新的Array Iterator对象， 该对象包含数组中的每个索引的键值对

```
var array1 = ['a', 'b', 'c'];

var iterator1 = array1.entries();

console.log(iterator1.next().value);
// expected output: Array [0, "a"]

console.log(iterator1.next().value);
// expected output: Array [1, "b"]
```

##  Array.prototype.every()
若收到一个空数组，永远返回true

检测一个数组中的所有元素是否都能通过么讴歌指定函数的测试。

##  Array.prototype.som()

若是一个空数组，都返回false

##  Array.prototype.filter()

返回一个新的数组，其中办好通过的所有元素。

##  Array.prototype.find()

返回数组中满足提供的测试函数的第一个元素的值，否则返回undefined

### 寻找数组中的质数
```
  function isPrime(element, index, array){
      var start = 2;
      while(start <= Math.sqrt(element)){
          if(element % start++ < 1) return false;
      }

      return elment>1;
  }
```

##  Array.prototype.findIndex()

##  Array.prototype.keys()

##  Array.prototype.map()

返回一个新数组，结果是该数组中的每个元素都调用一个函数返回的结果。

```
    ['1', '2', '3'].map(parseInt)  // [1, NaN, NaN]

```

##  Array.prototype.reduce()

对数组中的每个元素执行一个reducer函数，将结果汇总为单个返回值

callback 接收4个参数
    1. acc 累计器
    2. cur 当前值
    3. idx 当前索引
    4. src 原数组

initialValue  作为第一次调用callback函数时的第一个参数的值。如果没有提供，则使用数组中的额第一个元素。在没有初始值的空数组上调用reduce将报错。

```
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
见 test.js
```
###  牛逼二维数组降维
###  牛逼计算数组元素出现的次数
###  牛逼分组
###  牛逼顺序执行Promise
###  牛逼的功能性函数管道

##  Array.prototype.reduceRight()

##  Array.prototype.values()

##  Array.prototype.