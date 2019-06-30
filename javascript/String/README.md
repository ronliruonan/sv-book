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