[TOC]

# jQuery 概述

## 1 JavaScript 库

> **JavaScript定义库**：即library，是一个封装好的特定的集合，（函数和方法）。从封装一大堆函数的角度理解库，即是这个库中，封装好了很多预先 定义好的函数在里面。
>
> 简单理解：就是JS文件，里面对我们的原生js代码进行了封装，存放到里面，这样我们就可以快速高效的使用这些封装好的功能。
>
> 常见的JavaScript库
>
> > - jQuery
> >
> > - Prototype
> >
> > - YUI
> >
> > - Dojo
> >
> > - Ext JS
> 
> 这些库都是对原生JavaScript的封装，**内部都是用JavaScript实现的**，我们主要学习的是**jQuery**。

## 2 jQuery 的概述

> jQuery是哟个快速、简洁的JavaScript库，其设计宗旨是“write Less,DoMore”，即倡导写最少的代码，做更多的事。
>
> j即JavaScript；Query 查询；查询js，把js中的DOM操作做了封装， 乐意快速的查询使用里面的功能。
>
> **jQuery封装了JavaScript常用的功能代码**，优化了DOM操作、事件处理，动画设计和Ajax交互。
>
> **学习jQuery的本质：学习调用这些函数（方法）**
>
> **jQuery出现的目的加快前端人员的开发速度，我们可以非常方便的调用和使用它**，从而提高开发效率。
> 
> >- 轻量级。核心文件很小，不会影响页面加载速度
> >- 跨浏览器兼容，基本兼容了现在主流的浏览器
> >- 链式编程，隐式迭代
> >- 对事件、样式、动画支持，大大简化了DOM操作
> >- 支持插件扩展开发，有着丰富的第三方插件
> >- 免费、开源

# jQuery 的基本使用

## 1 jQuery 的下载

jQuery官网：https://jquery.com

jQuery引入连接：https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js

## 2 jQuery 的使用步骤

>引入jQuery文件
>
>```javascript
><script src="https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js"> </script>
>```

## 3 jQuery 的入口函数

> ```javascript
> $(function(){
> 	// 此处是页面DOM加载完成的入口
> });
> ```
>
> ```javascript
> $(document).ready(function() {
> // 此处是页面DOM加载完成的入口
> });
> ```
>
> 1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载成，jQuery帮我们完成了封装。
> 2. 相当于原生的 JS 中的DOMContentLoaded
> 3. 不同于原生 js 中的 load 事件是等页面文档、外部的 js 文件、css 文件、图片加载完毕才执行内部代码

## 4 jQuery 的顶级对象 $

> 1. ##### $ 是jQuery的别称，在代码中可以使用 jQuery 代替 $ ，但为了方便，通常直接用 $ 。
>
> >```JavaScript
> $(document).ready(function() {
> 		alert('11');
> });
> >```
> >```JavaScript
> jQuery(document).ready(function() {
> 		alert('11');
> });
> >```
> 2.  ##### $ 是 jQuery 的顶级对象，相当于原生的 JavaScript 中的window。把元素利用 $ 包装成 jQuery 对象，即可以调用jQuery的方法。
>

## 5 jQuery 对象和 DOM 对象

> 1. ##### 用原生 JS 获取来的对象就是 DOM 对象
> ```JavaScript
> var myDiv = document.getElementById('div');
> ```
> 2. ##### jQuery方法获取的元素就是 jQuery 对象
> ```JavaScript
> $('div');
> ```
> 3. ##### jQuery 对象本质是：利用 $ 对DOM 对象包装后产生的对象（伪数组形式存储）。
> ```JavaScript
> myDiv.style.display = 'none';
> ```
> > ```JavaScript
> > $('a').style.display = 'none'; // 错误的
> > ```
>
> **DOM 对象与jJQuery 对象之间是可以互相转换的。**
>
> > 因为原生 js 比 jQuery更大，原生的一些属性和方法 jQuery 没有给我们封装，要想使用这些属性和方法需要把 jQuery 对象转换为 DOM 对象才行
> >
> > 1. DOM 对象转换为 jQuery ：$(DOM对象)
> >
> > >```JavaScript
> > >// (1) 直接获取视频，得到的就是 jQuery 对象
> > >$('div');
> > >// (2) 我们已经使用原生 js 获取过来的 DOM对象
> > >var mydiv = document.getElementsByTagName('div')[0];
> > >// 转换方法
> > >$(mydiv);
> > >```
> >
> > 2. jQuery 对象转化为 DOM 对象 （两种方式）
> > >```javascript
> > >// 第一种
> > >$('div')[index] // index 是索引号
> > >// 第二种
> > >$('div').get(index) // index 是索引号
> > >```

