# Centos6.8 命令ing

1. alias 

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