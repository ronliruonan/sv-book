`Object.defineProperty()` 直接定义一个新属性，或修改一个属性，返回该对象
==========================
该方法允许精确添加 /或 修改对象的属性

**语法**
```
  Object.defineProperty(obj, prop, descriptor)
```
-  obj: 要定义属性的对象
-  prop：要定义 /或 修改的属性名称
-  descriptor：将要被定义 /或 修改的属性描述符

**属性描述符**
目前对象存在两种形式：数据描述符  、 存取描述符

-  `configurable` 可配置的
-  `writable`     可修改的
-  `enumerable`   可枚举的