------

------

# jQuery 常用 API

>- **jQuery 选择器**
>- **jQuery 样式操作**
>- **jQuery 效果**
>- **jQuery 属性操作**
>- **jQuery 文本属性值**
>- **jQuery 元素操作**
>- **jQuery 尺寸，位置操作**

## 1. jQuery 选择器

### 1.1 jQuery 基础选择器

> 原生的 js 获取元素的方式很多，很杂，而且兼容性情况不一样，因此 jQuery 给我们做了封装，使获取元素的方式统一标准。
> ```JavaScript
> $('选择器') // 里面直接写CSS选择器即可，但要加引号，单 双都行
> ```

|  **名称**  |     **用法**      |         **描述**         |
| :--------: | :---------------: | :----------------------: |
|  ID选择器  |    `$('#id')`     |     获取指定ID的元素     |
| 全选选择器 |     `$('*')`      |       匹配所有元素       |
|  类选择器  |   `$('.class')`   |  获取同一类class的元素   |
| 标签选择器 |    `$('div')`     | 获取同一类标签的所有元素 |
| 并集选择器 |  `$('div,p,li')`  |       选取多个元素       |
| 交集选择器 | `$('li.current')` |         交集元素         |

### 1.2 jQuery 层级选择器

|  **名称**  |   **用法**   |                       **描述**                       |
| :--------: | :----------: | :--------------------------------------------------: |
| 子代选择器 | `$('ul>li')` | 使用 >，获取亲儿子层级的元素，不会获取孙子层级的元素 |
| 后代选择器 | `$('ul li')` |  使用空格，表示后代选择器，获取 ul 下所有的 li 元素  |

### 1.3 隐式迭代

> 遍历内部 DOM 元素（伪数组形式存储） 的过程就叫做**隐式迭代**。
>
> 简单理解：给匹配到的所有元素进项循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们使用

```javascript
$('div').css('backgrpund', 'red');
// 获取所有的 div
// 重复添加红色背景
```

### 1.4 jQuery 筛选选择器

|   **语法**   |    **用法**     |                          **描述**                          |
| :----------: | :-------------: | :--------------------------------------------------------: |
|   `:first`   | `$('li:first')` |                     获取第一个 li 元素                     |
|   `:last`    | `$('li:last')`  |                    获取最后一个 li 元素                    |
| `:eq(index)` | `$('li:eq(2)')` | 获取到的 li元 素中，选择索引号为 2 的元素（索引号从0开始） |
|    `:odd`    |  `$('li:odd')`  |         获取到的 li 元素中，选择索引号为奇数的元素         |
|   `:even`    | `$('li:even')`  |         获取到的 li 元素中，选择索引号为偶数的元素         |

### 1.5 jQuery 筛选方法（重点）



|       **语法**       |             **用法**             |                       **说明**                        |
| :------------------: | :------------------------------: | :---------------------------------------------------: |
|      `parent()`      |        `$("li").parent()`        |                       查找父级                        |
| `children(selector)` |     `$("ul").children("li")`     |             相当于`$('ul>li')`，最近一级              |
|   `find(selector)`   |       `$("ul").find("li")`       |            相当于`$('ul li')`，后代选择器             |
| `siblings(selector)` |    `$(".first").siblings(li)`    |             查找兄弟节点，不包括自己本身              |
|  `nextAll([expr])`   |       `$(".first")nextAll`       |              查找当前元素之后的同辈元素               |
|  `prevtAll([expr])`  |      `$(".first").prevtAll`      |             查找 当前元素之前所有同辈元素             |
|  `hasClass(class)`   | `$("div").hasClass("protected")` | 检查当前的元素是否含有某个特定的类，如果有就返回 true |
|     `eq(index)`      |         `$("li").eq(2)`          |         相当于`$('li:eq(2)')`，index 从0开始          |

