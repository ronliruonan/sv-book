
HTTP
===========
还得继续

请求报文
-----------
```
Get /test/a.json HTTP/1.1
-------------------------
Accept: text/*
Host:  www.jasfasd.com
```
-  请求行   `GET /test/a.json http/1.1`
-  请求头    附带数据`Accept`
-  请求正文/主体（可选）


响应报文
-----------
```
  起始行   HTTP/1.O 200 OK
  ---------------------------------
  首部     Content-type: text/plain
           Content-length: 19
  ---------------------------------
  主体     Hi I'm a message！
```
-  响应行
-  响应头
-  响应正文/主体（可选）


REST： 表述性状态传输  一种api风格
=================

`head`  在响应头写信息
-----------------
没有响应主体


GET vs POST 
=================

`GET`
-----------------
请求一个指定资源，使用GET应该只被用于获取数据
-  请求是否有主体  否
-  成功响应是否有主体  是
-  安全  是
-  幂等  是
-  可缓存  是
-  Form表单是否支持  是

`HEAD`
----------------
与GET请求响应相同，但是没有响应主体

`POST`
----------------
-  请求是否有主体  是
-  成功响应是否有主体  是
-  安全  否
-  幂等  否
-  可缓存  可以有, 默认不缓存
-  Form表单是否支持  是

`PUT`
----------------
-  请求是否有主体  是
-  成功响应是否有主体  否
-  安全  否
-  幂等  是
-  可缓存  否
-  Form表单是否支持  是

`DELETE`
----------------
-  请求是否有主体  是
-  成功响应是否有主体  否
-  安全  否
-  幂等  是
-  可缓存  否
-  Form表单是否支持  是



安全
---------------
一个HTTP方法的安全是指：这个方法不会修改服务器的数据，是对服务器资源的读取操作
安全：GET HEAD OPTIONS

不安全：POST PUT PATCH DELETE

幂等
----------------
同样的请求被执行多次的效果是一样的

通常GET、HEAD、OPTIONS PUT DELETE是幂等的，所有安全的方法都是幂等的。



缓存
================
对指定请求和响应包含内容进行缓存设置，不是所有请求方法都支持缓存
```
  Cache-control: no-cache, no-store, must-revalidate

  Cache-control: public, max-age=345467
```


queryString
=================
与请求无关


-  200  OK
-  201  created 如果新资源被创建
-  204  无内容
-  301  资源地址变更
    ```
    ctx.status = 301
    ctx.set('Location','http://www.baidu.com')
    // 浏览器将调用www.baidu.com
    ```
-  303  其他 
-  304  缓存

-  400  bad request
-  404  not found
-  406  not acceptable



CORS
==============

    ```
      // 搞定
      ctx.set('Access-Control-Allow-Origin', '*')
    ```

当跨域发送非简单请求的时候，先触发遇见请求options请求

简单请求，必须满足：
1.  GET , HEAD POST 之一
2.  ACCEPT ACCEPT-LANGUARE CONTENT-LANGUAGE, CONTENT-TYPE... 之一
3.  Content-Type 必须是 text/plain, multipart/form-data  aplication/x-www-form-urlencoded 之一


`Access-Control-Allow-Methods: <method>, <method>,...`
对**预检请求**的应答中明确了客户端所要访问的资源允许使用的方法


`Access-Control-Allow-Headers: <header-naem>[, <header-name>]*`
对**预检请求**列出应答设置请求头


`Access-Control-Expose-Headers`
对**预检请求**设置响应头，默认支持Cache-Control， Content-Language，Content-Type


`Access-Control-Max-Age: <seconds>`
指示**预检请求**的结果能被缓存多久


`Access-Control-Request-Headers: <header-name>, <header-name>,...`
通知服务器的真正请求中采取哪些请求首部

`Access-Control-Request-Method: <method>`
通知服务器的真情请求中的哪些HTTP方法


`Access-Control-Allow-Credentials: true`
是否允许鞋底啊cookie  authoriztion headers   TLS Client Certificates




CSRF  XSRF
=======================

```
    站a 已登录，存在get的clear api
    站b，img 的src = http://a.com/clear
```

```
    站a 已登录，存在post的clear api
    站b， form表单 的action是http://a.com/clear
    提交b站的表单时，将会携带cookie
```



出题啦
======================
deepFreeze 的实现，需要哪些知识点

遍历对象有哪些方法

如果避免遍历对象原型链上的数据

对象属性描述符有哪些：  