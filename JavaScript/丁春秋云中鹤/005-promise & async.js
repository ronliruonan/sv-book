/**
 * const promise1 ... {reject(100)}
 * const promise2 = new Promise...{ resolve(promise1)}
 * 那么promise2.then的状态就是promise1的
 */

/**
 * resolve 或者 reject 不会终结Promise的的参数函数的执行
 */

/**
 * Promise.prototype.then()
 * 返回一个新的Promise实例，注意是个新的Promise
 */

/**
 * Promise.prototype.catch()
 * 是.then(null,reject) 或者 .then(,rject)的别名
 */

/**
 * 如果Promise的状态已经改变了，后续影响status的操作不会生效
 */

/**
 * Promise.prototype.catch() 具有向下传递的特性，直到被捕获
 * 推荐写法
 * promise
 *   .then(res=>{})
 *   .catch(err=>{})
 */

/**
 * 与传统的try/ catch 不同，
 * 如果不使用.catch方法指定错误处理的回调函数，
 * Promise抛出的错误不会传递到外层代码
 */

/**
 * Promise.resolve() 4种参数
 * 1. 参数是一个Promise实例，原封不动return；
 * 2. 参数是一个thenable对象
 *    {
 *      then: function(res, rejct){
 *        resolve(42);
 *      }
 *    }
 * 3. 除了以上两种，直接返回状态为resolved的Promise对象
 * 4. 不带任何参数，将返回resolved状态的Promise对象
 */

/**
 * Promise.reject() 远方不懂的将参数作为理由返回
 */

//   难点在于async 的错误处理机制    //
/**
 * async 函数返回的Promise对象，
 * 必须等到内部所有的await 命令后的Promise对象执行完，才发生状态改变
 * 除非，遇到return 或者 跑错。
 */

 /**
  * await 后面是一个Promise对象，如果不是，则直接返回对应的值， return await 20，==> return 20
  * 如果是一个thenable对象，视为Promise
  */

  /**
   * await返回的reject状态，可以被async的.catch捕捉到
   * 整个async 函数将会中断执行
   * 
   * await 后面的异步操作报错，等同于async函数返回的Promise对象被reject
   */

// 建议
/**
 * 1. 最好把await 放在try/catch 代码块中
 * 2. 非依赖关系，让他们并行
 * awaite Promise.all([1,2,]);
 * // let a = getFoo(), b = setFf(); let c = awaite a;, d = awaite b;
 */

 /**
  * 按顺序执行Promise
  * function logInOrder(urls){
  *   const rextPromises = urls.map(url=>{
  *     return fetch(url).then(response => response.text())  
  *   }
  *   
  *   rextPromoise.reduce((chain, textPromise)=>{
  *       return chain.then(()=>textPromise)
  *              .then(text=> console.log(text));
  *   }, Promise.resoleve());
  * )
  * }
  * 
  * async function logInOrder(urls){
  *     for(const url of urls){
  *       const res = awaite fetch(url);
  *       console.log(awaite tesponse.text());
  *     }
  * }
  * 
  * 牛逼的来了
  * async function logInOrder(urls){
  *   // 并发读取远程URL
  *   const textPromises = urls.map(async url=>{
  *       const res = await fetch(url);
  *       return res.text();
  *   })
  * 
  *   // 按此粗输出
  *   for(const textpromise of textPromises){
  *     console.log(awaite textPromise);
  *   }
  * }
  */