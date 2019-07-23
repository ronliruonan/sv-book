# 能否解决常见问题

https://blog.csdn.net/xiaoming100001/article/details/81109617

## 什么是HTTP
超文本传输协议，是一个基于**请求与响应**，**无状态的**、**应用层**的协议，常基于TCP/IP协议传输数据

### 发展史
-  HTTP/1.0  增加了PUT, HEAD, OPTIONS, DELETE
-  HTTP/1.1  持久连接、节约带宽、HOST域、管道机制、分块传输编码
-  HTTP/2.0  多路复用、服务器推送、头信息压缩、二进制协议等

### 多路复用
通过单一的HTTP/2.0 连接请求发起多重的请求-响应消息，多个请求stream共享一个TCP连接，实现多流并行而不是依赖建立多个TCP连接

## HTTPS
经由HTTP通信，利用TLS/SSL建立的加密。
TLS 是传输层加密协议，前身是SSL协议，有时候 二者不区分

## 为什么需要三次握手
为了防止已经失效的联系请求报文突然传到服务端，发生错误。
1. client发出SYN报文段，请求连接
2. server返回ACK + SYN，表示接收连接，确认server的连接
3. client发送ACK报文段确认连接成功

## 为什么需要四次挥手
TCP是全双模式，
1. client发出FIN报文段，仅代表client没有数据要发送；此时client还可以接受server数据
2. server返回ACK报文段时，表示已经知道client没有数据要发送了；
3. server也发送FIN报文段时，表示server没有数据要发送了
4. client发送ACK报文段，进行确认ok



##  HTTPS实现原理
1. client发送https://www.baidu.com，然后连接到server的443端口
2. server有一套数字证书（含一对公钥和私钥）
3. server传送证书（公钥、颁发机构、过期时间等）
4. client解析证书
   有client的TLS完成，验证公钥是否有效，如果没问题就生成一个随机值，然后用证书加密随机值
5. client传送加密信息
   就是传送加密的那个随机值，就是让server得到秘钥，以后通信就靠秘钥进行加解密
6. server加密信息
   server用秘钥解密，得到私钥，把内容加密
7. server传出加密后的信息
8. client 解析信息

### 如何保证server下发的公钥是对的，而不是中间人伪造的公钥？
第三方权威认证那边过一次
   