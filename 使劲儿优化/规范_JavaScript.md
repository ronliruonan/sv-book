


1. 使用 `void 0`来获取`undefined`值

2. 不要给变量赋值为`undefined`,可以不用赋值保持自然状态

3. 不要使用`==`，使用显示类型转换后用`===`比较

4. 将会被频繁使用的对象属性，声明出来
   ```
   for(let i = 0, length = arr.length; i<length; i++){
       // 每次访问arr.length 与 声明临时变量要费时
       // 所有不要用i<arr.length
   }
   ```

5. 减少作用域链的查找
   ```
   var a = 100;
   function(){
       var _temp_a= a;
       // 用局部变量比较好，因为window的属性很多
   }
   ```

6. `for(;;;)`尽量使用递减遍历

7. 尽量使用parseInt是表名第二个参数，多数情况下Number比parseInt和parseFloat更好的选择

8. 