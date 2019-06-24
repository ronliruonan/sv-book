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