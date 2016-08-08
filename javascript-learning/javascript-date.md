/**
 * Created by hanyile on 16/8/9.
 */

ECMAScript中的Date类型是在早期 Java 中的 Java.unile.Date 类基础上构建的。为此 Date 类型使用自 UTC (Coordinated Universal Time, 国际协调时间)1970年1月1日午夜开始经过的毫秒数来保存日期。

在这种数据存储格式下, Date 类型保存的日期能够精确到1970年1月1日之前或之后的285616年

Date.parse(string)
接受一个表示日期的字符串参数,然后尝试根据这个字符串返回相应日期的毫秒数,不能转换则返回 NaN

Date.UTC(year, month[, day, hour, min, second, millisecond])
根据参数返回相应日期的毫秒数,只有前两个参数是必须的,省略其它参数则统统假设为0

Date.now()
返回表示调用这个方法时的日期和时间的毫秒数

## 继承的方法

Date.toLocalString()
按照与浏览器设置的地区相适应的格式返回日期和时间,具体格式会因浏览器而异

Date.toString()
通常返回带有时区信息的日期和时间,其中时间一般以军用时间(即小时的范围是0-23)表示,具体格式会因浏览器而异

Date.valueOf()
返回日期的毫秒表示,可以用来比较日期值

## 日期格式化的方法

Date.toDateString()
以特定于实现的格式显示星期几、月、日和年

Date.toTIMEstring()
以特定于实现的格式显示时、分、秒和时区

Date.toLocaDateString()
以特定于地区的格式显示星期几、月、日和年

Date.toLocaTimeString()
以特定于实现的格式显示时、分、秒

Date.toUTCString()
以特定于实现的格式完整的 UTC 日期

## 日期/时间组件方法

以下都是直接取得和设置日期值中特定部分的方法

getTime()
返回表示日期的毫秒数,与valueOf()方法返回的值相同

setTime(毫秒)
以毫秒数设置日期,会改变整个日期

getFullYear()
取得4位数的年份(如2007而非仅07)

getUTCFullYear(年)
返回UTC日期的4位数年份

setFullYear(年)
设置日期的年份。传入的年份值必须是4位数字(如2007而非仅07)

setUTCFullYear(年)
设置UTC日期的年份。传入的年份值必须是4位数字(如2007而非仅07)

getMonth()
返回日期中的月份,其中0表示一月,11表示十二月

getUTCMonth()
返回UTC日期中的月份,其中0表示一月,11表示十二月

setMonth(月)
设置日期的月份,其中0表示一月,11表示十二月

setUTCMonth(月)
设置UTC日期的月份,其中0表示一月,11表示十二月

getDate()
返回日期月份中的天数(1到31)

getUTCDate()
返回UTC日期月份中的天数(1到31)

setDate(日)
设置日期月份中的天数。如果传入的值超过了该月中应有的天数,则增加月份

setUTCDate(日)
设置UTC日期月份中的天数。如果传入的值超过了该月中应有的天数,则增加月份

getDay()
返回日期中星期的星期几(其中0表示星期日,6表示星期6)

getUTCDay()
返回UTC日期中星期的星期几(其中0表示星期日,6表示星期6)

getHours()
返回日期中的小时数(0到23)

getUTCHours()
返回UTC日期中的小时数(0到23)

setHours(时)
设置日期中的小时数。传入的值超过了23则增加月份中的天数

setUTCHours(时)
设置UTC日期中的小时数。传入的值超过了23则增加月份中的天数

getMinutes()
返回日期中的分钟数(0到59)

getUTCMinutes()
返回UTC日期中的分钟数(0到59)

setMinutes(分)
设置日期中的分钟数。传入的值超过59则增加小时数

setUTCMinutes(分)
设置UTC日期中的分钟数。传入的值超过59则增加小时数

getSeconds()
返回日期中的秒数(0到59)

getUTCSeconds()
返回UTC日期中的秒数(0到59)

setSeconds(秒)
设置日期中的秒数。传入的值超过59则增加分钟数

setUTCSeconds(秒)
设置UTC日期中的秒数。传入的值超过59则增加分钟数

getMilliseconds()
返回日期中的毫秒数

getUTCMilliseconds()
返回UTC日期中的毫秒数

setMilliseconds(毫秒)
设置日期中的毫秒数

setUTCMilliseconds(毫秒)
设置UTC日期中的毫秒数

getTimezoneOffset()
返回本地时间与UTC时间相差的分钟数