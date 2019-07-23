
// CommonJS模块
let { stat, exitst, readFile } = require('fs');
// 等价于
let _fs = require('fs');
let { stat, exitst, readFile } = _fs;
// 上面代码的实际是整体加载fs模块，生成一个对象，
// 然后再从对象中读取3个方法
// 这种加载称为"运行时加载", 因为只有运行时才能得到，
// 导致没办法在编译时候做静态化

// ES6 模块不是对象，而是通过export命令显示指定输出的代码
// 再通过import命令输入
import { state, exists, readFile } from 'fs'
// 上面代码的实质是从fs模块中哦加载3个方法，其他方法不加载。
// 这种加载成为“编译时加载” 或者静态加载

/**
 * es6 的模块自动采用严格模式，严格模式主要有一下限制：
 * 1. 变量必须声明后再使用
 * 2. 函数的参数不能有同名属性
 * 3. 不能使用with语句
 * 4. 不能对只读属性赋值
 * 5. 不能删除不可删除的属性
 */

 /**
  * import 命令具有提升效果，会提升到整个模块的头部
  * foo();
  * import {foo} from '../xx'
  * 😭不会报错，import命令是编译阶段执行的，在代码运行之前
  */

  /**
   * 😭 import 'lodash'
   * 仅仅执行了lodash模块
   */

/**
 * import() 可以实现动态加载，异步加载，Node的require是同步加载
 */



 // 加载

 /**
  * <script defer> 等DOM完全生成， 其他脚本执行完成后
  * <script async> 下载完后就执行，然后接着渲染
  */

  // // ES6 模块与CommonJS模块的差异
  /**
   * 1. CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用
   * 2. CommonJS模块是运行时加载，ES6模块是编译时输出接口
   */