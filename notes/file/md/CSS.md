[TOC]

# css

## 1.CSS **简介**

> CSS 的主要使用场景是美化网页，布局页面

### 1.1 HTML 的局限性

> HTML 只关注内容的语义，`<h1>`表明是一个大标题，`<p>`表明这时一个段落

### 1.2 CSS 

> CSS 是层叠样式表（级联样式表、CSS样式表）
> CSS 主要作用是设置 HTML 页面中的**文本内容**（字体、大小、对齐方式）、**图片的外形**（宽高、边框）、**版面的布局和外观显示样式**

**总结：**

>1. HTML 主要是做结构，显示元素内容
>2. CSS 美化
>3. CSS 做大的价值：让 HTML 专注做结构，CSS 专注做样式

### 1.3 CSS 语法规范

> 使用 HTML 时，需要遵从一定的规范，CSS 也是如此。
>
> **CSS 规则有两部分组成：选择器以及一条或多条声明**
>
> > ```css
> > * {
> >     margin: 0;
> >     padding: 0;
> > }
> > ```
> > - **选择器**是用于指定 CSS 样式的 HTML 标签，花括号内是该对象设置的具体样式
> > - **属性**和属性值是以**键值对**的形式出现
> > - 语句结束一定要以**分号**结束
> > - 属性和属性值之间用英文的“`:`”分开。

### 1.4 CSS 代码风格

> 1. 样式格式书写
> > 1. 紧凑格式
> > >```css
> > >* {margin: 0;padding: 0;}
> > >```
> > 2. 展开格式
> > >```css
> > >* {
> > >    margin: 0;
> > >    padding: 0;
> > >}
> > >```
> > 
> > 推荐第二种，更直观
> 2. 样式大小
>
> > ```CSS
> > * {
> >    margin: 0;
> >    padding: 0;
> > }
> > ```
> > ```CSS
> > * {
> >    MARGIN: 0;
> >    PADDING: 0;
> > }
> > ```
> > 建议小写
> 3. 空格规范
> >```css
> >* {
> >   margin: 0;
> >   padding: 0;
> >}
> >```
> >1. 属性值前面、冒号后面、中间保留一个空格
> >2. 选择器（标签）和大括号中间保留空格

## 2. CSS 选择器

### 选择器参考表

> 下面的表格让你可以浏览你可以用的选择器，还有本指南中教你如何使用每种选择器的页面的链接。我还加上了一个能查看浏览器对每个选择器的支持信息的MDN页面链接。你可以把这个作为回头的参考，在你以后需要查询文献中提到的选择器的时候，或者是在你广义上实验CSS的时候。
>
> |      选择器      |                             示例                             |
> | :--------------: | :----------------------------------------------------------: |
> |   [类型选择器]   | [`h1 { }`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Type_selectors) |
> |   [通配选择器]   | [`* { }`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Universal_selectors) |
> |    [类选择器]    | [`.box { }`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Class_selectors) |
> |    [ID选择器]    | [`#unique { }`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/ID_selectors) |
> | [标签属性选择器] | [`a[title] { }`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors) |
> |   [伪类选择器]   | [`p:first-chil`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes) |
> |  [伪元素选择器]  | [`p::first-line { }`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements) |
> |   [后代选择器]   | [`article p`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Descendant_combinator) |
> |   [子代选择器]   | [`article > p`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Child_combinator) |
> | [相邻兄弟选择器] | [`h1 + p`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Adjacent_sibling_combinator) |
> | [通用兄弟选择器] | [`h1 ~ p`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/General_sibling_combinator) |

#### 元素选择器

>**概述**
>
>CSS元素选择器(也称为类型选择器)通过node节点名称匹配元素. 因此,在单独使用时,寻找特定类型的元素时,元素选择器都会匹配该文档中所有此类型的元素.
>
>**语法**
>
>```css
>元素 {样式声明 }
>```
>
>**示例**
>
>>**CSS**
>>
>>```css
>>span {
>>  background-color: DodgerBlue;
>>  color: #ffffff;
>>}
>>```
>>
>>**HTML**
>>
>>```html
>>  <span>这里是由 span 包裹的一些文字.</span>
>>  <p>这里是由 p 包裹的一些文字.</p>
>>```

#### 通配选择器

>**概述**
>
>在CSS中,一个星号(`*`)就是一个通配选择器.它可以匹配任意类型的HTML元素.在配合其他简单选择器的时候,省略掉通配选择器会有同样的效果.比如,`*.warning` 和`.warning` 的效果完全相同.
>
>在CSS3中,星号(`*`)可以和命名空间组合使用:
>
>>- `ns|*` - 会匹配`ns`命名空间下的所有元素
>>- `*|*` - 会匹配所有命名空间下的所有元素
>>- `|*` - 会匹配所有没有命名空间的元素
>
>**示例**
>
>>```css
>>*[lang^=en]{color:green;}
>>*.warning {color:red;}
>>*#maincontent {border: 1px solid blue;}
>>```
>>
>>上面的CSS作用于下面的HTML:
>>
>>```html
>><p class="warning">
>>  <span lang="en-us">A green span</span> in a red paragraph.
>></p>
>><p id="maincontent" lang="en-gb">
>>  <span class="warning">A red span</span> in a green paragraph.
>></p>
>>```

#### 类选择器

>**概述**
>
>在一个HTML文档中，CSS类选择器会根据元素的类属性中的内容匹配元素。类属性被定义为一个以空格分隔的列表项，在这组类名中，必须有一项与类选择器中的类名完全匹配，此条样式声明才会生效。
>
>**语法**
>
>```css
>.类名 {样式声明 }
>```
>
>注意它与下面的语句等价  [`attribute selector`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors):
>
>```css
>[class~=类名] {样式声明 }
>```
>
>**示例**
>
>>```css
>>span.classy {
>>  background-color: DodgerBlue;
>>}
>>```
>>
>>上面的CSS作用于下面的HTML代码:
>>
>>```html
>>  <span class="classy">Here's a span with some text.</span>
>>  <span>Here's another.</span>
>>```

