# PM2 Runtime 命名ing
暂时仅用于Node项目部署 .

直接启动一个js文件
------------------
```
$ pm2 start main.js --name crawler
```

### 优点
1. 持久化：pm2 对于在崩溃和机器重启时自启动
2. 软负载：pm2 通过创建多个共享相同服务器端口的子进程来扩展应用，可以在停机时间为0的情况下重启应用
3. 终端内监控：检查应用的运行状况，例如：cpu使用情况，内存使用...
4. 管理多个进程：使用pm2的进程列表，可以轻松启动、重启和停止应用
5. 生态系统文件：好东西？
6. 官方中文手册:  https://pm2.io/doc/zh/runtime/overview/

### ::
1. ```pm2 list <app 可选>/<pid 可选>``` 查看进程列表，默认为all
2. ```pm2 monit <app 可选>/<pid 可选>``` 查看监控，默认为all
3. ```pm2 reload <app 可选>/<pid 可选>``` 重新加载（不发生宕机）
4. ```pm2 restart <app>/<pid>``` 重启（短暂宕机）pm2 
5. ```pm2 start npm --name <name>(自定义应用名称) -i <0 - max>(开启群集) -- run start(执行脚本)```，
6. 基于第5步骤后，执行```pm2 save``` 可以将上面的自定义执行命令保存下来，以后可以使用name进行操作
7. ```pm2 delete <app>/<pid>``` 终止应用，并删除第6步骤的save信息
8. ```pm2 flush``` 清空所有应用日志

生态系统文件
===============
```
module.exports = {
  apps : [{
    name: "app",
    script: "./app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
```
使用生态文件
---------------
```
 pm2 restart ecosystem.config.js --only app
```

使用```pm2 start app --env production``在运行模式下启动您的应用。


条目名称|描述|类型|默认
---|---|---|---
script|要启动的脚本路径，必填字段|string|
name|进程列表中的进程名称|string|没有扩展名的脚本文件名（app.js的应用）
cwd|当前工作目录以启动进程|string|当前环境的CWD（来自您的shell）
args|传递给脚本的参数|array,string|
interpreter|解释器绝对路径|string|node
node_args|参与传递给解释器|array,string|
output|studout的文件路径（每行都附加到该文件中）|string|~/.pm2/logs/<app_name>-out.log
error|stderr的文件路径（每行都附加到此文件中）|string|~/.pm2/logs/<app_name>-error.err
log|组合stdout和stderr的文件路径（每行都附加到此文件中)|boolean,string|/dev/null
disable_logs|禁用所有日志存储|boolean|
log_type|定义一个特定的日志输出类型，可能的值为：json|string|
log_date_format|日志时间戳的格式，采用moment.js格式（例如YYYY-MM-DD HH：mm Z）|string|
env|指定要注入的环境变量|object,string|
^env_\S*$|指定使用--env <env_name>时要注入的环境变量|object,string|
max_memory_restart|如果超出内存量，重新启动应用（格式：/ [0-9](K&#124;M&#124;G)?/ K for KB, 'M' for MB, 'G' for GB, 默认为B）|string,number|
pid_file|pm2写入已启动进程的pid的文件路径|string|~/.pm2/pids/app_name-id.pid
restart_delay|在重启崩溃应用前，需要等待毫秒|number|
source_map_support|启用或禁用源映射支持|boolean|true
disable_source_map_support|启用或禁用源映射支持|boolean|
wait_ready|让进程等待process.send（'ready'）|boolean|
instances|在群集模式下启动的实例数|number|1
kill_timeout|在SIGINT之后发送最终的SIGKILL信号之前，以ms为单位等待|number|1600
listen_timeout|时间以毫秒为单位，如果应用仍未收听/仍然无发送准备就绪，则强制重载|number|
cron_restart|一个cron模式来重启您的应用|string|
merge_logs|在群集模式下，将每种类型的日志合并到一个文件中（而不是每个群集都单独一个）|boolean|
vizion|启用或禁用版本控制元数据（vizion库）|boolean|true
autorestart|进程失败后启用或禁用自重启|boolean|true
watch|启用或禁用观察模式|boolean,array,string|
ignore_watch|要忽略的路径列表（正则表达式）|array,string|
watch_options|用作chokidar选项的对象（请参阅chokidar文档）|object|
min_uptime|考虑应用启动的最小正常运行时间（格式为/[0-9]+(h&#124;m&#124;s)?/, 小时，分钟，秒，默认为毫秒）|number,string|1000
max_restarts|脚本存在小于最小运行时间时退出的次数|number|16
exec_mode|设置执行模式，可能的值为：fork&#124;群集| cluster|string|fork
force|即使脚本已经运行，也要将其启动（只考虑脚本路径）|boolean|
append_env_to_name|将环境名称附加到应用名称|boolean|
post_update|在从Keymetrics仪表板执行提取/升级操作之后执行的命令列表|array|
trace|启用或禁用事务跟踪|boolean|
disable_trace|启用或禁用事务跟踪|boolean|true
increment_var|指定环境变量的名称以注入每个群集的增量|string|
instance_var|重命名NODE_APP_INSTANCE环境变量|string|NODE_APP_INSTANCE
pmx|启用或禁用pmx包装|boolean|true
automation|启用或禁用pmx包装|boolean|true
treekill|只kill主进程，不分离子进程|boolean|true
port|注入PORT环境变量的快捷方式|number|
uid|设置用户ID|string|当前用户uid
gid|设置群组ID|string|当前用户uid
