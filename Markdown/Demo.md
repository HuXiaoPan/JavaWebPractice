# MarkdownDemo

## 标题和段落

一级标题
=
二级标题
-

### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
####### 没有七级标题

## 区块引用

>这是区块引用
区块引用的引用
区块引用
>>内的引用
>>>嵌套一下
>>>可以偷懒不写
>>>
>>嵌套爽不爽
>
>最顶层
>
>## 引用内的标题
>
>1. 引用内的有序列表
>2. item2
>

## 列表

* item1
* item2
* item3

+ 加号列表
    >列表内布引用要加缩进
    * 这个缩进
    * 也
        * 还能继续缩进
        * 四个空格就能缩进
        * 但是我咋爱用tab呢
    * 挺好

+ 加号列表

- 横线列表
- 横线列表
- 横线列表

## 代码区块

代码段落的例子：

    代码段落
        function(){};

## 分割线

下面展示分割线
***
再次召唤分割线
- - -

## 链接
我要建立一个[超链接](https://www.baidu.com/ "百度首页")，加title的

这是一个参考式的[链接][id]。

过了很多内容
***

[id]:http://www.baidu.com "这是百度的网址"

## 强调

*这是*加倾斜的字体

_这也是_
加倾斜的字体

## 代码
可以显示`代码 function(){}`了

```
var a = 1; 
var b = 2;
function add(a,b){
    return a+b;
}
add(a,b);
```
 A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``
## 图片
![示例图片](res/img.jpg "示例图片")
## 自动链接
<http:/www.baidu.com>
