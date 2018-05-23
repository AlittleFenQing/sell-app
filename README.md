# sell-app
## Vue.js 高仿饿了么外卖 App
###  项目组成：
#### 商品页：<br/> 
##### 布局：<br> 
* flex左右布局，左侧为商品菜单，右侧是商品展示，基于一个tab选项卡结构。
##### 数据：<br>
* 请求方式：GET<br>
* 请求地址：http://ustbhuangyi.com/sell/api/goods<br/>
* 数据参数：<br/>
    `'{`'<br/>
      `'"name": "热销榜",`'<br/>
     `' "type": -1,`'<br/>
     `' "foods": [`'<br/>
        `'{`'<br/>
          `'"name": "皮蛋瘦肉粥",`'<br/>
         `' "price": 10,`'<br/>
          `'"oldPrice": "",`'<br/>
          `'"description": "咸粥",`'<br/>
          `'"sellCount": 229,`'<br/>
          `'"rating": 100,<br>`'<br/>
      `'}`'<br/> 
    `']`'<br/> 
 `'}`'<br/> 
#### 评论页：
##### 布局：<br> 
* 上下布局：
  * 上：包含综合评分、服务态度、商品评分等星级评价。<br/>
  * 下：顾客的所有评价，分别为全部、满意、不满意。<br/>
##### 数据：<br>
* 请求方式：GET<br>
* 请求地址：http://ustbhuangyi.com/sell/api/ratings<br/>
* 数据参数：<br/>
    `'{`'<br/>
      `'"username": "3******c",`'<br/>
     `' "rateTime": 1469281964000,`'<br/>
     `' "foods": [`'<br/>
        `'{`'<br/>
          `'"rateType": " 0",`'<br/>
         `' "price": 10,`'<br/>
          `'"oldPrice": "",`'<br/>
          `'"text": "",`'<br/>
          `'"sellCount": 229,`'<br/>
          `'"rating": 100,<br>`'<br/>
      `'}`'<br/> 
    `']`'<br/> 
 `'}`'<br/> 
#### 商家页：
##### 布局：<br> 
* 上下布局：
  * 上：包含综合评分、服务态度、商品评分、商家收藏等星级评价。<br/>
  * 下：公告活动、商家实景、商家信息。<br/>
##### 数据：<br>
* 请求方式：GET<br>
* 请求地址：http://ustbhuangyi.com/sell/api/ratings<br/>
* 数据参数：<br/>
    `'{`'<br/>
      `'"username": "3******c",`'<br/>
     `' "rateTime": 1469281964000,`'<br/>
     `' "foods": [`'<br/>
        `'{`'<br/>
          `'"rateType": " 0",`'<br/>
         `' "price": 10,`'<br/>
          `'"oldPrice": "",`'<br/>
          `'"text": "",`'<br/>
          `'"sellCount": 229,`'<br/>
          `'"rating": 100,<br>`'<br/>
      `'}`'<br/> 
    `']`'<br/> 
 `'}`'<br/> 