### 1.6 jQuery 里面的排他思想

> 想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟元素清除样式。
>
> > ```html
> > <!-- HTML -->
> > <button>快速</button>
> > <button>快速</button>
> > <button>快速</button>
> > <button>快速</button>
> > <button>快速</button>
> > <button>快速</button>
> > <button>快速</button>
> > ```
> >
> > ```javascript
> > $(function() {
> > 	 // 隐式迭代 给所有的按钮绑定点击事件
> > 	$('button').click(function() {
> > 		// 当前的元素变化背景颜色
> > 		$(this).css('background', 'red');
> > 		// 其余的兄弟去表背景元素
> > 		$(this).siblings('button').css('background', '');
> > 	});
> > })
> > ```

## 2. jQuery 样式操作

### 2.1 操作 css 方法

> jQuery 可以使用 css 方法来修改简单的样式；也可以操作类，修改多个样式。
>
> 1. ##### 参数只写属性名，则是返回属性值
>
> > ```javascript
> > $(this).css('color');
> > ```
>
> 2. 参数是**属性名，属性值，都好分隔**，是设置一组样式，属性必须加引号，值如果是数字可以不加引号和单位
> > ```javascript
> > $(this).css('color', 'red');
> > ```
> 3. ##### 参数可以是对象的形式，方便设置多组样式，属性名和属性值用冒号隔开，属性可以不用加引号
> > ```javascript
> > $(this).css({
> >     'color':'red',
> >     'font-size':'20px'
> > });
> > // 不用加引号
> > $(this).css({
> >     color:'red',
> >     font-size:'20px';
> >     backgroundColor:'green',
> >     // 如果是复合属性，要用驼峰命名
> >     // 如果值不是数字 则需要加引号
> > });
> > ```

### 2.2 设置类样式方法 

> 作用等同于 classList，可以操作类样式，**注意操作类里面的参数不要加点**。
>
> 1. ##### 添加类`addClass()`
> > ```javascript
> > $(this).addClass('current');
> > ```
> 2. ##### 删除类`removeClass()`
> >```javascript
> >$(this).removeClass('current');
> >```
> 3. ##### 切换类`toggleClass()`
> > ```javascript
> > $(this).toggleClass('current');
> > // 有则去 无则加
> > ```

### 2.3 类操作与 className 区别

>原生 js 中 className 会覆盖元素原先里面的类名。
>
>jQuery 里面类操作只是对指定类进行操作，不影响原先的类名
>
>```javascript
>// addClass() 相当于追加
>// removeClass() 指定删除
>```
>

## 3. jQuery 效果

> jQuery 给我们封装了很多动画效果，最为常见：
>
> > 1. ##### 显示隐藏
> >
> > > ```javascript
> > > show()
> > > hide()
> > > toggle()
> > > ```
> >
> > 2. ##### 滑动
> > 
> > >```javascript
> > >slideDown()
> > >slideUp()
> > >SlideToffle()
> > >```
> > 
> > 3. ##### 淡入淡出
> > 
> > >```javascript
> > >fadeIn()
> > >fadeOut()
> > >fadeToggle()
> > >fadeTo()
> > >```
> > 
> > 4. ##### 自定义
> > 
> > >```javascript
> > >animate()
> > >```

### 3.1 显示效果

> 1. ##### 显示语法规范
> >```javascript
> >show([speed,[easing],[fn]])
> >```
>
> 2. ##### 参数
>
> > 1.  参数都可以省略，无动画直接显示
> > 2. `speed`:三种预定速度之一的字符串`('slow', 'normal', 'fast')`，或者表示动画时长的毫秒
> > 3.  `easing:(Optional)`用来指定切换效果，默认是`'swing'`，可用参数`'linear'`
> > 4. fn:回调函数，在动画完成是执行的函数，每个元素执行一次
>
> 实例
> ```javascript
> $('button').click(function() {
>     $('div').hide(1000, function() {
>         console.log('');
>     });
> });
> ```
>

### 3.2 滑动效果

