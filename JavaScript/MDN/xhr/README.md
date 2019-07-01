XMLHttpRequest
==================
这个知识点 应该结合MDN的三篇文章
- [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
- [XMLHttpRequestEventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestEventTarget)
- [EventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget)


```
 var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.baidu.com', true);
        // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencode');
        xhr.onerror = () => { };
        xhr.onloadstart = () => { }; // Http 请求开始加载数据时，调用
        xhr.onloadend = () => { }; // Http 内容加载完成后，调用
        xhr.onload = () => { };
        xhr.onprogress = (event) => {
            console.log('event.loaded', event.loaded);
            console.log('event.total', event.total);
        };
        xhr.send();
```



CORS 跨域资源共享标准
======================
coross-origin sharing standard


CORS 预检请求
---------------------


Http 请求首部字段
----------------------

Origin

Access-Control-Reqeust-Method

Access-Control-Request-Headers


Http 响应首部字段
---------------------
Access-Control-Allow-Origin

Access-Control-Expost-Headers

Access-Control-Max-Age

Access-Control-Allow-Credentials

Access-Tontrol-Allow-Methods

Access-Control-Allow-Headers


