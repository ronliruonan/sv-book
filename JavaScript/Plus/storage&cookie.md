



1. 是否与服务器发生交互：
cookie数组始终在同源的请求中携带

seesionStorage  和 localStorage 不会，仅在本地


2. 存储大小限制
cookie 不能超过4k， 适合保存很小的数据，比如会话标识

sessionStorage  和 localStorage 可以达到5M

3. 有效期不同
seesionStorage 仅在当前窗口关闭前有效，sessionStorage 对于 js和a标签打开的窗口可以为公用

localStorage 持久保存

cookie  开始人员设置时效