> 1. ##### 滑动语法规范
> >```javascript
> >slideToggle([speed,[easing],[fn]])
> >```
>
> 2. ##### 滑动参数
>
> > 1. 参数都可以省略，无动画直接显示
> > 2.  `speed`:三种预定速度之一的字符串`('slow', 'normal', 'fast'`)，或者表示动画时长的毫秒
> > 3. `easing:(Optional)`用来指定切换效果，默认是`'swing'`，可用参数`'linear'`
> > 4.  fn:回调函数，在动画完成是执行的函数，每个元素执行一次
>
> 实例
> ```javascript
> $('button').click(function() {
>     $('div').slideToggle(1000, function() {
>         console.log('');
>     });
> });
> ```

### 3.3 淡入淡出

> 1. ##### 滑动语法规范
> >```javascript
> >fadeIn([speed,[easing],[fn]])
> >```
>
> 2. ##### 滑动参数
>
> > 1. 参数都可以省略，无动画直接显示
> > 2.  `speed`:三种预定速度之一的字符串`('slow', 'normal', 'fast')`，或者表示动画时长的毫秒
> > 3. `easing:(Optional)`用来指定切换效果，默认是`'swing'`，可用参数`'linear'`
> > 4.  `fn:`回调函数，在动画完成是执行的函数，每个元素执行一次
>
> 实例
> ```javascript
> $('button').click(function() {
>     $('div').fadeIn(1000, function() {
>         console.log('');
>     });
> });
> ```

### 3.5 淡入淡出效果

> 1. ##### 渐进方式调整到指定的不透明度
> ```javascript
> fadeTo([[speed],opactiy,[easing],[fn]])
> ```
> 2. ##### 效果参数
> > 1. `opacity` 透明度必须写，取值在0~1之间
> > 2. `speed`:三种预定速度之一的字符串`('slow', 'normal', 'fast')`，或者表示动画时长的毫秒,必须写
> > 3. `easing:(Optional)`用来指定切换效果，默认是`'swing'`，可用参数`'linear'`
> > 4. `fn:`回调函数，在动画完成是执行的函数，每个元素执行一次
>

### 3.6 自定义动画animate

>1. ##### 语法
>```javascript
>animate(params,[speed],[easing],[fn])
>```
>
>2. ##### 参数
>> 1. params：想要修改的样式属性，以对象形式传递，必须写。属性名可以不带引号，如果是复合属性则需要采取驼峰命名。其余参数可以省略
>> 2. `speed`:三种预定速度之一的字符串`('slow', 'normal', 'fast')`，或者表示动画时长的毫秒,必须写
>> 3. `easing:(Optional)`用来指定切换效果，默认是`'swing'`，可用参数`'linear'`
>> 4. `fn:`回调函数，在动画完成是执行的函数，每个元素执行一次

## 4. jQuery 属性操作

### 4.1 设置或获取元素的固有属性 prop()

> 所谓的固有属性即是元素本身自带的属性，比如`<a></a>`元素里的`href`，比如`<input>`元素里的`type`。
>
> 1. ##### 获取属性语法
>
> > ```javascript
> > prop('语法')
> > ```
> 2. ##### 设置属性语法
> 
> > ```javascript
> > prop('属性', '属性值')
> > ```

### 4.2 设置或获取元素的自定义属性 attr()

> 用户自己给元素添加的属性，我们称为自定义属性
>
> 1. ##### 获取属性语法
> > ```javascript
> > attr('属性')  // 类似原生的getAttribute
> > ```
> 
> 2. ##### 设置属性语法
> >```javascript
> > attr('属性', '属性值')  // 类似原生的setAttribute
> >```
> 
> 该方法也可以设置 H5 的自定义属性

### 4.3 数据缓存 data()

> data() 方法可以在指定的元素上存取数据，并不会修改 DOM 元素结构。一旦页面刷新，之前存放的数据会被移除
>
> 1. ##### 附加数据语法
> > ```javascript
> > data('name', 'value')  // 向被选元素附加数据
> > ```
> 
> 2. ##### 获取数据语法
> >```javascript
> > data('name')  // 向被选元素获取数据
> >```
> 
> 同时，还可以读取 H5 自定义属性，

