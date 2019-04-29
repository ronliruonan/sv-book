mongd --config ...
mongo

use alibaba
db.users.save({alias:110}) 修改和新增
db.users.insert   直接插入


db.users.find()
db.users.find({age:12})
db.users.count()
db.users.find({age:12}).count()
db.users.find().sort({age:-1}).pretty()

1. download mongodb 
2. tar & mv
3. mongodb.config
4. show dbs
5. ps -ef | grep mongo & kill  ：notes：do not use `kill -9`

6. 修改权限  https://jingyan.baidu.com/article/d169e18609d989436611d82e.html

7. 设置用户名密码登录
