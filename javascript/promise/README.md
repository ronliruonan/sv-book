JS 实现 Promise
===============
MDN Promise 参考地址： 
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise


之前查阅了几篇blog作为参考，最终参考了：https://www.cnblogs.com/hjj2ldq/p/9489598.html   

MDN语法的理解
--------------------
```
var executor = function(resolve, reject){...}

new Promise(executor);
```
-  Promise构造函数 接收的一个executor函数
-  executor函数 接收两个参数(resolve, reject)：resolve 被作为成功函数来对待使用，reject 被作为失败函数来对待使用；
-  resolve函数 被调用时，Promise的状态改为`fulfilled`，reject函数被调用时，Promise状态改为`rejected`

-  Promise 在接收到executor函数时，将会 ```立即执行```executor函数，并且发生在Promise返回promise实例之前被调用
-  executor执行过程中，成功逻辑调用resoleve函数；失败逻辑调用reject函数；如果发生异常，Promise的状态将是`rejected`
-  executor函数的返回值将被忽略。

MDN描述的理解
---------------
-  Promsie 具有3种状态，除了上面提到的`fulfilled`和`rejected`两种，还有一个种：`pending`（初始状态，不代表成功，也不代表失败状态） 

-  Promise.prototype.then(onfulfilled, onrejected) 接收两个回调函数；最终返回promise对象，传递了原有的status
-  Promise.prototype.catch() 最终也是返回promise对象 
-  综上，Promise可以被链式调用

MDN的方法
-----------
-  Promise.all(iterable)
-  Promise.race(iterable)
-  Promise.reject(reason)
-  Promise.resolve(value) value具有三种类型，需要特殊对待

MDN的原型 - 方法
------------
-  Promise.prototype.catch(onRejcted)
-  Promise.prototype.then(onFulfilled, onRejected)
-  Promise.prototype.finally(onFinally)

回归主题 js 实现Promise
========================
此次仅实现了
-  Promsie.prototype.constructor
-  Promise.prototype.then(onResolve, onReject)
-  Promise.reject(onReject)
-  Promsie.resolve(value) 未实现value包含`then:function`的特性 

简版实现思维
---------
用到了队列 和 闭包。 代码实现在 [js-promise.html](js-promise.html)
这个思路受到blog的启发，基于blog的思路，实现了更为贴切原生Promise的功能
```
function (executor) {
    this.status = 'pending'; // 默认状态
    this.value = void 0;     // 默认值 undefined
    this.keepResolveFn = []; // 成功回调队列
    this.keepRejectFn = [];  // 失败回调队列

    const resolve = (val) => {
        this.status === 'pending' && (
            this.status = 'fulfilled',
            this.value = val,
            this.keepResolveFn.forEach(fn => fn())
        );
    };
    const reject = (val) => {
        this.status === 'pending' && (
            this.status = 'rejected',
            this.value = val,
            this.keepRejectFn.forEach(fn => fn())
        );
    };

    try {
        executor(resolve, reject); // Promise 内部立即执行executor函数
    } catch (error) {
        reject(error);
    }
}

FnPromise.prototype.then = function (onResolve, onReject) {
    this.status === 'fulfilled' && onResolve(this.value);
    this.status === 'rejected' && onReject(this.value);

    // 这一步pending状态的方案，真的佩服参考blog的作者，茅塞顿开
    this.status === 'pending' && (
        this.keepResolveFn.push(() => onResolve(this.value)),
        this.keepRejectFn.push(() => onReject(this.value))
    );

    return this; // 自动传递了Promise的状态
}
```

验证 简版
-------------
通过与原生Promise的使用对比，直接resolve
```
   /* 最简单的成功回调 */
    var p1 = new Promise(resolve => resolve(200));
    p1
      .then(res => console.log('p1 最简单的成功回调: ', res))
      /* Promise.then()返回promise对象，并保留resolve状态 */
      .then(a => console.log('p1 必须出现'), b => console.log('p1 不会出现'));


    /* 最简单的成功回调 */
    var fp1 = new Promise(resolve => resolve(200));
    fp1
      .then(res => console.log('fp1 最简单的成功回调: ', res))
      /* Promise.then()返回promise对象，并保留resolve状态 */
      .then(a => console.log('fp1 必须出现'), b => console.log('fp1 不会出现'));
```
通过与原生Promise的使用对比，使用setTimeout() 异步 resolve
```
 /* 异步回调 */
    var sync_p = new Promise(resolve => setTimeout(resolve, Math.random() * 4000, 304));
    sync_p
      .then(res => console.log('sync_p 异步回调: ', res))
      /* 异步回调的.then() 返回同样状态的promise */
      .then(a => console.log('sync_p 必须成功'), b => console.log('sync_p 不可能出现'));

    /* 异步回调 */
    var sync_fp = new Promise(resolve => setTimeout(resolve, Math.random() * 5000, 304));
    sync_fp
      .then(res => console.log('sync_fp 异步回调: ', res))
      /* 异步回调的.then() 返回同样状态的promise */
      .then(a => console.log('sync_fp 必须成功'), b => console.log('sync_fp 不可能出现'));
```

升级版本疑问
-----------------
简版Promise 无法实现一下原生效果。

`一大难点：异步Promise后.then()中直接return 新的异步Promise后，下一次.then()的所属为上一步的新异步Promise`
```
 var b = 10;
    var p1 = new Promise(resolve => {
      setTimeout(() => {
        console.log('  b += 10');
        b += 10;
        resolve();
      }, 1000 * 10);
    });

    p1
      .then(() => {
        console.log('  第一次输出应该是20: ', b);

        return 2;
      })
      .then((res) => {
        console.log('  第二次输出应该是20: ', b);
        console.log('res is 2: ', res);

        return new Promise(resolve => {
          setTimeout(() => {
            console.log(' b *= b')
            b *= b;
            resolve();
          }, 1000 * 2);
        });
      })
      .then(() => {
        console.log('  第3次输出应该是20*20: ', b);
        return new Promise(resolve => {
          setTimeout(() => {
            console.log(' b = 0')
            b = 0;
            resolve();
          }, 1000 * 2);
        });
      })
      .then(
        () => console.log('  应该是最后一次输出0: ', b),
        () => console.log('  不应该出现异常')
      );
```

升级版思维
-------------
沿用简版的队列、闭包思维，增加了递归（用来修订队列中的FnPromise的执行关系）
代码实现在 [js-promise-plug.html](js-promise-plus.html)

已经亲自验证了 升级版的疑问效果。