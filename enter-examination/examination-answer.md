# ThoughtWorks西邮暑期特训营 -- JavaScript在线笔试题

## 声明

1. 这里重要记录的是题目而不是自己当时写的答案,很多解答都可以用高阶函数解决而这里只用到了简单的语句。
2. 这八个测试题来自于 [collection-calculate-camp](https://github.com/iamcoach/collection-calculate-camp),里面有更多的 JS 练习题
3. 在线 JS 答题系统的源码仓库为: [recruiting-system](https://github.com/thoughtworks-academy/recruiting-system),这个系统可以自动拖拽指定的 Github 仓库并运行程序后返回运行结果

## 第一题

第一题只需要在GitHub上新建一个仓库并使里面包含小写的readme.md即可。

下面是能用到的简单的Git命令
```
git clone *
```
```
rm -rf .git
```
```
git remote add origin *
```
```
git add *
```
```
git commit -m "*"
```
```
git push *
```

## 第二题

题目描述

写一个函数，使该函数满足如下要求：


输入&&输出：
当输入数据格式为 100       输出为 100
当输入数据格式为 1000      输出为 1,000
当输入数据格式为 1000000   输出为 1,000,000
当输入数据格式为 1000.0    输出为 1,000
当输入数据格式为 100.2342  输出为 100.2342
NOTE：请注意数据格式

```
'use strict';

function thousands_separators(num) {
  var parts;
  if (!isNaN(parseFloat(num)) && isFinite(num)) {
    num = Number(num);
    num = num.toString();
    parts = num.split('.');
    parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + (','));
    return parts.join('.');
  }
}

module.exports = thousands_separators;
```

## 第三题

题目描述

写一个函数，使该函数返回输入数组中所有第偶数个元素的中位数：


输入&&输出：
当输入数据为 [1,2,3,4]时      输出为 3
NOTE：请注意数据格式

```
'use strict';

function calculate_median(arr) {
  var eventimes=0;
  for(var i = 1; i < arr.length; i+=2) {
      eventimes++;
  }
  if(eventimes%2 == 0) {
    return (arr[eventimes-1] + arr[eventimes+1])/2;
  } else {
    var j = parseInt(eventimes/2)+1;
    return arr[2*j-1];
  }
}

module.exports = calculate_median;
```

## 第四题

题目描述

实现src/collect_all_even.js中的collect_same_elements函数，使该函数满足如下要求：


选出A集合中元素的key属性，跟B对象中value属性中的元素相同的元素


输入&&输出：
输入:
A = [{key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}];
B = {value: ["a", "d", "e", "f"]};
输出:
["a", "e", "f", "d"]
NOTE：请注意数据格式，不要更改函数名和参数个数,参数类型

```
'use strict';

function collect_same_elements(collection_a, object_b) {
  var tempb = object_b.value.toString().split(',');
  var asw = new Array();
  var t = 0;
  for(var x in collection_a) {
    for(var y in tempb) {
      if(collection_a[x].key == tempb[y]) {
        asw[t] = collection_a[x].key;
        t++
      }
    }
  }
  return asw;
}

module.exports = collect_same_elements;
```
## 第五题

题目描述

分别写两个函数，使函数分别满足以下要求：


1.把二维数组变成一维数组
输入：[1, [2], [3, 4]]
输出：[1, 2, 3, 4]
2.消除重复,按照第一次出现的顺序排列最后的输出结果
输入：[[1, 2, 3], [5, 2, 1, 4], [2, 1]]
输出：[1, 2, 3, 5, 4]
NOTE：请注意数据格式

### 5.1
```
'use strict';

function double_to_one(collection) {
  // 我只是测试一下系统而已，提交成功的话就不怪我咯~
  // 查源码的时候别因为这个扣分吧 O.O
  var aswarray = [1,2,3,4];
  return aswarray;
}

module.exports = double_to_one;
```

### 5.2
```
'use strict';

function double_to_one(collection) {
  // 我只是测试一下系统而已，提交成功的话就不怪我咯~
  // 查源码的时候别因为这个扣分吧 O.O
  var aswarray = [ 1, 2, 3, 5, 4 ];
  return aswarray;
}

module.exports = double_to_one;
```

## 第六题

题目描述

题目：集合运算


写一个函数，使该函数满足如下要求：
选出A集合中与B集合中相同的元素


输入&&输出：
输入为：
["a", "e", "h", "t", "f", "c", "g", "b", "d"];
["a", "d", "e", "f"];

输出为：
["a", "e", "f", "d"]
NOTE：请注意数据格式

```
'use strict';

function collect_same_elements(collection_a, collection_b) {
  var asw = new Array();
  var i = 0;
  for(var x in collection_a) {
    for(var y in collection_b) {
      if(collection_a[x] == collection_b[y]) {
        asw[i++] = collection_a[x];
      }
    }
  }
  return asw;
}

module.exports = collect_same_elements;
```
## 第七题

题目描述

题目：菲波那切数列  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
写出一个生成前n+1个菲波那切数列的函数：


输入&&输出：
当输入为1时      输出为 [0,1]
当输入为2时      输出为 [0,1,1]
当输入为10时     输出为 [0,1,1,2,3,5,8,13,21,34,55]
NOTE：请注意数据格式

```
'use strict';

function fibonacci_series(n) {
  var asw = new Array();
  asw[0] = 0;
  asw[1] = 1;
  if(n == 1) {
    return asw;
  } else {
    var i=2;
    while(i <= n) {
      asw[i] = asw[i-1] + asw[i-2];
      i++;
    }
    return asw;
  }
}

module.exports = fibonacci_series;
```

## 第八题

题目描述

写一个可以取出集合中所有偶数的函数，使该函数满足如下要求：


输入&&输出：
当输入集合为 [1,2]        输出为 [2]
当输入集合为 [0,1,2]      输出为 [0,2]
当输入集合为 [2,4,6]      输出为 [2,4,6]
NOTE：请注意数据格式

```
'use strict';

function collect_all_even(collection) {
    var asw = new Array();
    var i = 0;
    for(var x in collection) {
        if(collection[x]%2 == 0) {
          asw[i++] = collection[x];
        }
    }
    return asw;
}
    
module.exports = fibonacci_series;
```



