
cookie 会在浏览器下次向同一服务器发送请求时被携带并发送到服务器上。


Cookie的Secure 
-----------------

标记为Secure的Cookie只应功过被HTTPS协议吉阿米果的请求发送给服务端。          
但即使设置了，敏感信息也不应该通过Cookie传送。


Cookie的HttpOnly
-----------------
对于服务端不想让client 碰的cookie，可以使用HttpOnly标记起来。