#### **ID 选择器**

>在一个HTML文档中,CSS ID 选择器会根据该元素的 ID 属性中的内容匹配元素,元素 ID 属性名必须与选择器中的 ID 属性名完全匹配，此条样式声明才会生效。
>
>>```css
>>/* The element with id="demo" */
>>#demo {
>>  border: red 2px solid;
>>}
>>```
>
>**语法**
>
>```css
>#id属性值 {样式声明 }
>```
>
>它与下面的`属性选择器`语句等价：
>
>```css
>[id=id属性值] {样式声明 }
>```
>
>**示例**
>
>>**CSS**
>>
>>```css
>>span#identified {
>>  background-color: DodgerBlue;
>>}
>>```
>>
>>**HTML**
>>
>>```html
>>  <span id="identified">Here's a span with some text.</span>
>>  <span>Here's another.</span>
>>```

#### **标签属性选择器**

>CSS **属性选择器**通过已经存在的属性名或属性值匹配元素。
>
>>```css
>>/* 存在title属性的<a> 元素 */
>>a[title] {
>>  color: purple;
>>}
>
>>/* 存在href属性并且属性值匹配"https://example.org"的<a> 元素 */
>>a[href="https://example.org"] {
>>  color: green;
>>}
>
>>/* 存在href属性并且属性值包含"example"的<a> 元素 */
>>a[href*="example"] {
>>  font-size: 2em;
>>}
>
>>/* 存在href属性并且属性值结尾是".org"的<a> 元素 */
>>a[href$=".org"] {
>>  font-style: italic;
>>}
>
>>/* 存在class属性并且属性值包含以空格分隔的"logo"的<a>元素 */
>>a[class~="logo"] {
>>padding: 2px;
>>}
>>
>>```
>
>**语法**
>
>`[attr]`
>
>>  表示带有以 attr 命名的属性的元素。
>
>`[attr=value]`
>
>>  表示带有以 attr 命名的属性，且属性值为 value 的元素。
>
>`[attr~=value]`
>
>>  表示带有以 attr 命名的属性的元素，并且该属性是一个以空格作为分隔的值列表，其中至少有一个值为 value。
>
>`[attr|=value]`
>
>>  表示带有以 attr 命名的属性的元素，属性值为“value”或是以“value-”为前缀（"`-`"为连字符，Unicode 编码为 U+002D）开头。典型的应用场景是用来匹配语言简写代码（如 zh-CN，zh-TW 可以用 zh 作为 value）。
>
>`[attr^=value]`
>
>>  表示带有以 attr 命名的属性，且属性值是以 value 开头的元素。
>
>`[attr$=value]`
>
>>  表示带有以 attr 命名的属性，且属性值是以 value 结尾的元素。
>
>`[attr*=value]`
>
>>  表示带有以 attr 命名的属性，且属性值至少包含一个 value 值的元素。
>
>`[*attr* *operator* *value* i]`
>
>>  在属性选择器的右方括号前添加一个用空格隔开的字母 `i`（或 `I`），可以在匹配属性值时忽略大小写（支持 ASCII 字符范围之内的字母）。
>
>`[*attr* *operator* *value* s]` 
>
>>  在属性选择器的右方括号前添加一个用空格隔开的字母 `s`（或 `S`），可以在匹配属性值时区分大小写（支持 ASCII 字符范围之内的字母）。
>
>## 示例
>
>>**CSS**
>
>>```css
>>a {
>>  color: blue;
>>}
>
>>/* 以 "#" 开头的页面本地链接 */
>>a[href^="#"] {
>>  background-color: gold;
>>}
>
>>/* 包含 "example" 的链接 */
>>a[href*="example"] {
>>  background-color: silver;
>>}
>
>>/* 包含 "insensitive" 的链接,不区分大小写 */
>>a[href*="insensitive" i] {
>>  color: cyan;
>>}
>
>>/* 包含 "cAsE" 的链接，区分大小写 */
>>a[href*="cAsE" s] {
>>  color: pink;
>>}
>
>>/* 以 ".org" 结尾的链接 */
>>a[href$=".org"] {
>>color: red;
>>}
>>
>>```
>
>>#### HTML
>
>>```html
>><ul>
>>  <li><a href="#internal">Internal link</a></li>
>>  <li><a href="http://example.com">Example link</a></li>
>>  <li><a href="#InSensitive">Insensitive internal link</a></li>
>>  <li><a href="http://example.org">Example org link</a></li>
>></ul>
>>```
>
>**多语言**
>
>>**CSS**
>
>>```css
>>/* 将所有包含 `lang` 属性的 <div> 元素的字重设为 bold */
>>div[lang] {
>>  font-weight: bold;
>>}
>
>>/* 将所有语言为美国英语的 <div> 元素的文本颜色设为蓝色 */
>>div[lang~="en-us"] {
>>  color: blue;
>>}
>
>>/* 将所有语言为葡萄牙语的 <div> 元素的文本颜色设为绿色 */
>>div[lang="pt"] {
>>  color: green;
>>}
>
>>/* 将所有语言为中文的 <div> 元素的文本颜色设为红色
>>   无论是简体中文（zh-CN）还是繁体中文（zh-TW） */
>>div[lang|="zh"] {
>>  color: red;
>>}
>
>>/* 将所有 `data-lang` 属性的值为 "zh-TW" 的 <div> 元素的文本颜色设为紫色 */
>>/* 备注: 和 JS 不同，CSS 可以在不使用双引号的情况下直接使用带连字符的属性名 */
>>div[data-lang="zh-TW"] {
>>color: purple;
>>}
>>
>>```
>
>>#### HTML
>
>>```html
>><div lang="en-us en-gb en-au en-nz">Hello World!</div>
>><div lang="pt">Olá Mundo!</div>
>><div lang="zh-CN">世界您好！</div>
>><div lang="zh-TW">世界您好！</div>
>><div data-lang="zh-TW">世界您好！</div>
>>```
>
>### [HTML有序列表](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors#html_有序列表)
>
>由于 [`type`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-type) 属性主要用于 [``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input) 元素，因此 HTML 规范要求 [`type`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-type) 属性的匹配不区分大小写，如果使用属性选择器且添加了 [大小写敏感](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Attribute_selectors#case-sensitive) 的修饰符，那么将无法与 [有序列表](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol) 的 [`type`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/ol#attr-type) 属性进行匹配。
>
>>#### CSS
>
>>```css
>>/* 列表类型不需要大小写敏感标志，这是由于 HTML 处理 type 属性的一个怪癖。 */
>>ol[type="a"] {
>>  list-style-type: lower-alpha;
>>  background: red;
>>}
>
>>ol[type="a" s] {
>>  list-style-type: lower-alpha;
>>  background: lime;
>>}
>
>>ol[type="A" s] {
>>list-style-type: upper-alpha;
>>background: lime;
>>}
>>
>>```
>
>>#### HTML
>
>>```html
>><ol type="A">
>>  <li>Example list</li>
>></ol>
>>```

#### **伪类选择器**

>CSS **伪类** 是添加到选择器的关键字，指定要选择的元素的特殊状态。例如，[`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 可被用于在用户将鼠标悬停在按钮上时改变按钮的颜色。
>
>>```css
>>/* 所有用户指针悬停的按钮 */
>>button:hover {
>>  color: blue;
>>}
>>```
>
>伪类连同伪元素一起，他们允许你不仅仅是根据文档 DOM 树中的内容对元素应用样式，而且还允许你根据诸如像导航历史这样的外部因素来应用样式（例如 [`:visited`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:visited)），同样的，可以根据内容的状态（例如在一些表单元素上的 [`:checked`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:checked)），或者鼠标的位置（例如 [`:hover`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:hover) 让你知道是否鼠标在一个元素上悬浮）来应用样式。
>
>**注意：** 与伪类相反，[`pseudo-elements`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-elements) 可被用于为一个元素的 *特定部分* 应用样式。
>
>**语法**
>
>>```css
>>selector:pseudo-class {
>>  property: value;
>>}
>>```
>
>类似于普通的类，你可以在一个选择器中同时一起写多个伪类。

##### 表格

>| 选择器                                                       | 例子                  |                           例子描述                           |
>| :----------------------------------------------------------- | :-------------------- | :----------------------------------------------------------: |
>| [:active](https://www.w3school.com.cn/cssref/selector_active.asp) | a:active              |                       选择活动的链接。                       |
>| [:checked](https://www.w3school.com.cn/cssref/selector_checked.asp) | input:checked         |               选择每个被选中的 <input> 元素。                |
>| [:disabled](https://www.w3school.com.cn/cssref/selector_disabled.asp) | input:disabled        |               选择每个被禁用的 <input> 元素。                |
>| [:empty](https://www.w3school.com.cn/cssref/selector_empty.asp) | p:empty               |               选择没有子元素的每个 <p> 元素。                |
>| [:enabled](https://www.w3school.com.cn/cssref/selector_enabled.asp) | input:enabled         |               选择每个已启用的 <input> 元素。                |
>| [:first-child](https://www.w3school.com.cn/cssref/selector_first-child.asp) | p:first-child         |          选择作为其父的首个子元素的每个 <p> 元素。           |
>| [:first-of-type](https://www.w3school.com.cn/cssref/selector_first-of-type.asp) | p:first-of-type       |         选择作为其父的首个 <p> 元素的每个 <p> 元素。         |
>| [:focus](https://www.w3school.com.cn/cssref/selector_focus.asp) | input:focus           |                选择获得焦点的 <input> 元素。                 |
>| [:hover](https://www.w3school.com.cn/cssref/selector_hover.asp) | a:hover               |                   选择鼠标悬停其上的链接。                   |
>| [:in-range](https://www.w3school.com.cn/cssref/selector_in-range.asp) | input:in-range        |           选择具有指定范围内的值的 <input> 元素。            |
>| [:invalid](https://www.w3school.com.cn/cssref/selector_invalid.asp) | input:invalid         |             选择所有具有无效值的 <input> 元素。              |
>| [:lang(*language*)](https://www.w3school.com.cn/cssref/selector_lang.asp) | p:lang(it)            |        选择每个 lang 属性值以 "it" 开头的 <p> 元素。         |
>| [:last-child](https://www.w3school.com.cn/cssref/selector_last-child.asp) | p:last-child          |        选择作为其父的最后一个子元素的每个 <p> 元素。         |
>| [:last-of-type](https://www.w3school.com.cn/cssref/selector_last-of-type.asp) | p:last-of-type        |       选择作为其父的最后一个 <p> 元素的每个 <p> 元素。       |
>| [:link](https://www.w3school.com.cn/cssref/selector_link.asp) | a:link                |                   选择所有未被访问的链接。                   |
>| [:not(*selector*)](https://www.w3school.com.cn/cssref/selector_not.asp) | :not(p)               |                 选择每个非 <p> 元素的元素。                  |
>| [:nth-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-child.asp) | p:nth-child(2)        |         选择作为其父的第二个子元素的每个 <p> 元素。          |
>| [:nth-last-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-child.asp) | p:nth-last-child(2)   | 选择作为父的第二个子元素的每个<p>元素，从最后一个子元素计数。 |
>| [:nth-last-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp) | p:nth-last-of-type(2) | 选择作为父的第二个<p>元素的每个<p>元素，从最后一个子元素计数 |
>| [:nth-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-of-type.asp) | p:nth-of-type(2)      |        选择作为其父的第二个 <p> 元素的每个 <p> 元素。        |
>| [:only-of-type](https://www.w3school.com.cn/cssref/selector_only-of-type.asp) | p:only-of-type        |         选择作为其父的唯一 <p> 元素的每个 <p> 元素。         |
>| [:only-child](https://www.w3school.com.cn/cssref/selector_only-child.asp) | p:only-child          |            选择作为其父的唯一子元素的 <p> 元素。             |
>| [:optional](https://www.w3school.com.cn/cssref/selector_optional.asp) | input:optional        |          选择不带 "required" 属性的 <input> 元素。           |
>| [:out-of-range](https://www.w3school.com.cn/cssref/selector_out-of-range.asp) | input:out-of-range    |            选择值在指定范围之外的 <input> 元素。             |
>| [:read-only](https://www.w3school.com.cn/cssref/selector_read-only.asp) | input:read-only       |         选择指定了 "readonly" 属性的 <input> 元素。          |
>| [:read-write](https://www.w3school.com.cn/cssref/selector_read-write.asp) | input:read-write      |          选择不带 "readonly" 属性的 <input> 元素。           |
>| [:required](https://www.w3school.com.cn/cssref/selector_required.asp) | input:required        |         选择指定了 "required" 属性的 <input> 元素。          |
>| [:root](https://www.w3school.com.cn/cssref/selector_root.asp) | root                  |                      选择元素的根元素。                      |
>| [:target](https://www.w3school.com.cn/cssref/selector_target.asp) | #news:target          |    选择当前活动的 #news 元素（单击包含该锚名称的 URL）。     |
>| [:valid](https://www.w3school.com.cn/cssref/selector_valid.asp) | input:valid           |             选择所有具有有效值的 <input> 元素。              |
>| [:visited](https://www.w3school.com.cn/cssref/selector_visited.asp) | a:visited             |                    选择所有已访问的链接。                    |

#### **伪元素**

>伪元素是一个附加至选择器末的关键词，允许你对被选择元素的特定部分修改样式。下例中的 [`::first-line`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/::first-line) 伪元素可改变段落首行文字的样式。
>
>>```css
>>/* 每一个 <p> 元素的第一行。 */
>>p::first-line {
>>  color: blue;
>>  text-transform: uppercase;
>>}
>>```
>>
>>**注意：**与伪元素比较，[`pseudo-classes`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes) 能够根据状态改变元素样式。
>
>**语法**
>
>>```css
>>selector::pseudo-element {
>>  property: value;
>>}
>>```
>>
>>一个选择器中只能使用一个伪元素。伪元素必须紧跟在语句中的简单选择器/基础选择器之后。
>>
>>**注意：**按照规范，应该使用双冒号（`::`）而不是单个冒号（`:`），以便区分伪类和伪元素。但是，由于旧版本的 W3C 规范并未对此进行特别区分，因此目前绝大多数的浏览器都同时支持使用这两种方式来表示伪元素。

##### 表格

>| 选择器                                                       | 例子            | 例子描述                      |
>| :----------------------------------------------------------- | :-------------- | :---------------------------- |
>| [::after](https://www.w3school.com.cn/cssref/selector_after.asp) | p::after        | 在每个 <p> 元素之后插入内容。 |
>| [::before](https://www.w3school.com.cn/cssref/selector_before.asp) | p::before       | 在每个 <p> 元素之前插入内容。 |
>| [::first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp) | p::first-letter | 选择每个 <p> 元素的首字母。   |
>| [::first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp) | p::first-line   | 选择每个 <p> 元素的首行。     |
>| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp) | p::selection    | 选择用户选择的元素部分。      |

#### 后代选择器

>**后代组合器**（通常用单个空格（` `）字符表示）组合了两个选择器，如果第二个选择器匹配的元素具有与第一个选择器匹配的祖先（父母，父母的父母，父母的父母的父母等）元素，则它们将被选择。利用后代组合器的选择器称为后代选择器。
>
>>```
>>/* List items that are descendants of the "my-things" list */
>>ul.my-things li {
>>  margin: 2em;
>>}
>>```
>
>从技术上讲，后代组合器是两个选择器之间的一个或多个 [CSS](https://developer.mozilla.org/zh-CN/docs/Glossary/CSS) 空格字符-空格字符和/或四个控制字符之一：回车，换页，换行和制表符在没有其他组合器的情况下。此外，组成组合器的空白字符可以包含任意数量的CSS注释。
>
>**语法**
>
>>```css
>>selector1 selector2 {
>>  /* property declarations */
>>}
>>```
>
>**示例**
>
>>**CSS**
>
>>```css
>>li {
>>  list-style-type: disc;
>>}
>
>>li li {
>>list-style-type: circle;
>>}
>>
>>```
>
>>**HTML**
>
>>```html
>><ul>
>>  <li>
>>    <div>Item 1</div>
>>    <ul>
>>      <li>Subitem A</li>
>>      <li>Subitem B</li>
>>    </ul>
>>  </li>
>>  <li>
>>    <div>Item 2</div>
>>    <ul>
>>      <li>Subitem A</li>
>>      <li>Subitem B</li>
>>    </ul>
>>  </li>
>></ul>
>>```

#### 子代选择器

>**概述**
>
>当使用  `>` 选择符分隔两个元素时,它只会匹配那些作为第一个元素的**直接后代(**子元素)的第二元素. 与之相比, 当两个元素由 [后代选择器 ](https://developer.mozilla.org/en-US/CSS/Descendant_selectors)相连时, 它表示匹配存在的所有由第一个元素作为祖先元素(但不一定是父元素)的第二个元素, 无论它在 DOM 中"跳跃" 多少次.
>
>**语法**
>
>>```css
>>元素1 > 元素2 {样式声明 }
>>```
>
>**示例**
>
>>```css
>>span { background-color: white; }
>>div > span {
>>  background-color: DodgerBlue;
>>}
>>```
>>
>>当应用与如下标记时:
>>
>>```html
>><div>
>>  <span>Span 1. In the div.
>>    <span>Span 2. In the span that's in the div.</span>
>>  </span>
>></div>
>><span>Span 3. Not in a div at all</span>
>>```

#### 相邻兄弟选择器

>**相邻兄弟选择器** (`+`) 介于两个选择器之间，当第二个元素*紧跟在*第一个元素之后，并且两个元素都是属于同一个父`元素`的子元素，则第二个元素将被选中。
>
>>```css
>>/* 图片后面紧跟着的段落将被选中 */
>>img + p {
>>  font-style: bold;
>>}
>>```
>
>**语法**
>
>```css
>former_element + target_element { style properties }
>```
>
>**示例**
>
>>**CSS**
>>
>>```css
>>li:first-of-type + li {
>>  color: red;
>>}
>>```
>>
>>**HTML**
>>
>>```html
>><ul>
>>  <li>One</li>
>>  <li>Two!</li>
>>  <li>Three</li>
>></ul>
>>```

#### 通用兄弟选择器

>## 概述
>
>兄弟选择符，位置无须紧邻，只须同层级，`A~B` 选择`A`元素之后所有同层级`B`元素。
>
>**语法**
>
>>```css
>>former_element ~ target_element { style properties }
>>```
>
>**示例**
>
>>**css**
>>
>>```css
>>p ~ span {
>>  color: red;
>>}
>>```
>>
>>**html**
>>
>>```html
>><span>This is not red.</span>
>><p>Here is a paragraph.</p>
>><code>Here is some code.</code>
>><span>And here is a span.</span>
>>```

## CSS 选择器（全）

| [.*class*](https://www.w3school.com.cn/cssref/selector_class.asp) | .intro                | 选择 class="intro" 的所有元素。                      |
| ------------------------------------------------------------ | --------------------- | ---------------------------------------------------- |
| .*class1*.*class2*                                           | .name1.name2          | 选择 class 属性中同时有 name1 和 name2 的所有元素。  |
| .*class1* .*class2*                                          | .name1 .name2         | 选择作为类名 name1 元素后代的所有类名 name2 元素。   |
| [#*id*](https://www.w3school.com.cn/cssref/selector_id.asp)  | #firstname            | 选择 id="firstname" 的元素。                         |
| [*](https://www.w3school.com.cn/cssref/selector_all.asp)     | *                     | 选择所有元素。                                       |
| [*element*](https://www.w3school.com.cn/cssref/selector_element.asp) | p                     | 选择所有 <p> 元素。                                  |
| [*element*.*class*](https://www.w3school.com.cn/cssref/selector_element_class.asp) | p.intro               | 选择 class="intro" 的所有 <p> 元素。                 |
| [*element*,*element*](https://www.w3school.com.cn/cssref/selector_element_comma.asp) | div, p                | 选择所有 <div> 元素和所有 <p> 元素。                 |
| [*element* *element*](https://www.w3school.com.cn/cssref/selector_element_element.asp) | div p                 | 选择 <div> 元素内的所有 <p> 元素。                   |
| [*element*>*element*](https://www.w3school.com.cn/cssref/selector_element_gt.asp) | div > p               | 选择父元素是 <div> 的所有 <p> 元素。                 |
| [*element*+*element*](https://www.w3school.com.cn/cssref/selector_element_plus.asp) | div + p               | 选择紧跟 <div> 元素的首个 <p> 元素。                 |
| [*element1*~*element2*](https://www.w3school.com.cn/cssref/selector_gen_sibling.asp) | p ~ ul                | 选择前面有 <p> 元素的每个 <ul> 元素。                |
| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | [target]              | 选择带有 target 属性的所有元素。                     |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | [target=_blank]       | 选择带有 target="_blank" 属性的所有元素。            |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | [title~=flower]       | 选择 title 属性包含单词 "flower" 的所有元素。        |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | [lang\|=en]           | 选择 lang 属性值以 "en" 开头的所有元素。             |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | a[href^="https"]      | 选择其 src 属性值以 "https" 开头的每个 <a> 元素。    |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | a[href$=".pdf"]       | 选择其 src 属性以 ".pdf" 结尾的所有 <a> 元素。       |
| [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | a[href*="w3schools"]  | 选择其 href 属性值中包含 "abc" 子串的每个 <a> 元素。 |
| [:active](https://www.w3school.com.cn/cssref/selector_active.asp) | a:active              | 选择活动链接。                                       |
| [::after](https://www.w3school.com.cn/cssref/selector_after.asp) | p::after              | 在每个 <p> 的内容之后插入内容。                      |
| [::before](https://www.w3school.com.cn/cssref/selector_before.asp) | p::before             | 在每个 <p> 的内容之前插入内容。                      |
| [:checked](https://www.w3school.com.cn/cssref/selector_checked.asp) | input:checked         | 选择每个被选中的 <input> 元素。                      |
| [:default](https://www.w3school.com.cn/cssref/selector_default.asp) | input:default         | 选择默认的 <input> 元素。                            |
| [:disabled](https://www.w3school.com.cn/cssref/selector_disabled.asp) | input:disabled        | 选择每个被禁用的 <input> 元素。                      |
| [:empty](https://www.w3school.com.cn/cssref/selector_empty.asp) | p:empty               | 选择没有子元素的每个 <p> 元素（包括文本节点）。      |
| [:enabled](https://www.w3school.com.cn/cssref/selector_enabled.asp) | input:enabled         | 选择每个启用的 <input> 元素。                        |
| [:first-child](https://www.w3school.com.cn/cssref/selector_first-child.asp) | p:first-child         | 选择属于父元素的第一个子元素的每个 <p> 元素。        |
| [::first-letter](https://www.w3school.com.cn/cssref/selector_first-letter.asp) | p::first-letter       | 选择每个 <p> 元素的首字母。                          |
| [::first-line](https://www.w3school.com.cn/cssref/selector_first-line.asp) | p::first-line         | 选择每个 <p> 元素的首行。                            |
| [:first-of-type](https://www.w3school.com.cn/cssref/selector_first-of-type.asp) | p:first-of-type       | 选择属于其父元素的首个 <p> 元素的每个 <p> 元素。     |
| [:focus](https://www.w3school.com.cn/cssref/selector_focus.asp) | input:focus           | 选择获得焦点的 input 元素。                          |
| [:fullscreen](https://www.w3school.com.cn/cssref/selector_fullscreen.asp) | :fullscreen           | 选择处于全屏模式的元素。                             |
| [:hover](https://www.w3school.com.cn/cssref/selector_hover.asp) | a:hover               | 选择鼠标指针位于其上的链接。                         |
| [:in-range](https://www.w3school.com.cn/cssref/selector_in-range.asp) | input:in-range        | 选择其值在指定范围内的 input 元素。                  |
| [:indeterminate](https://www.w3school.com.cn/cssref/selector_indeterminate.asp) | input:indeterminate   | 选择处于不确定状态的 input 元素。                    |
| [:invalid](https://www.w3school.com.cn/cssref/selector_invalid.asp) | input:invalid         | 选择具有无效值的所有 input 元素。                    |
| [:lang(*language*)](https://www.w3school.com.cn/cssref/selector_lang.asp) | p:lang(it)            | 选择 lang 属性等于 "it"（意大利）的每个 <p> 元素。   |
| [:last-child](https://www.w3school.com.cn/cssref/selector_last-child.asp) | p:last-child          | 选择属于其父元素最后一个子元素每个 <p> 元素。        |
| [:last-of-type](https://www.w3school.com.cn/cssref/selector_last-of-type.asp) | p:last-of-type        | 选择属于其父元素的最后 <p> 元素的每个 <p> 元素。     |
| [:link](https://www.w3school.com.cn/cssref/selector_link.asp) | a:link                | 选择所有未访问过的链接。                             |
| [:not(*selector*)](https://www.w3school.com.cn/cssref/selector_not.asp) | :not(p)               | 选择非 <p> 元素的每个元素。                          |
| [:nth-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-child.asp) | p:nth-child(2)        | 选择属于其父元素的第二个子元素的每个 <p> 元素。      |
| [:nth-last-child(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-child.asp) | p:nth-last-child(2)   | 同上，从最后一个子元素开始计数。                     |
| [:nth-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-of-type.asp) | p:nth-of-type(2)      | 选择属于其父元素第二个 <p> 元素的每个 <p> 元素。     |
| [:nth-last-of-type(*n*)](https://www.w3school.com.cn/cssref/selector_nth-last-of-type.asp) | p:nth-last-of-type(2) | 同上，但是从最后一个子元素开始计数。                 |
| [:only-of-type](https://www.w3school.com.cn/cssref/selector_only-of-type.asp) | p:only-of-type        | 选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。     |
| [:only-child](https://www.w3school.com.cn/cssref/selector_only-child.asp) | p:only-child          | 选择属于其父元素的唯一子元素的每个 <p> 元素。        |
| [:optional](https://www.w3school.com.cn/cssref/selector_optional.asp) | input:optional        | 选择不带 "required" 属性的 input 元素。              |
| [:out-of-range](https://www.w3school.com.cn/cssref/selector_out-of-range.asp) | input:out-of-range    | 选择值超出指定范围的 input 元素。                    |
| [::placeholder](https://www.w3school.com.cn/cssref/selector_placeholder.asp) | input::placeholder    | 选择已规定 "placeholder" 属性的 input 元素。         |
| [:read-only](https://www.w3school.com.cn/cssref/selector_read-only.asp) | input:read-only       | 选择已规定 "readonly" 属性的 input 元素。            |
| [:read-write](https://www.w3school.com.cn/cssref/selector_read-write.asp) | input:read-write      | 选择未规定 "readonly" 属性的 input 元素。            |
| [:required](https://www.w3school.com.cn/cssref/selector_required.asp) | input:required        | 选择已规定 "required" 属性的 input 元素。            |
| [:root](https://www.w3school.com.cn/cssref/selector_root.asp) | :root                 | 选择文档的根元素。                                   |
| [::selection](https://www.w3school.com.cn/cssref/selector_selection.asp) | ::selection           | 选择用户已选取的元素部分。                           |
| [:target](https://www.w3school.com.cn/cssref/selector_target.asp) | #news:target          | 选择当前活动的 #news 元素。                          |
| [:valid](https://www.w3school.com.cn/cssref/selector_valid.asp) | input:valid           | 选择带有有效值的所有 input 元素。                    |
| [:visited](https://www.w3school.com.cn/cssref/selector_visited.asp) | a:visited             | 选择所有已访问的链接。                               |

## 3. CSS属性

###  [CSS Backgrounds(背景)](https://www.runoob.com/css/css-background.html)

>CSS 背景属性用于定义HTML元素的背景。
>
>CSS 属性定义背景效果:
>
>| Property                                                     | 描述                                         |
>| :----------------------------------------------------------- | :------------------------------------------- |
>| [background](https://www.runoob.com/cssref/css3-pr-background.html) | 简写属性，作用是将背景属性设置在一个声明中。 |
>| [background-attachment](https://www.runoob.com/cssref/pr-background-attachment.html) | 背景图像是否固定或者随着页面的其余部分滚动。 |
>| [background-color](https://www.runoob.com/cssref/pr-background-color.html) | 设置元素的背景颜色。                         |
>| [background-image](https://www.runoob.com/cssref/pr-background-image.html) | 把图像设置为背景。                           |
>| [background-position](https://www.runoob.com/cssref/pr-background-position.html) | 设置背景图像的起始位置。                     |
>| [background-repeat](https://www.runoob.com/cssref/pr-background-repeat.html) | 设置背景图像是否及如何重复。                 |

#### 1. 背景颜色

>background-color 属性定义了元素的背景颜色.
>
>页面的背景颜色使用在body的选择器中:
>
>> ``````css
>> body {background-color:#b0c4de;}
>> ``````
>
>CSS中，颜色值通常以以下方式定义:
>
>- 十六进制 - 如："#ff0000"
>- RGB - 如："rgb(255,0,0)"
>- 颜色名称 - 如："red"
>
>以下实例中, h1, p, 和 div 元素拥有不同的背景颜色:
>
>> ``````css
>> h1 {background-color:#6495ed;}
>> p {background-color:#e0ffff;}
>> div {background-color:#b0c4de;}
>> ``````

#### 2. 背景图像

>background-image 属性描述了元素的背景图像.
>
>> 默认情况下，背景图像进行平铺重复显示，以覆盖整个元素实体.
>
>页面背景图片设置实例:
>
>> ``````css
>> body {background-image:url('paper.gif');}
>> ``````
>>
>> 
>
>下面是一个例子是一个糟糕的文字和背景图像组合。文本可读性差:
>
>> ``````css
>> body {background-image:url('bgdesert.jpg');}
>> ``````
>
>

#### 3. 背景图像 - 水平或垂直平铺

>默认情况下 background-image 属性会在页面的水平或者垂直方向平铺。
>
>一些图像如果在水平方向与垂直方向平铺，这样看起来很不协调，如下所示: 
>
>> ``````css
>> body{
>> background-image:url('gradient2.png');
>> }
>> ``````
>
>如果图像只在水平方向平铺 (repeat-x), 页面背景会更好些:
>
>> ``````css
>> body{
>> background-image:url('gradient2.png');
>> background-repeat:repeat-x;
>> }
>> ``````

#### 4. 背景图像- 设置定位与不平铺

>![Remark](https://www.runoob.com/images/lamp.gif) 让背景图像不影响文本的排版
>
>如果你不想让图像平铺，你可以使用 background-repeat 属性:
>
>> ``````css
>> body
>> {
>> background-image:url('img_tree.png');
>> background-repeat:no-repeat;
>> }
>> ``````
>
>以上实例中，背景图像与文本显示在同一个位置，为了让页面排版更加合理，不影响文本的阅读，我们可以改变图像的位置。
>
>可以利用 background-position 属性改变图像在背景中的位置:
>
>> ``````css
>> body
>> {
>> background-image:url('img_tree.png');
>> background-repeat:no-repeat;
>> background-position:right top;
>> }
>> ``````

#### 5. 背景- 简写属性

>在以上实例中我们可以看到页面的背景颜色通过了很多的属性来控制。
>
>为了简化这些属性的代码，我们可以将这些属性合并在同一个属性中.
>
>背景颜色的简写属性为 "background":
>
>> ``````css
>> body {background:#ffffff url('img_tree.png') no-repeat right top;}
>> ``````
>
>当使用简写属性时，属性值的顺序为：:
>
>>- background-color
>>- background-image
>>- background-repeat
>>- background-attachment
>>- background-position
>
>以上属性无需全部使用，你可以按照页面的实际需要使用.

###  [CSS Text(文本)](https://www.runoob.com/css/css-text.html)

| 属性                                                         | 描述                                                         |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| [color](https://www.w3school.com.cn/cssref/pr_text_color.asp) | 设置文本颜色。                                               |
| [direction](https://www.w3school.com.cn/cssref/pr_text_direction.asp) | 指定文本的方向 / 书写方向。                                  |
| [letter-spacing](https://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp) | 设置字符间距。                                               |
| [line-height](https://www.w3school.com.cn/cssref/pr_dim_line-height.asp) | 设置行高。                                                   |
| [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | 指定文本的水平对齐方式。                                     |
| [text-decoration](https://www.w3school.com.cn/cssref/pr_text_text-decoration.asp) | 指定添加到文本的装饰效果。                                   |
| [text-indent](https://www.w3school.com.cn/cssref/pr_text_text-indent.asp) | 指定文本块中首行的缩进。                                     |
| [text-shadow](https://www.w3school.com.cn/cssref/pr_text-shadow.asp) | 指定添加到文本的阴影效果。                                   |
| [text-transform](https://www.w3school.com.cn/cssref/pr_text_text-transform.asp) | 控制文本的大小写。                                           |
| [text-overflow](https://www.w3school.com.cn/cssref/pr_text-overflow.asp) | 指定应如何向用户示意未显示的溢出内容。                       |
| [unicode-bidi](https://www.w3school.com.cn/cssref/pr_unicode-bidi.asp) | 与 direction 属性一起使用，设置或返回是否应重写文本来支持同一文档中的多种语言。 |
| [vertical-align](https://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp) | 指定文本的垂直对齐方式。                                     |
| [white-space](https://www.w3school.com.cn/cssref/pr_text_white-space.asp) | 指定如何处理元素内的空白。                                   |
| [word-spacing](https://www.w3school.com.cn/cssref/pr_text_word-spacing.asp) | 设置单词间距。                                               |

#### 1. 文本颜色

>color 属性用于设置文本的颜色。颜色由以下值指定：
>
>- 颜色名 - 比如 "red"
>- 十六进制值 - 比如 "#ff0000"
>- RGB 值 - 比如 "rgb(255,0,0)"
>
>页面的默认文本颜色是在 body 选择器中定义的。
>
>```css
>body {
>  color: blue;
>}
>
>h1 {
>  color: green;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color)
>
>**提示：**对于 W3C compliant CSS：如果您定义了 color 属性，则还必须定义 background-color 属性。

#### 2. 文本颜色和背景色

>在本例中，我们定义了 background-color 属性和 color 属性：
>
>```css
>body {
>  background-color: lightgrey;
>  color: blue;
>}
>
>h1 {
>  background-color: black;
>  color: white;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_color_bg)

#### 3. 文本对齐

>text-align 属性用于设置文本的水平对齐方式。
>
>文本可以左对齐或右对齐，或居中对齐。
>
>下例展示了居中对齐以及左右对齐的文本（如果文本方向是从左到右，则默认为左对齐；如果文本方向是从右到左，则默认是右对齐）：
>
>```css
>h1 {
>  text-align: center;/* 居中对齐 */
>}
>
>h2 {
>  text-align: left;/* 左对齐 */
>}
>
>h3 {
>  text-align: right;/* 右对齐 */
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text-align)
>
>当 text-align 属性设置为 "justify" 后，将拉伸每一行，以使每一行具有相等的宽度，并且左右边距是直的（就像在杂志和报纸中）：
>
>```css
>div {
>text-align: justify;
>}
>  ```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text-align_all)

##### 3.1 文本方向

>direction 和 unicode-bidi 属性可用于更改元素的文本方向：
>
>```css
>p {
>  direction: rtl;
>  unicode-bidi: bidi-override;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text_direction)

##### 3.2 垂直对齐

>vertical-align 属性设置元素的垂直对齐方式。
>
>本例演示如何设置文本中图像的垂直对齐方式：
>
>```css
>img.top {
>  vertical-align: top;/* 上对齐的图像 */
>}
>
>img.middle {
>  vertical-align: middle;/* 居中对齐的图像 */
>}
>
>img.bottom {
>  vertical-align: bottom;/* 下对齐的图像 */
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_vertical-align)

#### 4. 文字装饰

>text-decoration 属性用于设置或删除文本装饰。
>
>text-decoration: none; 通常用于从链接上删除下划线：
>
>```css
>a {
>  text-decoration: none;/* 删除下划线 */
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text-decoration_link)
>
>其他 text-decoration 值用于装饰文本：
>
>```css
>h1 {
>  text-decoration: overline;/* 上线 */
>}
>
>h2 {
>  text-decoration: line-through;/* 中线 */
>}
>
>h3 {
>  text-decoration: underline;/* 下线 */
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text-decoration)
>
>**注释：**建议不要在非链接文本加下划线，因为这经常会使读者感到困惑。

#### 5. 文本转换

>text-transform 属性用于指定文本中的大写和小写字母。
>
>它可用于将所有内容转换为大写或小写字母，或将每个单词的首字母大写：
>
>```css
>p.uppercase {
>  text-transform: uppercase; /* 全部大写 */
>}
>
>p.lowercase {
>  text-transform: lowercase;/* 全部小写 */
>}
>
>p.capitalize {
>  text-transform: capitalize;/* 首拼字母大写 */
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text-transform)

#### 6. 文字缩进

>text-indent 属性用于指定文本第一行的缩进：
>
>```css
>p {
>  text-indent: 50px;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text-indent)

#### 7. 字母间距

>letter-spacing 属性用于指定文本中字符之间的间距。
>
>下例演示如何增加或减少字符之间的间距：
>
>```css
>h1 {
>  letter-spacing: 3px;
>}
>
>h2 {
>  letter-spacing: -3px;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_letter-spacing)

#### 8.行高

>line-height 属性用于指定行之间的间距：
>
>```css
>p.small {
>  line-height: 0.8;
>}
>
>p.big {
>  line-height: 1.8;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_line-height)

#### 9.字间距

>word-spacing 属性用于指定文本中单词之间的间距。
>
>下例演示如何增加或减少单词之间的间距：
>
>```css
>h1 {
>  word-spacing: 10px;
>}
>
>h2 {
>  word-spacing: -5px;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text_word-spacing)

#### 10. 空白

>white-space 属性指定元素内部空白的处理方式。
>
>此例演示如何禁用元素内的文本换行：
>
>```css
>p {
>  white-space: nowrap;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_text_white-space)

#### 11. 文本阴影

>text-shadow 属性为文本添加阴影。
>
>最简单的用法是只指定水平阴影（2px）和垂直阴影（2px）：
>
>文字阴影效果！
>
>```
>h1 {
>  text-shadow: 2px 2px;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css3_text-shadow_1)
>
>接下来，向阴影添加颜色（红色）：
>
>```
>h1 {
>  text-shadow: 2px 2px red;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css3_text-shadow_2)
>
>然后，向阴影添加模糊效果（5px）：
>
>```
>h1 {
>  text-shadow: 2px 2px 5px red;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css3_text-shadow_3)

###  [CSS 列表](https://www.runoob.com/css/css-list.html)

###  [CSS Fonts(字体)](https://www.runoob.com/css/css-font.html)

#### 1. font-family 属性

>在 CSS 中，我们使用 font-family 属性规定文本的字体。
>
>font-family 属性应包含多个字体名称作为“后备”系统，以确保浏览器/操作系统之间的最大兼容性。请以您需要的字体开始，并以通用系列结束（如果没有其他可用字体，则让浏览器选择通用系列中的相似字体）。字体名称应以逗号分隔。
>
>**注释：**如果字体名称不止一个单词，则必须用引号引起来，例如："Times New Roman"。
>
>为三个段落规定不同的字体：
>
>```css
>.p1 {
>  font-family: "Times New Roman", Times, serif;
>}
>
>.p2 {
>  font-family: Arial, Helvetica, sans-serif;
>}
>
>.p3 {
>  font-family: "Lucida Console", "Courier New", monospace;
>}
>```
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=css_font-family_1)

###  [CSS 链接(link)](https://www.runoob.com/css/css-link.html)

###  [CSS Display(显示)](https://www.runoob.com/css/css-display-visibility.html)

###  [CSS Float（浮动）](https://www.runoob.com/css/css-float.html)

###  [CSS Position(定位)](https://www.runoob.com/css/css-positioning.html)

###  [CSS margin(外边距)](https://www.runoob.com/css/css-margin.html)

###  [CSS padding（填充）](https://www.runoob.com/css/css-padding.html)

###  [CSS Border(边框)](https://www.runoob.com/css/css-border.html)

###  [CSS 轮廓（outline）属性](https://www.runoob.com/css/css-outline.html)

###  [CSS 伪类](https://www.runoob.com/css/css-pseudo-classes.html)

###  [CSS 伪元素](https://www.runoob.com/css/css-pseudo-elements.html) 

###  [CSS Overflow](https://www.runoob.com/css/css-overflow.html)

###  [CSS Table(表格)](https://www.runoob.com/css/css-table.html)

###  [CSS 盒子模型](https://www.runoob.com/css/css-boxmodel.html)

###  [CSS 分组和嵌套](https://www.runoob.com/css/css-grouping-nesting.html)

###  [CSS 尺寸 (Dimension)](https://www.runoob.com/css/css-dimension.html)

###  [CSS 对齐](https://www.runoob.com/css/css-align.html)

###  [CSS 组合选择符](https://www.runoob.com/css/css-combinators.html)

### CSS 动画