
## Cache-Control 常见取值
- private       客户端可以缓存
- public        客户端和代理server可以缓存
- max-age=30    缓存将在30s后失效
- no-cache      需要使用对比缓存来验证缓存数据 ，强制向server再次验证
- no-store      所有内容都不会缓存，

重用以获取的资源能够有效的提升网站与应用的性能


禁止进行缓存
--------------
缓存中不得存储任何关于客户端请求和服务端响应的内容。每次有客户端发起的请求都会下载完整的响应内容。
```
  Cache-Control: no-store
```

强制确认缓存
---------------
没此有请求发生是，缓存将此请求发送到服务器（验证相关缓存字段），服务器端验证请求中所描述的缓存是否过期，若为未过期，则缓存刚才的副本 。
```
  Cache-Control: no-cache
```


Cache-Control: public    / private
--------------------


缓存过期机制
-------------------
`max-age=<seconds>` 表示资源能够被缓存的最大时间。      
相对于 Expires而言，max-age是距离请求发起的时间的描述。

```
  Cache-Control: max-age=12343465
```


缓存验证确认
--------------------
Cache-Control： must-revalidate



ETags
----------------
作为缓存的一种强校验器，ETage响应头是一个对User Agent 不透明的值。 如果资源请求的响应头中含有ETag，client 可以在后续的请求的头中带上If-None-Match 头来验证缓存。

Last-Modifed 响应头可以作为一种若校验器。如果响应头中含有这个信息，客户端可以在后续的请求中带上If-Modified-Since来验证


带有Vary头的响应
------------------
Vary Http响应头决定了对于后续的请求头，如果判断是请求一个新的资源还是时候用缓存的文件。