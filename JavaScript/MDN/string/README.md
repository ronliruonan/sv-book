String

长字符串
-----------
```
let longString = 'This is a very long string which needs' +
                 'to wrap accross nultiple lines ';
```

```
let longString = 'This is a very long string which needs \
to wrap accross nultiple lines ';
```

从字符串中获取单个字符
------------

```
return 'string'.charAt(1)
```

```
return 'string'[1]
```

String.prototype.charAt(index)
==========================
如果索引不在范围内，那么返回空字符串


String.prototype.charCodeAt(index)
==========================
- index 如果不是一个数值，则默认为0
- 返回字符的UTF-16代码单元值的数字，如果索引超出范围，返回NaN

String.prototype.codePointAt(index)


String.prototype.concat()
===========================
将一个或多个字符串与源字符串链接合并，行程一个新的字符串并返回。

- 不影响原字符串
- **强烈建议使用+ += 代替**

String.prototype.includes()
===========================
判断一个字符串是否包含在顶一个字符串中，返回true 或 false

```
str.includes(searchString[, positoin])
```
- searchString 要搜索的字符串
- positonn 从单签字符串的那个**索引位置**开始搜索子字符串，默认为0

**includes() 方法区分大小写的。**
已经被加入到es6标准中

可以用indexOf() 来实现 includes()  方法。
```
String.prototype.includes = function(searchString, position=0){
    return this.indexOf(searchString, +position) !== -1;
}
```


String.prototype.endsWith()
============================
判断当前字符串是否以另外一个给定的子字符串结尾的，返回true or false

```
  str.endsWith(searchString[, endPosition])
```
大小写敏感
```
'a,b,c,d,e'.endsWith('c',5) // true
```


`String.prototype.indexOf(searchValue[, fromIndex])`
===========================
如果没有找到，就返回-1

fromIndex 默认为0

区分大小写

 
 `String.prototype.valueOf()`
===========================
返回一个String对象的原始值； 这个值等同于String.prototype.toString()


`String.prototype.trim()`
===========================
删除字符串两端的空白字符。空白字符是（space， tab，no-break space） 以及所有的行中止符字符

**回一个新的字符串，不会影响到原字符串本身**

```
if(!String.prototype.trim){
    String.prototype.trim = function(){
        return this.replace(/^[\s]+|[\s]+$/g,'')
    }
}
```
```
  // \s\n\t
    /**
     * 去掉字符串前后所有空格
     */
    function trimStartEnd(str='') {
        return str.replace(/(^\s*)|(\s*$)/g,'');
    }

    function trimAll(str = '') {
        return str.replace(/[\s+]/g, '');
    }
```


`String.prototype.toLowerCase()`
================================
转化为小写形式，并返回。**不会影响原字符串**



`String.prototype.substring(indexStart[, indexEnd])`
===============================
indexStart   需要截取的第一个字符串的索引
indexEnd     


描述
------------------------------
提取从 indexStart到indexEnd（不包括）之间的字符
-  如果 indexStart== indexEnd， 返回一个空字符串
-  省略indexEnd， substring() 将提取字符一直到字符串末尾
-  任意参数小于0 或者 NaN ，将作为0处理（自己试了试，写成字符串默认按照0处理）
-  任意参数大于string.length ，将被当做string.length处理
-  indexStart > indexEnd， 返回结果就行两个参数调换了一样


高级用法，一个活用api的牛逼思维
------------------------------
```
  function replacingString(olds, news, fulls){
    return fulls.split(olds).join(news);
}

 function rp(olds, news, fulls) {
        return fulls.replace(new RegExp(olds, 'g'), news);
    }

    rp('aa','-->','aaaaaabbbbbcccdddadfwerertioehsf')

```
依然推荐使用replace()


`String.prototype.split([separator[, limit]])`
================================
**separator** 可以是字符串或者正则；如果找不到分隔符，则返回的数组包含一个整字符串组成的元素。

**limit**  限定返回的分割片段数量。 split方法在指定分隔符的每次出现时分割字符串，但在限制条目放入数组时停止

描述
-------------------------------
找到分隔符后，将其从字符串中删除，并将字字符串的数组返回。如果没有找到或者省略了分隔符，则该数组将包含一个有整个字符串组成的元素。如果分隔符为空字符串，则将str转换为字符数组


`String.prototype.slice(beginSlice[, endSlice])`
=================================
slice() 方法提起一个字符串的一部分，并返回一个新的字符串

接受负数值，但是会被看做是sourceLength + (负数值)

注意： slice() 提取的新字符串中包括了beginSlice 但不包括endSlice



`String.prototype.search(regexp)`
=================================
当你想要知道字符串中是否存在某个模式是，可以使用search() 类似正则的test（）方法。当腰了解更多匹配信息时，可使用match（）该方法了类似于正则的exec（）方法

    ```
    var str = 'hey John';
    var regexp = /[A-Z]/g;
    var regexp1 = /[.]/g;
    str.search(regexp);
    str.search(regexp1);
    ```


`String.prototype.replace(regexp|sbustr, newSubStr|function)`
================================
返回新字符串，原字符串不会改变


交换字符串中的两个单词
--------------------------------
    ```
    var regexp = /(\w+)\s(\w+)/;
    var str = "John Hansen";
    var newstr = str.replace(regex, "$2, $1");
    ```

使用行内函数来修改匹配到的字符
--------------------------------
    ```
    function fn(str){
        function up(mathc){
            return '-'+match.toLowerCase();
        }

        return .str.replace(/[A-Z]/g, up);
    }
    ```


牛逼
-----------------------------
```
    var str = 'x-x__';
    var retArr = [];
    str.replace(/(x_*)|(-)/g, function(match,p1,p2){
        if(p1) {retArr.push({on: true, lenght: p1.length})}
        if(p2) {retArr.push({on: faslse, length: p2.length})}
    })
```



`String.prototype.repeat(count)`
==============================
原 不受影响
```
    "abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
    "abc".repeat(0)      // ""
    "abc".repeat(1)      // "abc"
    "abc".repeat(2)      // "abcabc"
    "abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
```


百度面试题：`String.prototype.padStart(targetLength [, padString])`
================================
targetLength  当前字符串需要填充到的目标长度。如果这个数字小于当前字符串的长度，则返回当前字符串本身。

padString  填充字符串。如果字符串太长，是填充后的字符串长度超过了目标长度，则值保留最右侧的部分，其他部分被截断

返回值   在源字符串开头填充指定的填充字符串知道目标长度所形成的的新字符串。

```
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```



`String.prototype.match(regexp)`
================================
返回值
--------------------------------
如果使用了g标志，则将返回与完整正则表达式匹配的所有结果Array，但不会返回补货组或者未匹配的null


如果为止损用g标志，泽金返回第一个完整匹配机器相关的补货组Array。在这种情况下，返回的项目将具有如下所述的其他属性


```
;(global=>{
    var str = 'For more information, see Chapter 3.4.5.1';
    var regexp = /see (chapter \d+(\.\d)*)/i;
    var found = str.match(regexp);

    console.log(found);
})(window);
```

```
;(global=>{
    var str = 'QWASZXXVCFDRETRGFBVHGNBMHJNUTYIIOKLMPjhfywhwtqwaszxcxvcfdretrgvbbnbjguymnmjhopipml';
    var regexp = /[a-c]/gi;
    var found = str.match(regexp);
    console.log(found);
})(window);
```