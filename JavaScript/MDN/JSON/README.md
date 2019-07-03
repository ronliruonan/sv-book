
JSON.stringify() 方法是将衣蛾js值转换为一个json字符串，如果指定replacer是一个函数，则可以选择性的替换之，或者如果指定relaceper是一个数组，可选择性的金包含数组指定的属性


```
 JSON.stringify(value[, replacer [, space]])
```

JSON.stringify()将值转换为相应的JSON格式：

-  转换至如果有toJSON方法，将走该方法
-  非数组对象的属性不能保证以特定的顺序出现在序列化后的字符串中。
-  bool，number，string的包装对象在学历恶化过程中会自动钻换成对象的原始值
-  undefined、function 、 symbol，在序列化中会被忽略 ， 或者被转换成null
-  所有symbol属性  都会被完全忽略掉，及时replacer参数中强制包含了他们。
-  Date日期调用了toJSON()将其转换为string字符串
-  NaN 和 Infinity格式的数字及null 都 被当做null
-  其他类型的对象，包括Map Set  weakMap  weakSet 仅会序列化可枚举的属性


###  replacer用法  / array
```
  function replacer(key, value){
      return typeof value === 'string'? undefined: value;
  }

  var foo= {foundataion: "Mozilla", model: 'box', week: 45, transport: 'car', month: 7}
  console.log(JSON.stringify(foo, replacer))


  console.log(JSON.stringify(foo, ['week', 'month']))
```