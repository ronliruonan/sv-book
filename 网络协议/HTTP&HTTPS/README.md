HTTP协议
============
报文、请求方法、头信息、正文、状态码

安全、幂等、缓存。。。。




CORS(Cross-Origin Resource sharing) vs CSRF/XSRF（Cross-site request forgery）



XSS vs CSRF
============


XSS Cross site Scripting 跨站脚本攻击
------------
网站A的授信用户A，利用合法接口提交非法数据，从而影响网站其他用户的使用。
例如 alert('sb 了吧')


预防：不相信用户输入的任何信息。进行过滤转义


CSRF Cross-site request forgery 跨站请求伪造
------------

验证Referer

token校验