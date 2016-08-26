# 基于 pipeline 的 tasking 方法 

 ## pipeline 画图规范要点  

* 用动词和小驼峰法命名函数 

 * 输入数据不能写到输出线上 

 * 每个对象要说明数据类型

  * 每个函数只处理一个功能 -- 便于分块和命名

  * 图中只需出现英文

  ## 常见动词  

|动词|解释| 
|--|--|
 |get|获取| 
|generate|创建 生成| 
|find|获取集合中的子集| 
|calculate|计算| 
|merge|merge| 
|split|拆分|
|is|是...| 
|has|拥有|

## Tasking 实例

![Tasking 图最终很棒的思路逻辑](http://ocimfi0gc.bkt.clouddn.com/Tasking%20%E5%9B%BE%E6%9C%80%E7%BB%88%E5%BE%88%E6%A3%92%E7%9A%84%E6%80%9D%E8%B7%AF%E9%80%BB%E8%BE%91.jpeg)