## 5. jQuery 内容文本值

> 1. ##### 获取设置元素内容`html()` (相当于原生的innerHTML)
> >```javascript
> > html() // 获取元素的内容
> > html('内容') //设置元素的内容
> >```
> 
> 2. ##### 获取设置元素文本内容`text()` (相当于原生的innerText)
> >```javascript
> > text() // 获取元素的内容
> > text('内容') //设置元素的内容
> >```
> 
> 3. ##### 获取设置表单值`val()`(相当于原生的innerHTML)
> >```javascript
> > val() // 获取元素的内容
> > val('内容') //设置元素的内容
> >```

## 6. jQuery 元素操作

> 主要是遍历、创建、添加、删除元素。

### 6.1 遍历元素

> jQuery 隐式迭代是对同一类元素做了同样的操作，如果想要给同一元素做不同的操作，就需要遍历。
>
> #### **语法1**：
>
> ```javascript
> $('div').each(function (index, domEle) {···;})
> ```
>
> 1. `each()`方法遍历匹配的每一个元素，主要是用 DOM 处理，each 每一个
> 2. 里面的回调函数有 2 个参数：index 是每个元素的索引号；demEle 是每一个 DOM 元素对象，不是 jQuery 对象
> 3. 想要使用 jQuery 方法，需要给这个 DOM 对象转换为 jQuery 对象
>
> #### **语法2**：
>
> ```javascript
> $.each(object, function (index, element) {···;})
> ```
>
> 1. `$.each`方法可用于遍历任何对象，主要用于数据处理，比如数组，对象
> 2. 里面的回调函数有 2 个参数：index 是每个元素的索引号；element是遍历内容
> >```javascript
> >$.each($('div'), function (index, element) {
> >    	···;
> >})
> >```
> >```javascript
> > $.each(Arr, function (index, element) {
> >    	···;
> >})
> >```

### 6.2 创建元素

> #### 语法：
>
> ```javascript
> $("<li></li>")  // 动态创建了一个<li>
> ```

### 7.3 添加元素

> #### 1.内部元素
> > ```javascript
> > element.append("内容") // 把内容放到入匹配元素内部最后面，类似原生的appendChlid
> > ```
> > 
> > ```javascript
> > element.prepend("内容") // 把内容放到入匹配元素内部最前面
> > ```
>
> #### 2.外部元素
>
> > ```javascript
> > element.after("内容") // 把内容放到入目标元素的后面
> > ```
> > 
> > ```javascript
> > element.before("内容") // 把内容放到入目标元素的前面
> > ```
>
> `element` ==> `$('div')`
>
> 1. 内部添加元素，生成后，他们是父子关系
> 2. 外部添加元素，生成后，他们是兄弟关系

### 6.4 删除元素

> ```javascript
> element.remove() // 删除匹配的元素(本身)
> ```
>
> ```javascript
> element.empty() // 删除匹配的元素集合中的所有的子节点
> ```
>
> ```javascript
> element.html('') // 清空匹配的元素内容
> ```
>
> `element` ==> `$('div')`

# jQuery 事件

