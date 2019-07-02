来了



Array.prototype.push(element)
如果element 是一个新array，那么element将作为一个数组元素插入到Array中，

高级牛逼的用法
----------------
Array.prototype.push.call(thisArr, ...[1,2,3,3,4,5,5,5]) 

这样就完美了。

别着急，concat 也可以能够达到我们的效果，但是该方法是创建并返回一个新数组，而不是附加