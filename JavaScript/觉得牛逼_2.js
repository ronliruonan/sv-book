
// 1. 巧用闭包的判断类型
const isType = type => target => `[object ${type}]` === Object.prototype.toString.call(target);
const isArray = isType('Array');
console.log(isArray([]));

// 2. es5 实现数组map
Array.prototype.map_es5 = function (handler) {
  let __len = this.length,
    __mapArr = [];
  for (let i = 0; i < __len; i++) {
    __mapArr.push(handler.call(this, this[i], i, this));
  }
  return __mapArr;
}
[1, 2, 4].map_es5(v => v * 2);

// 3. 使用reduce实现数据map
Array.prototype.map_reduce = function (handler) {
  return this.reduce((acc, current, index) => {
    return [].push.call(acc, handler.call(this, current, index, this))
  }, []);
}

// 4. es5实现数组的filter
Array.prototype.filter_es5 = function (handler) {
  let __len = this.length,
    __filterArr = [];
  for (let i = 0; i < __len; i++) {
    handler.call(this, this[i], i, this) && __filterArr.push(this[i]);
  }
  return __filterArr;
}

// 5. 使用reduce实现数据的filter
Array.prototype.filter_reduce = function (handler) {
  return this.reduce((acc, current, index) => {
    return handler.call(this, current, index, this) ? acc.push(current) : acc;
  }, []);
}

// 6. es5实现some
Array.prototype.some_es5 = function (handler) {
  let __len = this.length,
    __flag = false;
  for (let i = 0; i < __len; i++) {
    let res = handler.call(this, this[i], i, this);
    if (res) {
      __flag = true;
      break;
    }
  }
  return __flag;
}

// 7. reduce 实现数组的flat
Array.prototype.flat_reduce = function (deep = 1) {
  if (deep === 0) return this;
  return this.reduce((acc, current) => {
    if (Array.isArray(current)) {
      return acc.push(current.flat_reduce.call(current, deep - 1));
    } else {
      return acc.push(current);
    }
  }, []);
}

// 8. 图片懒加载

let lazyload = (function () {
  let imglist = [...document.querySelectorAll('img')];
  let num = imglist.length;
  let count = 0;
  return function () {
    let deleteIndexList = [];
    imglist.forEach((img, index) => {
      let rect = img.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src;
        deleteIndexList.push(index);
        count++;
        if (count === num) {
          document.removeEventListener('scroll', lazyload);
        }
      }
    })

    imglist = imglist.filter((_, index) => !deleteIndexList.includes(index));
  }
})();
document.addEventListener('scroll', _.debounce(lazyload));


// 9. 实现Object.assign
const iscomplexDataType = obj => (obj !== null && (typeof obj === 'object' || typeof obj === 'function'));
const myAssign = function (target, ...source) {
  if (target === null) throw new TypeError('...');
  return source.reduce((acc, current) => {
    iscomplexDataType(acc) || (acc = new Object(acc));
    if (current === null) return acc;
    [...Object.keys(current), ...Object.getOwnPropertySymbols(current)].forEach(key => {
      acc[key] = current[key];
    });
    return acc;
    // Symbol.iterator
  }, target);
}

// 10. 优雅处理async/await
async function errorasdf(asyncfunc) {
  try {
    return [null, await asyncfunc()];
  } catch (err) {
    return [err, null];
  }
}
let [err, res] = await errorasdf(asyncfunc);


; (global => {
  const isType = type => obj => `[object ${type + ''.replace(/\w/, $1 => $1.toUpperCase())}]` === Object.prototype.toString.call(obj);
  const _isArray = isType('array'),
    _isObject = isType('Object'),
    _isNull = isType('null');
})(this);