# Centos
默认是6.8版本，7.x 会额外标注

1. alias 别名

取个别名就直接用了，就像“赵四”比“尼古拉斯赵四”拼写更容易些
```
$ cd 
$ vi .bashrc
$ alias pip3='/usr/local/python35/bin/pip3'
$ :wq
$ source .bashrc
```
2. 查看系统内存、磁盘等情况
内存使用
```
$ free -m
```
磁盘使用
```
df -h
```
3. 开启mongodb 27017默认端口
```
$ vi /etc/sysconfig/iptables
$ # 添加如下
$ -A INPUT -p tcp -m state --state NEW -m tcp --dport 27017 -j ACCEPT
$ # save & exit & restart iptables
$ /etc/init.d/iptables restart

```
http://192.168.1.90:27017/ 这样试一下就可以知道端口和mongodb是否好使了
感谢 博主http://www.pianshen.com/article/648772922/