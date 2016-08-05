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