|                           鼠标事件                           |                           键盘事件                           |                         表单事件                          |                       文档/窗口事件                       |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------------------------------------------: | :-------------------------------------------------------: |
|   [click](https://www.runoob.com/jquery/event-click.html)    | [keypress](https://www.runoob.com/jquery/event-keypress.html) | [submit](https://www.runoob.com/jquery/event-submit.html) |   [load](https://www.runoob.com/jquery/event-load.html)   |
| [dblclick](https://www.runoob.com/jquery/event-dblclick.html) | [keydown](https://www.runoob.com/jquery/event-keydown.html)  | [change](https://www.runoob.com/jquery/event-change.html) | [resize](https://www.runoob.com/jquery/event-resize.html) |
| [mouseenter](https://www.runoob.com/jquery/event-mouseenter.html) |   [keyup](https://www.runoob.com/jquery/event-keyup.html)    |  [focus](https://www.runoob.com/jquery/event-focus.html)  | [scroll](https://www.runoob.com/jquery/event-scroll.html) |
| [mouseleave](https://www.runoob.com/jquery/event-mouseleave.html) |                                                              |   [blur](https://www.runoob.com/jquery/event-blur.html)   | [unload](https://www.runoob.com/jquery/event-unload.html) |
|   [hover](https://www.runoob.com/jquery/event-hover.html)    |                                                              |                                                           |                                                           |

## 1. jQuery 事件注册

> 单个事件注册
>
> #### **语法：**
>
> > ```javascript
> > element.事件(function() {})
> > ```
> >
> > ```javascript
> > $('div').click(function() { 事件处理程序 })
> > ```

## 2. jQuery 事件处理

### 2.1 事件处理函数 on() 绑定事件

> **`on()`方法在匹配元素上绑定一个或多个事件的事件处理函数**
>
> #### **语法：**
>
> > ```javascript
> > element.on(events, [selector], fn)
> > ```
> >
> > 1. `events`：一个或多个用空格分隔的事件类型
> > 2. `selector`：元素的子元素选择器
> > 3. `fn`：回调函数 即绑定在元素身上的监听函数
> > ```javascript
> > $('button').on({
> >     click: function () {
> >         // 执行函数
> >     },
> > 	mouseenter: function () {
> >         // 执行函数
> >     }
> > })
> > ```
> > ```javascript
> > $('button').on('click mouseenter', function(){
> >     // 执行函数
> > })
> > ```
>
> **可以事件委派操作，事件委派的定义就是，把原来加给子元素身上的事件绑定给父元素身上，就是把事件委派给父元素**
>
> > ```javascript
> > $('ul').on('click', 'li', function(){
> >        // 执行函数
> > })
> > ```
>
> **动态创建的元素，`click()`没有办法绑定事件，`on()`可以给动态生成的元素绑定事件**

### 2.2  事件处理 off() 解绑事件

> `off()`方法可以移除通过 `on()`方法添加事件处理程序
>
> > ```javascript
> > $('ul').off() // 这个是移除了所有事件
> > $('ul').off('click') // 解除了 click 事件
> > $('ul').off('click', 'li') // 解除了委派事件
> > ```
>
>  如果有的事件只想触发一次，可以使用`one()`绑定事件
>
> > ```javascript
> > $('button').one('click', function(){
> >  	// 执行函数
> > })
> > ```
>

### 2.3 自动触发函数事件 trigger()

> 有些事件希望自动触发，比如轮播图自动播放功能键跟跟点击右侧按钮一致，可以利用定时器自动触发右侧按钮事件，不必鼠标点击触发
>
> ```javascript
> element.click() // 第一种简写形式
> ```
>
> > ```javascript
> > $('button').on('click', function(){
> > 	// 执行函数
> > })
> > $('button').click()
> > ```
>
> ```javascript
> element.trigger('type') // 第二种自动触发模式
> ```
>
> >```javascript
> >$('button').on('click', function(){
> >	// 执行函数
> >})
> >$('button').trigger('click')
> >```
>
> ```javascript
> element.triggerHandler(type) // 第三种自动触发模式
> ```
>
> > ```javascript
> > $('button').on('click', function(){
> > 	// 执行函数
> > })
> > $('button').triggerHandler('click')
> > ```
> >
> > 不会触发元素的默认行为（输入框的光标）

## 3. jQuery 事件对象

> 事件被触发，就会有事件对象产生
>
> ```javascript
> element.on(events, [selector], function(event) {
>     // event 是对象
> })
> ```
>
> 阻止默认行为：`event.preventDefault()`或者`return false`
>
> 阻止冒泡：`event.stopPropagation()`
>

# jQuery 其他方法

> jQuery 对象拷贝方法
>
> jQuery多库共存
>
> jQuery插件

## 1.jQuery 对象拷贝

> 如果想要把某个对象拷贝（合并）给另一个对象使用，此时可以使用`$.extend()方法`
>
> #### **语法：**
>
> ```javascript
> $.extend([deep], target, object1, [bojectN])
> ```
> > 1. `deep`：如果设为 true 则为深拷贝，默认为 false 浅拷贝
> > 2. `target`：要拷贝的目标
> > 3. `object1`待拷贝的第一个对象
>

