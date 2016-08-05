## JS 处理数组多种方法

### 数组元素的添加

arrayObj.push([item1 [item2 [. . . [itemN ]]]]);
将一个或多个新元素添加到数组结尾，并返回数组新长度

arrayObj.unshift([item1 [item2 [. . . [itemN ]]]]);
将一个或多个新元素添加到数组开始，数组中的元素自动后移，返回数组新长度

arrayObj.splice(insertPos,0,[item1[, item2[, . . . [,itemN]]]]);
将一个或多个新元素插入到数组的指定位置，插入位置的元素自动后移，返回""

### 数组元素的删除

arrayObj.pop();
移除最后一个元素并返回该元素值

arrayObj.shift();
移除最前一个元素并返回该元素值，数组中元素自动前移

arrayObj.splice(deletePos,deleteCount);
删除从指定位置deletePos开始的指定数量deleteCount的元素，数组形式返回所移除的元素

### 截取与合并

arrayObj.slice(start, [end]);
以数组的形式返回数组的一部分，注意不包括 end 对应的元素，如果省略 end 将复制 start 之后的所有元素

arrayObj.concat([item1[, item2[, . . . [,itemN]]]]); 
将多个数组（也可以是字符串，或者是数组和字符串的混合）连接为一个数组，返回连接好的新的数组

### 数组的拷贝

arrayObj.slice(0); 
返回数组的拷贝数组，注意是一个新的数组，不是指向

arrayObj.concat(); 
返回数组的拷贝数组，注意是一个新的数组，不是指向

### 数组元素的排序

arrayObj.reverse(); 
反转元素（最前的排到最后、最后的排到最前），返回数组地址

arrayObj.sort(); 
对数组元素排序，返回数组地址

### 常见的数组操作

生成

去重

统计个数


### 数组元素的字符串化

arrayObj.join(separator); 
返回字符串，这个字符串将数组的每一个元素值连接在一起，中间用 separator 隔开。
toLocaleString 、toString 、valueOf：可以看作是join的特殊用法，不常用

toSource()	返回该对象的源代码
toString()	把数组转换为字符串，并返回结果
toLocaleString()	把数组转换为本地数组，并返回结果
valueOf()	返回数组对象的原始值

### ES5 新增

Array.prototype.indexOf
  indexOf()方法返回在该数组中第一个找到的元素位置，如果它不存在则返回-1。
Array.prototype.lastIndexOf
Array.prototype.every
Array.prototype.some
Array.prototype.forEach
  forEach为每个元素执行对应的方法
Array.prototype.map
  map()对数组的每个元素进行一定操作（映射）后，会返回一个新的数组
  map()是处理服务器返回数据时是一个非常实用的函数
Array.prototype.filter
  该filter()方法创建一个新的匹配过滤条件的数组。
Array.prototype.reduce
  reduce()可以实现一个累加器的功能，将数组的每个值（从左到右）将其降低到一个值
  场景： 统计一个数组中有多少个不重复的单词
Array.prototype.reduceRight

## JS 的对象克隆

浅度克隆：原始类型为值传递，对象类型仍为引用传递。

深度克隆：所有元素或属性均完全复制，与原对象完全脱离，也就是说所有对于新对象的修改都不会反映到原对象中。

函数的克隆会在内存单独开辟一块空间，互不影响。

数组浅拷贝
```
var arr = ["One","Two","Three"];
var arrto = arr;
```

对象深拷贝
```
var deepCopy= function(source) { 
    var result={};
    for (var key in source) {
        result[key] = typeof source[key]===’object’? deepCoyp(source[key]): source[key];
    }
    return result; 
}
```

js 中的数据类型分为两大类：原始类型和对象类型。

原始类型包括：数值、字符串、布尔值、null、undefined
对象类型包括：对象即是属性的集合，当然这里又两个特殊的对象----函数（js中的一等对象）、数组（键值的有序集合）。
 
JS 原型链

## JS 中的多种循环方式

for i

for in

for of

assign
push
split
find
map
filter
reduce
JSON.stringify()、

## JS 高阶函数

高阶函数只是将函数作为参数或返回值的函数

### 回调函数

### 偏函数

### 0.0

http://www.cnblogs.com/dojo-lzz/p/4576083.html

## 待定

闭包

高阶函数

函数式编程

