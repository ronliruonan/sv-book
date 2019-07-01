`Object.entries()`返回给定对象*自身可枚举属性*的键值对数组
==================
- 其排列与使用 `for...in` 遍历该对象的返回顺序一致
- *区别在于* `for...in` 也枚举原型链中的属性


描述
------------------
`Object.entries()`返回一个数组，数组中的元素是和Object上找的可枚举属性键值对 相对应的数组        
属性的顺序 与 通过手动循环对象的属性值所给出的顺序相同。

```
/* 这个顺序真的没想到， 但和for...in的顺序一致的。*/
; (_ => {
    const anObj = { 100: 'a', 2: 'b', 7: 'c' };
    console.log(Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]
})(); 
```


Polyfill
------------------
```
if(!Object.entries){
    Object.entries = function(obj){
        var ownProps = Object.keys(obj),
            i = ownProps.length,
            resArray = new Array(i);

        while(--i)
            resArray[i] = [ownProps[i], obj[ownProps[i]]];
        
        return resArray;
    }
}
```