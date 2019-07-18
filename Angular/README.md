#  Angular

## 生命周期
- ngOnChange
- ngOnInit

## 双向绑定原理
脏数据检查

## 采用依赖注释模式
```
@Component({
    templateUrl: 'app.html',
    providers: [DatePipe]
})
```
## 内置管道
`DatePipe`, ` PercentPip`, `JSON`
```
{{ birthday | date:"MM/dd/yy" }}
```

## rxjs的函数式编程

## 绑定
- (click)="handler"
- *ngIf, *ngFor


## WRS
- 订阅发布模式，完成平行组件信息传递

### 封装pageService（增删改查）
-  ajax基类封装、内携Authorization
### 页面pageComponent（增删改查、分页）
-  onBeforeLoadItem()
-  onAfterLoadItem()
-  装在Dics字典值
-  页面参数解析
### config
-  clientConfig
  -  client_id
  -  client_name
-  ServerConfig
   -  单点url
   -  接口url

## WRS
```
 <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="format-detection" content="telephone=no">
  <meta name="msapplication-tap-highlight" content="no">
  ```

## PAS
-  路由传参
-  构造函数依赖注入（依赖倒置原则）
-  `<ngContainer>`
-  `(ngModelChange)`, `[(ngModel)]`
-  图片列表页卡顿


# Webpack优化打包
-  