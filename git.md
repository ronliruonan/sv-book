git 合并分支
-------------
```
$ git checkout master
$ git merge branch-name
```

git 删除分支
------------
1. 删除远程分支
```
$ git push origin :branch-name
```
2. 删除本地分支
```
$ git branch -D branch-name
```
git ssh
-----------
这个帖子极好的 感谢 https://www.cnblogs.com/popfisher/p/5731232.html
这儿有一问题:
就是git bash 每次执行命令都需要输入一次密码有点蛋疼;
针对vscode，直接无权访问呢

基于上面的帖子，学会了如何去生成ssh和配置ssh，那么下面这个帖子的重点在于 搞定那个蛋疼的问题。
https://blog.csdn.net/wzwdcld/article/details/80782561
感谢上面的帖子，Point在于生成ssh文件的步骤中，有一步不要去录入密码就ok了。


git 提交
-----------
```
$ git add .
$ git commit
```

