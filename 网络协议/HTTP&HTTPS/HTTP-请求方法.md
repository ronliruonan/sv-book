# HTTP - 请求方法

**GET**

GET方法请求一个指定资源的表示形式. 使用GET的请求应该只被用于获取数据

| 描述                 | 值   |
| :------------------- | ---- |
| 请求是否有主体       | 否   |
| 成功的响应是否有主体 | 是   |
| 安全                 | 是   |
| 幂等                 | 是   |
| 可缓存               | 是   |
| HTML 表单是否支持    | 是   |



**HEAD**

HEAD方法请求一个与GET请求的响应相同的响应，但没有响应体

| 描述                 | 值   |
| :------------------- | ---- |
| 请求是否有正文       | 否   |
| 成功的响应是否有正文 | 否   |
| 安全                 | 是   |
| 幂等                 | 是   |
| 可缓存               | 是   |
| HTML 表单是否支持    | 否   |



**POST**

POST方法用于将实体提交到指定的资源，通常导致在服务器上的状态变化或副作用

| 描述                 | 值     |
| :------------------- | ------ |
| 请求是否有主体       | 是     |
| 成功的响应是否有主体 | 是     |
| 安全                 | 否     |
| 幂等                 | 否     |
| 可缓存               | 可以有 |
| HTML 表单是否支持    | 是     |



**PUT**

PUT方法用请求有效载荷替换目标资源的所有当前表示

| 描述                 | 值   |
| :------------------- | ---- |
| 请求是否有主体       | 是   |
| 成功的响应是否有主体 | 否   |
| 安全                 | 否   |
| 幂等                 | 是   |
| 可缓存               | 否   |
| HTML 表单是否支持    | 否   |



**DELETE**

DELETE方法删除指定的资源

| 描述                 | 值     |
| :------------------- | ------ |
| 请求是否有主体       | 可以有 |
| 成功的响应是否有主体 | 可以有 |
| 安全                 | 否     |
| 幂等                 | 是     |
| 可缓存               | 否     |
| HTML 表单是否支持    | 否     |



**CONNECT**

CONNECT方法建立一个到由目标资源标识的服务器的隧道

| 描述                 | 值   |
| :------------------- | ---- |
| 请求是否有主体       | 否   |
| 成功的响应是否有主体 | 是   |
| 安全                 | 否   |
| 幂等                 | 否   |
| 可缓存               | 否   |
| HTML 表单是否支持    | 否   |



**OPTIONS**

OPTIONS方法用于描述目标资源的通信选项

| 描述                 | 值   |
| :------------------- | ---- |
| 请求是否有主体       | 否   |
| 成功的响应是否有主体 | 否   |
| 安全                 | 是   |
| 幂等                 | 是   |
| 可缓存               | 否   |
| HTML 表单是否支持    | 否   |



**TRACE**

TRACE方法沿着到目标资源的路径执行一个消息环回测试****

| 描述                 | 值   |
| :------------------- | ---- |
| 请求是否有主体       | 否   |
| 成功的响应是否有主体 | 否   |
| 安全                 | 否   |
| 幂等                 | 是   |
| 可缓存               | 否   |
| HTML 表单是否支持    | 否   |



**PATCH**

PATCH方法用于对资源应用部分修改

| 描述                 | 值   |
| :------------------- | ---- |
| 请求是否有主体       | 是   |
| 成功的响应是否有主体 | 否   |
| 安全                 | 否   |
| 幂等                 | 否   |
| 可缓存               | 否   |
| HTML 表单是否支持    | 否   |