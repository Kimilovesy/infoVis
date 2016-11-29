## InfoVis  

HTML - `index.html`   

CSS - `/css/style.css`  

Javascript - `/js/javascript.js`  

data - `/data` 目录里包括两个文件，`football-raw.json`是要用到的数据，`label description.txt`是json文件里标签的说明  



y = 延误

x ＝ 机场位置， 航空公司

地图上显示机场位置

机场 － 月份

航空公司 － 年份

1. 机场－延误率（地图）（1） 根据月份（2） 根据年份
2. 航空公司－延误率 （1）
3. 航空公司－因为计划延误时间

{"flights":  

​	{"cancelled": 5, 

​	"on time": 561, 

​	"total": 752, 

​	"delayed": 186, 

​	"diverted": 0}, 

"# of delays": { 各种原因延误班数

​	"weather": 28, 

​	"late aircraft": 18, 

​	"security": 2, 

​	"carrier": 34, 

​	"national aviation system": 105}, 

"minutes delayed": { 各种原因延误时间（分钟）

​	"late aircraft": 1269, 

​	"weather": 1722, 

​	"carrier": 1367, 

​	"security": 139, 

​	"total": 8314, 

​	"national aviation system": 3817}}, 

"airport": { 机场

​	"code": "ATL", 

​	"name": "Atlanta, GA: Hartsfield-Jackson Atlanta International"}, 

"carrier": { 航空公司

​	"code": "AA", 

​	"name": "American Airlines Inc."}, 

"time": { 月份

​	"month": 6, 

​	"label": "2003/6", 

​	"year": 2003}