

/**
 * class 内部所有的方式，都是不可枚举的
 * 与es5 的行为不一致
 * 
 * 2. 类必须new
 */

 /**
  * class 表达式
  * const myClass = class Me{
  *     // Me 只能在内部使用
  * }
  */

  /**
   * 1. 类和模块内部，默认就是严格模式
   * 2. 不存在提升
   * 3. this的指向
   * 4. 静态方法， 这里方法的this指的类
   * 5. 静态属性
   * 6. 私有
   * const bar = Symbol('bar')
   * const sb = Symbole('sb')
   * export defalt class MyClass{
   *    [bar](baz){
   *       return this[snamf] = baz;
   *    }
   * }
   */