`Object.is(value1, value2)` 判断两个值 是否是相同的值
=============

- 两个值 都是 undefined
- 两个值 都是 null
- 两个值 都是 true 或 都是 false
- 两个值 都是 由相同个数的字符按照相同的顺序组成的字符串
- 两个值 都指 向同一个对象
- 两个值 都是 数字 
  - 都是 +0
  - 都是 -0
  - 都是 NaN
  - 都是 除了零和NaN的其他同一个数字


与 `===` 不同的是， === 视-0 和 +0 为相等。