[TOC]

# Xml

> **XML 指可扩展标记语言**
>
> **XML 被设计用来传输和存储数据。**
>
> **在我们的 XML 教程中，你将了解什么是 XML，以及 XML 与 HTML 之间的差异。**
>
> **XML 很重要，也很容易学习。**

## XML 简介

> **XML 被设计用来传输和存储数据。**
> **HTML 被设计用来显示数据。**

### 应该掌握的基础知识：

> 在您继续学习之前，需要对以下知识有基本的了解：
> - HTML / XHTML
> - JavaScript

### 什么是 XML?

> - XML 指可扩展标记语言（*EX*tensible *M*arkup *L*anguage）
> - XML 是一种*标记语言*，很类似 HTML
> - XML 的设计宗旨是*传输数据*，而非显示数据
> - XML 标签没有被预定义。您需要*自行定义标签*。
> - XML 被设计为具有*自我描述性*。
> - XML 是 *W3C 的推荐标准*

### XML 与 HTML 的主要差异

> XML 不是 HTML 的替代。
> XML 和 HTML 为不同的目的而设计：
> XML 被设计为传输和存储数据，其焦点是数据的内容。
> HTML 被设计用来显示数据，其焦点是数据的外观。
> HTML 旨在显示信息，而 XML 旨在传输信息。

### 没有任何行为的 XML

> **XML 是不作为的。**
> 也许这有点难以理解，但是 XML 不会做任何事情。XML 被设计用来结构化、存储以及传输信息。
> 下面是 John 写给 George 的便签，存储为 XML：
> 
> ```xml
> <note>
> <to>George</to>
> <from>John</from>
> <heading>Reminder</heading>
> <body>Don't forget the meeting!</body>
> </note>
> ```
> 上面的这条便签具有自我描述性。它拥有标题以及留言，同时包含了发送者和接受者的信息。
> 
> 但是，这个 XML 文档仍然没有做任何事情。它仅仅是包装在 XML 标签中的纯粹的信息。我们需要编写软件或者程序，才能传送、接收和显示出这个文档。

### XML 仅仅是纯文本

> XML 没什么特别的。它仅仅是纯文本而已。有能力处理纯文本的软件都可以处理 XML。
> 不过，能够读懂 XML 的应用程序可以有针对性地处理 XML 的标签。标签的功能性意义依赖于应用>程序的特性。
### 通过 XML 您可以发明自己的标签
> 
> 上例中的标签没有在任何 XML 标准中定义过（比如` <to>` 和 `<from>`）。这些标签是由文档的创作者发明的。
> 
> 这是因为 XML 没有预定义的标签。
> 
> 在 HTML 中使用的标签（以及 HTML 的结构）是预定义的。HTML 文档只使用在 HTML 标准中定义过的标签（比如` <p>` 、`<h1>` 等等）。
> 
> XML 允许创作者定义自己的标签和自己的文档结构。
### XML 不是对 HTML 的替代
> 
> *XML 是对 HTML 的补充*。
> 
> XML 不会替代 HTML，理解这一点很重要。在大多数 web 应用程序中，XML 用于传输数据，而 HTML 用于格式化并显示数据。
> 
> 对 XML 最好的描述是：
> 
> *XML 是独立于软件和硬件的信息传输工具。*
### XML 是 W3C 的推荐标准
> 
> 可扩展标记语言 (XML) 于 1998 年 2 月 10 日成为 W3C 的推荐标准。

### XML 无所不在
> 
> 当我们看到 XML 标准突飞猛进的开发进度，以及大批的软件开发商采用这个标准的日新月异的速度时，真的是不禁感叹这真是令人叹为观止。
> 
> 目前，XML 在 Web 中起到的作用不会亚于一直作为 Web 基石的 HTML。
> 
> XML 无所不在。XML 是各种应用程序之间进行数据传输的最常用的工具，并且在信息存储和描述领域变得越来越流行。

## XML 的用途

> **XML 应用于 web 开发的许多方面，常用于简化数据的存储和共享。**
### XML 把数据从 HTML 分离
> 
> 如果你需要在 HTML 文档中显示动态数据，那么每当数据改变时将花费大量的时间来编辑 HTML。
> 
> 通过 XML，数据能够存储在独立的 XML 文件中。这样你就可以专注于使用 HTML 进行布局和显示，并确保修改底层数据不再需要对 HTML 进行任何的改变。
> 
> 通过使用几行 JavaScript，你就可以读取一个外部 XML 文件，然后更新 HTML 中的数据内容。
> 
> **提示：**您将在稍后的章节学习更多这方面的内容。

### XML 简化数据共享

> 在真实的世界中，计算机系统和数据使用不兼容的格式来存储数据。
> 
> XML 数据以纯文本格式进行存储，因此提供了一种独立于软件和硬件的数据存储方法。
> 
> 这让创建不同应用程序可以共享的数据变得更加容易。

### XML 简化数据传输
> 
> 通过 XML，可以在不兼容的系统之间轻松地交换数据。
> 
> 对开发人员来说，其中一项最费时的挑战一直是在因特网上的不兼容系统之间交换数据。
> 
> 由于可以通过各种不兼容的应用程序来读取数据，以 XML 交换数据降低了这种复杂性。
### XML 简化平台的变更

> 升级到新的系统（硬件或软件平台），总是非常费时的。必须转换大量的数据，不兼容的数据经常> 会丢失。
> 
> XML 数据以文本格式存储。这使得 XML 在不损失数据的情况下，更容易扩展或升级到新的操作系> 统、新应用程序或新的浏览器。

### XML 使您的数据更有用
> 
> 由于 XML 独立于硬件、软件以及应用程序，XML 使您的数据更可用，也更有用。
> 
> 不同的应用程序都能够访问您的数据，不仅仅在 HTML 页中，也可以从 XML 数据源中进行访问。
> 
> 通过 XML，您的数据可供各种阅读设备使用（手持的计算机、语音设备、新闻阅读器等），还可以> 供盲人或其他残障人士使用。
### XML 用于创建新的 Internet 语言
> 
> 很多新的 Internet 语言是通过 XML 创建的：
> 
> 其中的例子包括：
> 
> - XHTML - 最新的 HTML 版本
> - WSDL - 用于描述可用的 web service
> - WAP 和 WML - 用于手持设备的标记语言
> - RSS - 用于 RSS feed 的语言
> - RDF 和 OWL - 用于描述资源和本体
> - SMIL - 用于描述针针对 web 的多媒体

## XML 树结构

**XML 文档形成了一种树结构，它从“根部”开始，然后扩展到“枝叶”。**

### 一个 XML 文档实例
> 
> XML 使用简单的具有自我描述性的语法：
> 
> ```xml
> <?xml version="1.0" encoding="ISO-8859-1"?>
> <note>
> <to>George</to>
> <from>John</from>
> <heading>Reminder</heading>
> <body>Don't forget the meeting!</body>
> </note>
> ```
> 
> 第一行是 XML 声明。它定义 XML 的版本 (1.0) 和所使用的编码 (ISO-8859-1 = Latin-1/西欧字符集)。
> 
> 下一行描述文档的*根元素*（像在说：“本文档是一个便签”）：
> 
> ```xml
> <note>
> ```
> 
> 接下来 4 行描述根的 4 个*子元素*（to, from, heading 以及 body）：
> 
> ```xml
> <to>George</to>
> <from>John</from>
> <heading>Reminder</heading>
> <body>Don't forget the meeting!</body>
> ```
> 
> 最后一行定义根元素的结尾：
> 
> ```xml
> </note>
> ```
> 
> 从本例可以设想，该 XML 文档包含了 John 给 George 的一张便签。
> 
> XML 具有出色的自我描述性，你同意吗？
### XML 文档形成一种树结构
> 
> XML 文档必须包含*根元素*。该元素是所有其他元素的父元素。
> 
> XML 文档中的元素形成了一棵文档树。这棵树从根部开始，并扩展到树的最底端。
> 
> 所有元素均可拥有子元素：
> 
> ```xml
> <root>
>   <child>
>     <subchild>.....</subchild>
>   </child>
> </root>
> ```
> 
> 父、子以及同胞等术语用于描述元素之间的关系。父元素拥有子元素。相同层级上的子元素成为同> 胞（兄弟或姐妹）。
> 
所有元素均可拥有文本内容和属性（类似 HTML 中）。
> 
>**实例**
>
> ![img](http://www.w3s.com.cn/i/ct_nodetree1.gif)
> 
> 上图表示下面的 XML 中的一本书：
> 
> ```xml
> <bookstore>
> <book category="COOKING">
>   <title lang="en">Everyday Italian</title> 
>   <author>Giada De Laurentiis</author> 
>   <year>2005</year> 
>   <price>30.00</price> 
> </book>
> <book category="CHILDREN">
>   <title lang="en">Harry Potter</title> 
>   <author>J K. Rowling</author> 
>   <year>2005</year> 
>   <price>29.99</price> 
> </book>
> <book category="WEB">
>   <title lang="en">Learning XML</title> 
>   <author>Erik T. Ray</author> 
>   <year>2003</year> 
>   <price>39.95</price> 
> </book>
> </bookstore>
> ```
> 
> 例子中的根元素是 `<bookstore>`。文档中的所有 `<book>` 元素都被包含在 `<bookstore> `> 中。
> 
> `<book> `元素有 4 个子元素：`<title>`、`< author>`、`<year>`、`<price>`。

## XML 语法

> **XML 的语法规则很简单，且很有逻辑。这些规则很容易学习，也很容易使用。**

### 所有 XML 元素都须有关闭标签

> 在 HTML，经常会看到没有关闭标签的元素：
> 
> ```xml
> <p>This is a paragraph
> <p>This is another paragraph
> ```
> 
> 在 XML 中，省略关闭标签是非法的。所有元素都*必须*有关闭标签：
> 
> ```xml
> <p>This is a paragraph</p>
> <p>This is another paragraph</p>
> ```
> 
> **注释：**您也许已经注意到 XML 声明没有关闭标签。这不是错误。声明不属于XML本身的组成部分。它不是 XML 元素，也不需要关闭标签。

### XML 标签对大小写敏感

> XML 元素使用 XML 标签进行定义。
> 
> XML 标签对大小写敏感。在 XML 中，标签 <Letter> 与标签 <letter> 是不同的。
> 
> 必须使用相同的大小写来编写打开标签和关闭标签：
> 
> ```xml
> <Message>这是错误的。</message>
> 
> <message>这是正确的。</message>
> ```
> 
> **注释：**打开标签和关闭标签通常被称为开始标签和结束标签。不论您喜欢哪种术语，它们的概念都是相同的。

### XML 必须正确地嵌套

> 在 HTML 中，常会看到没有正确嵌套的元素：
> 
> ```xml
> <b><i>This text is bold and italic</b></i>
> ```
> 
> 在 XML 中，所有元素都*必须*彼此正确地嵌套：
> 
> ```xml
> <b><i>This text is bold and italic</i></b>
> ```
> 
> 在上例中，正确嵌套的意思是：由于 <i> 元素是在 <b> 元素内打开的，那么它必须在 <b> 元素内关闭。

### XML 文档必须有根元素

> XML 文档必须有一个元素是所有其他元素的*父元素*。该元素称为*根元素*。
> 
> ```xml
> <root>
>   <child>
>     <subchild>.....</subchild>
>   </child>
> </root>
> ```

### XML 的属性值须加引号

> 与 HTML 类似，XML 也可拥有属性（名称/值的对）。
>
> 在 XML 中，XML 的属性值须加引号。请研究下面的两个 XML 文档。第一个是错误的，第二个是正确的：
>
> ```xml
> <note date=08/08/2008>
> <to>George</to>
> <from>John</from>
> </note> 
> 
> <note date="08/08/2008">
> <to>George</to>
> <from>John</from>
> </note> 
> ```
>
> 在第一个文档中的错误是，note 元素中的 date 属性没有加引号。

### 实体引用

> 在 XML 中，一些字符拥有特殊的意义。
> 
> 如果你把字符 "<" 放在 XML 元素中，会发生错误，这是因为解析器会把它当作新元素的开始。
> 
> 这样会产生 XML 错误：
> 
> ```xml
> <message>if salary < 1000 then</message>
> ```
> 
> 为了避免这个错误，请用*实体引用*来代替 "<" 字符：
> 
> ```xml
> <message>if salary &lt; 1000 then</message> 
> ```
> 
> 在 XML 中，有 5 个预定义的实体引用：
> 
> |  &lt;  |  <   |  小于  |
> | :----: | :--: | :----: |
> |  &gt;  |  >   |  大于  |
> | &amp;  |  &   |  和号  |
> | &apos; |  '   | 单引号 |
> | &quot; |  "   |  引号  |
> 
> **注释：**在 XML 中，只有字符 "<" 和 "&" 确实是非法的。大于号是合法的，但是用实体引用来代替它是一个好习惯。

### XML 中的注释

> 在 XML 中编写注释的语法与 HTML 的语法很相似：
> 
> ```xml
> <!-- This is a comment --> 
> ```
### 在 XML 中，空格会被保留

> HTML 会把多个连续的空格字符裁减（合并）为一个：
> 
> ```xml
> HTML:	Hello           my name is David.
> 输出:	Hello my name is David.
> ```
> 
> 在 XML 中，文档中的空格不会被删节。

### XML 以 LF 存储换行

> 在 Windows 应用程序中，换行通常以一对字符来存储：回车符 (CR) 和换行符 (LF)。这对字符与打>字机设置新行的动作有相似之处。在 Unix 应用程序中，新行以 LF 字符存储。而 Macintosh 应用程>序使用 CR 来存储新行。

## XML 元素

>**XML 文档包含 XML 元素。**

### 什么是 XML 元素？

> *XML 元素*指的是从（且包括）开始标签直到（且包括）结束标签的部分。
> 
> 元素可包含其他元素、文本或者两者的混合物。元素也可以拥有属性。
> 
> ```xml
> <bookstore>
> <book category="CHILDREN">
>   <title>Harry Potter</title> 
>   <author>J K. Rowling</author> 
>   <year>2005</year> 
>   <price>29.99</price> 
> </book>
> <book category="WEB">
>   <title>Learning XML</title> 
>   <author>Erik T. Ray</author> 
>   <year>2003</year> 
>   <price>39.95</price> 
> </book>
> </bookstore> 
> ```
> 
> 在上例中，`<bookstore>` 和 `<book>` 都拥有*元素内容*，因为它们包含了其他元素。 `<author> `只有*文本内容*，因为它仅包含文本。
> 
> 在上例中，只有 `<book>` 元素拥有*属性* `(category="CHILDREN")`。

### XML 命名规则

> XML 元素必须遵循以下命名规则：
> 
> - 名称可以含字母、数字以及其他的字符
> - 名称不能以数字或者标点符号开始
> - 名称不能以字符 “xml”（或者 XML、Xml）开始
> - 名称不能包含空格
> 
> 可使用任何名称，没有保留的字词。

### 最佳命名习惯

> 使名称具有描述性。使用下划线的名称也很不错。
> 
> 名称应当比较简短，比如：<book_title>，而不是：<the_title_of_the_book>。
> 
> 避免 "-" 字符。如果您按照这样的方式进行命名："first-name"，一些软件会认为你需要提取>第一个单词。
> 
> 避免 "." 字符。如果您按照这样的方式进行命名："first.name"，一些软件会认为 "name" >是对象 "first" 的属性。
> 
> 避免 ":" 字符。冒号会被转换为命名空间来使用（稍后介绍）。
> 
> XML 文档经常有一个对应的数据库，其中的字段会对应 XML 文档中的元素。有一个实用的经验，即使用数据库的名称规则来命名 XML 文档中的元素。
> 
> 非英语的字母比如 éòá 也是合法的 XML 元素名，不过需要留意当软件开发商不支持这些字符时>可能出现的问题。
### XML 元素是可扩展的
> 
> XML 元素是可扩展，以携带更多的信息。
> 
> 请看下面这个 XML 例子：
> 
> ```xml
> <note>
> <to>George</to>
> <from>John</from>
> <body>Don't forget the meeting!</body>
> </note> 
> ```
> 
> 让我们设想一下，我们创建了一个应用程序，可将 <to>、<from> 以及 <body> 元素提取出来，并产生以下的输出：
> 
> ```
> MESSAGE
> To: George
> From: John
> 
> Don't forget the meeting!
> ```
> 
> 想象一下，之后这个 XML 文档作者又向这个文档添加了一些额外的信息：
> 
> ```xml
> <note>
> <date>2008-08-08</date>
> <to>George</to>
> <from>John</from>
> <heading>Reminder</heading>
> <body>Don't forget the meeting!</body>
> </note>
> ```
> 
> 那么这个应用程序会中断或崩溃吗？
> 
> 不会。这个应用程序仍然可以找到 XML 文档中的 <to>、<from> 以及 <body> 元素，并产生同样的输出。
> 
> XML 的优势之一，就是可以经常在不中断应用程序的情况进行扩展。

## XML 属性

> XML 元素可以在开始标签中包含属性，类似 HTML。
> 属性 (Attribute) 提供关于元素的额外（附加）信息。

### XML 属性

> 从 HTML，你会回忆起这个：`<img src="computer.gif">`。"src" 属性提供有关 `<img>` 元素的额外信息。
>
> 在 HTML 中（以及在 XML 中），属性提供有关元素的额外信息：
>
> ```xml
> <img src="computer.gif">
> <a href="demo.asp"> 
> ```
>
> 属性通常提供不属于数据组成部分的信息。在下面的例子中，文件类型与数据无关，但是对需要处理这个元素的软件来说却很重要：
>
> ```xml
> <file type="gif">computer.gif</file>
> ```
>
> 

### XML 属性必须加引号

>属性值必须被引号包围，不过单引号和双引号均可使用。比如一个人的性别，person 标签可以这样写：
>
>```xml
><person sex="female">
>```
>
>或者这样也可以：
>
>```xml
><person sex='female'>
>```
>
>**注释：**如果属性值本身包含双引号，那么有必要使用单引号包围它，就像这个例子：
>
>```xml
><gangster name='George "Shotgun" Ziegler'>
>```
>
>或者可以使用实体引用：
>
>```xml
><gangster name="George &quot;Shotgun&quot; Ziegler">
>```
>
>

### XML 元素 vs. 属性

> 请看这些例子：
>
> ```xml
> <person sex="female">
>   <firstname>Anna</firstname>
>   <lastname>Smith</lastname>
> </person> 
> 
> <person>
>   <sex>female</sex>
>   <firstname>Anna</firstname>
>   <lastname>Smith</lastname>
> </person> 
> ```
>
> 在第一个例子中，sex 是一个属性。在第二个例子中，sex 则是一个子元素。两个例子均可提供相同的信息。
>
> 没有什么规矩可以告诉我们什么时候该使用属性，而什么时候该使用子元素。我的经验是在 HTML 中，属性用起来很便利，但是在 XML 中，您应该尽量避免使用属性。如果信息感觉起来很像数据，那么请使用子元素吧。

### 我最喜欢的方式

>下面的三个 XML 文档包含完全相同的信息：
>
>第一个例子中使用了 date 属性：
>
> >```xml
> ><note date="08/08/2008">
> ><to>George</to>
> ><from>John</from>
> ><heading>Reminder</heading>
> ><body>Don't forget the meeting!</body>
> ></note> 
> >```
>
>第二个例子中使用了 date 元素：
>
> >```xml
> ><note>
> ><date>08/08/2008</date>
> ><to>George</to>
> ><from>John</from>
> ><heading>Reminder</heading>
> ><body>Don't forget the meeting!</body>
> ></note> 
> >```
>
>第三个例子中使用了扩展的 date 元素（这是我的最爱）：
>
> >```xml
> ><note>
> ><date>
> >  <day>08</day>
> >  <month>08</month>
> >  <year>2008</year>
> ></date>
> ><to>George</to>
> ><from>John</from>
> ><heading>Reminder</heading>
> ><body>Don't forget the meeting!</body>
> ></note>
> >```

### 避免 XML 属性？

>因使用属性而引起的一些问题：
>
>- 属性无法包含多重的值（元素可以）
>- 属性无法描述树结构（元素可以）
>- 属性不易扩展（为未来的变化）
>- 属性难以阅读和维护
>
>请尽量使用元素来描述数据。而仅仅使用属性来提供与数据无关的信息。
>
>不要做这样的蠢事（这不是 XML 应该被使用的方式）：
>
>```xml
><note day="08" month="08" year="2008"
>to="George" from="John" heading="Reminder" 
>body="Don't forget the meeting!">
></note>
>```

### 针对元数据的 XML 属性

>有时候会向元素分配 ID 引用。这些 ID 索引可用于标识 XML 元素，它起作用的方式与 HTML 中 ID 属性是一样的。这个例子向我们演示了这种情况：
>
>```xml
><messages>
>  <note id="501">
>    <to>George</to>
>    <from>John</from>
>    <heading>Reminder</heading>
>    <body>Don't forget the meeting!</body>
>  </note>
>  <note id="502">
>    <to>John</to>
>    <from>George</from>
>    <heading>Re: Reminder</heading>
>    <body>I will not</body>
>  </note> 
></messages>
>```
>
>上面的 ID 仅仅是一个标识符，用于标识不同的便签。它并不是便签数据的组成部分。
>
>在此我们极力向您传递的理念是：元数据（有关数据的数据）应当存储为属性，而数据本身应当存储为元素。


## XML 验证

>拥有正确语法的 XML 被称为“形式良好”的 XML。
>
>通过 DTD 验证的 XML 是“合法”的 XML。

### 形式良好的 XML 文档

>**“形式良好”或“结构良好”的 XML 文档拥有正确的语法。**
>
>“形式良好”（Well Formed）的 XML 文档会遵守前几章介绍过的 XML 语法规则：
>
>- XML 文档必须有根元素
>- XML 文档必须有关闭标签
>- XML 标签对大小写敏感
>- XML 元素必须被正确的嵌套
>- XML 属性必须加引号
>
>```xml
><?xml version="1.0" encoding="ISO-8859-1"?>
><note>
><to>George</to>
><from>John</from>
><heading>Reminder</heading>
><body>Don't forget the meeting!</body>
></note>
>```

### 验证 XML 文档

>合法的 XML 文档是“形式良好”的 XML 文档，同样遵守文档类型定义 (DTD) 的语法规则：
>
>```xml
><?xml version="1.0" encoding="ISO-8859-1"?>
><!DOCTYPE note SYSTEM "Note.dtd">
><note>
><to>George</to>
><from>John</from>
><heading>Reminder</heading>
><body>Don't forget the meeting!</body>
></note>  
>```
>
>在上例中，DOCTYPE 声明是对外部 DTD 文件的引用。下面的段落展示了这个文件的内容。

### XML DTD

>DTD 的作用是定义 XML 文档的结构。它使用一系列合法的元素来定义文档结构：
>
>```xml
><!DOCTYPE note [
>  <!ELEMENT note (to,from,heading,body)>
>  <!ELEMENT to      (#PCDATA)>
>  <!ELEMENT from    (#PCDATA)>
>  <!ELEMENT heading (#PCDATA)>
>  <!ELEMENT body    (#PCDATA)>
>]> 
>```
>
>如果您希望学习 DTD，请访问我们的 [DTD 教程](https://www.w3school.com.cn/dtd/index.asp)。

### XML Schema

>W3C 支持一种基于 XML 的 DTD 代替者，它名为 XML Schema：
>
>```xml
><xs:element name="note">
>
><xs:complexType>
>  <xs:sequence>
>    <xs:element name="to"      type="xs:string"/>
>    <xs:element name="from"    type="xs:string"/>
>    <xs:element name="heading" type="xs:string"/>
>    <xs:element name="body"    type="xs:string"/>
>  </xs:sequence>
></xs:complexType>
>
></xs:element> 
>```
>
>如果您需要学习 XML Schema，请访问我们的 [XML Schema 教程](https://www.w3school.com.cn/schema/index.asp)。

## XML 验证器

### XML 错误会终止您的程序

>XML 文档中的错误会终止你的 XML 程序。
>
>W3C 的 XML 规范声明：如果 XML 文档存在错误，那么程序就不应当继续处理这个文档。理由是，XML 软件应当轻巧，快速，具有良好的兼容性。
>
>如果使用 HTML，创建包含大量错误的文档是有可能的（比如你忘记了结束标签）。其中一个主要的原因是 HTML 浏览器相当臃肿，兼容性也很差，并且它们有自己的方式来确定当发现错误时文档应该显示为什么样子。
>
>使用 XML 时，这种情况不应当存在。

### 对您的 XML 进行语法检查

>为了帮助您对 XML 进行语法检查，我们创建了一个 XML 验证器。
>
>把您的 XML 粘贴到下面的文本框中，然后点击"验证"按钮来进行语法检查。
>
>```xml
><?xml version="1.0" ?> 
>
><note>
><to>George</to> 
><from>John</Ffrom> 
><heading>Reminder</heading> 
><body>Don't forget the meeting!</body> 
></note>
>```

### 对您的 XML 文件进行语法检查

>您可以通过把 XML 文件的 URL 键入下面的输入框中，然后点击"验证"按钮，来对某个在线的 XML 文件进行语法检查：
>
>文件名:
>
>```
>/xml/note_error.xml
>```
>
>**注释：**如果返回的的错误是"拒绝访问"，说明您的浏览器安全设置不允许跨域的文件访问.
>
>*文件 "note_error.xml" 的作用是演示浏览器的错误处理，如果需要返回无错的消息，可以将该文件替换为其他文件，比如 "books.xml"。*

### 根据 DTD 来验证 XML

>只要把 DOCTYPE 声明添加到您的 XML 中，然后点击验证按钮即可：
>
>```xml
><?xml version="1.0" ?> 
><!DOCTYPE note [
>  <!ELEMENT note (to,from,heading,body)>
>  <!ELEMENT to      (#PCDATA)>
>  <!ELEMENT from    (#PCDATA)>
>  <!ELEMENT heading (#PCDATA)>
>  <!ELEMENT body    (#PCDATA)>
>]>
><note>
><to>George</to> 
><from>John</Ffrom> 
><heading>Reminder</heading> 
><body>Don't forget the meeting!</body> 
></note>
>```
>
>**注释：**只有在 nternet Explorer 中，可以根据 DTD 来验证 XML。Firefox, Mozilla, Netscape 以及 Opera 做不到这一点。

## XML 浏览器

> **几乎所有的主流浏览器均支持 XML 和 XSLT。**

### Mozilla Firefox

> 从 1.0.2 版本开始，Firefox 就已开始支持 XML 和 XSLT（包括 CSS）。

### Mozilla

>Mozilla 含有用于 XML 解析的 Expat，并支持显示 XML + CSS。Mozilla 同时拥有对 Namespaces 的某些支持。
>
>Mozilla 同样可做到对 XSLT 的执行（XSLT implementation）。

### Netscape

> 自从版本 8 开始，Netscape 开始使用 Mozilla 的引擎，因此它对 XML / XSLT 的支持与 Mozilla 是相同的。

### Opera

> 自从版本 9 开始，Opera 已经拥有对 XML / XSLT（以及 CSS）的支持。版本 8 仅支持 XML + CSS。

### Internet Explorer

> 自从版本 6 开始，Internet Explorer 就开始支持 XML、Namespaces、CSS、XSLT 以及 XPath。
>
> **注释：**Internet Explorer 5 同样拥有对 XML 的支持，但是 XSL 部分与 W3C 的官方标准*不兼容*！

## XML 查看

>**在所有现代浏览器中，均能够查看原始的 XML 文件。**
>
>**不要指望 XML 文件会直接显示为 HTML 页面。**

### 查看 XML 文件

>![img](https://www.w3school.com.cn/i/ct_viewxml.gif)
>
>查看这个 XML 文件：[note.xml](https://www.w3school.com.cn/example/xmle/note.xml)
>
>打开 XML 文件 - XML 文档将显示为代码颜色化的根以及子元素。通过点击元素左侧的加号或减号，可以展开或收起元素的结构。如需查看不带有 + 和 - 符号的源代码，请从浏览器菜单中选择“查看源代码”。
>
>**注释：**在 Netscape, Opera 以及 Safari 中，仅仅会显示元素文本！要查看原始的 XML，请右击页面，然后选择“查看源代码”。

### 查看某个无效的 XML 文件

> 如果浏览器打开了某个有错误的 XML 文件，那么它会报告这个错误。
>
> 请查看这个 XML 文件：[note_error.xml](https://www.w3school.com.cn/example/xmle/note_error.xml)

### 其他的 XML 实例

> 请查看这些 XML 文档，这会有助于您建立对 XML 的感性认识。
>
> - [一个 XML 的 CD 目录](https://www.w3school.com.cn/example/xmle/cd_catalog.xml)
>
>   这是我父亲的 CD 收藏，被存储为 XML 数据（我猜可能是很老很无聊的题目... :-)）
>
> - [一个 XML 的植物目录](https://www.w3school.com.cn/example/xmle/plant_catalog.xml)
>
>   来自园艺店的植物目录，存储为 XML 数据。
>
> - [一个简单的菜单](https://www.w3school.com.cn/example/xmle/simple.xml)
>
>   这是来自餐馆的早餐菜单，存储为 XML 数据。

### 为什么 XML 会这样显示？

>XML 文档不会携带有关如何显示数据的信息。
>
>由于 XML 标签由 XML 文档的作者“发明”，浏览器无法确定像 `<table>` 这样一个标签究竟描述一个 HTML 表格还是一个餐桌。
>
>在没有任何有关如何显示数据的信息的情况下，大多数的浏览器都会仅仅把 XML 文档显示为源代码。
>
>在下面的章节，我们会了解几个有关这个显示问题的解决方案，其中会使用 CSS、XSL、JavaScript 以及 XML 数据岛。

## XML CSS

> **通过使用 CSS，可为 XML 文档添加显示信息。**

### 使用 CSS 显示您的 XML？

>使用 CSS 来格式化 XML 文档是有可能的。
>
>下面的例子就是关于如何使用 CSS 样式表来格式化 XML 文档：
>
>这是 XML 文件：[CD 目录](https://www.w3school.com.cn/example/xmle/cd_catalog.xml)
>
>这是样式表：[CSS 文件](https://www.w3school.com.cn/example/xmle/xmle_cd_catalog.txt)
>
>最后，请查看效果：[由 CSS 文件格式化的 CD 目录](https://www.w3school.com.cn/example/xmle/cd_catalog_with_css.xml)
>
>下面是此XML文件的一个片断。 第二行，`<?xml-stylesheet type="text/css" href="cd_catalog.css"?>`，把这个 XML 文件链接到 CSS 文件：
>
>```xml
><?xml version="1.0" encoding="ISO-8859-1"?>
><?xml-stylesheet type="text/css" href="cd_catalog.css"?>
><CATALOG>
>  <CD>
>    <TITLE>Empire Burlesque</TITLE>
>    <ARTIST>Bob Dylan</ARTIST>
>    <COUNTRY>USA</COUNTRY>
>    <COMPANY>Columbia</COMPANY>
>    <PRICE>10.90</PRICE>
>    <YEAR>1985</YEAR>
>  </CD>
>  <CD>
>    <TITLE>Hide your heart</TITLE>
>    <ARTIST>Bonnie Tyler</ARTIST>
>    <COUNTRY>UK</COUNTRY>
>    <COMPANY>CBS Records</COMPANY>
>    <PRICE>9.90</PRICE>
>    <YEAR>1988</YEAR>
>  </CD>
>.
>.
>.
>.
></CATALOG>
>```
>
>**注释：**使用 CSS 格式化 XML 不是常用的方法，更不能代表 XML 文档样式化的未来。W3C 推荐使用 XSLT。

## XML XSLT

> **通过使用 XSLT，您可以向 XML 文档添加显示信息。**

### 使用 XSLT 显示 XML

>XSLT 是首选的 XML 样式表语言。
>
>XSLT (eXtensible Stylesheet Language Transformations) 远比 CSS 更加完善。
>
>使用 XSLT 的方法之一是在浏览器显示 XML 文件之前，先把它转换为 HTML，正如以下的这些例子演示的那样：
>
>[查看 XML 文件](https://www.w3school.com.cn/example/xmle/simple.xml)，[XSLT 样式表](https://www.w3school.com.cn/example/xmle/simple.xsl)，[查看结果](https://www.w3school.com.cn/example/xmle/simplexsl.xml)。
>
>下面是此 XML 文件的一个片断。 第二行，`<?xml-stylesheet type="text/xsl" href="simple.xsl"?>`，把这个 XML 文件链接到 XSL 文件：
>
>```xml
><?xml version="1.0" encoding="ISO-8859-1"?>
><?xml-stylesheet type="text/xsl" href="simple.xsl"?>
><breakfast_menu>
>  <food>
>    <name>Belgian Waffles</name>
>    <price>$5.95</price>
>    <description>
>       two of our famous Belgian Waffles
>    </description>
>    <calories>650</calories>
>  </food>
></breakfast_menu>
>```
>
>如果您需要学习更多有关 XSLT 的知识，请访问我们的《[XSLT 教程](https://www.w3school.com.cn/xsl/index.asp)》。

### 在服务器上通过 XSLT 转换 XML

>在上例中，XSLT 转换是由浏览器完成的，浏览器读取的是 XML 文件。
>
>在使用 XSLT 来转换 XML 时，不同的浏览器可能会产生不同结果。为了减少这种问题，可以在服务器上进行 XSLT 转换。
>
>[查看结果](https://www.w3school.com.cn/xml/simple.asp)
>
>请注意，不论转换由服务器还是由浏览器进行，输出结果完成相同。

# XML JavaScript

## XMLHttpRequest 对象

>- [XML XSLT](https://www.w3school.com.cn/xml/xml_xsl.asp)
>- [XML 解析器](https://www.w3school.com.cn/xml/xml_parser.asp)

**XMLHttpRequest 对象用于在后台与服务器交换数据。**

### 什么是 XMLHttpRequest 对象？

>XMLHttpRequest 对象用于在后台与服务器交换数据。
>
>XMLHttpRequest 对象是*开发者的梦想*，因为您能够：
>
>- 在不重新加载页面的情况下更新网页
>- 在页面已加载后从服务器请求数据
>- 在页面已加载后从服务器接收数据
>- 在后台向服务器发送数据
>
>所有现代的浏览器都支持 XMLHttpRequest 对象。
>
>如需学习更多有关 XMLHttpRequest 对象的知识，请学习我们的 [XML DOM 教程](https://www.w3school.com.cn/xmldom/index.asp)。
>
>实例：[当键入文本时与服务器进行 XML HTTP 通信](https://www.w3school.com.cn/tiy/t.asp?f=xdom_httpsuggest)。

### 创建 XMLHttpRequest 对象

>所有现代浏览器 (IE7+、Firefox、Chrome、Safari 以及 Opera) 都内建了 XMLHttpRequest 对象。
>
>通过一行简单的 JavaScript 代码，我们就可以创建 XMLHttpRequest 对象。
>
>创建 XMLHttpRequest 对象的语法：
>
>```xml
>xmlhttp=new XMLHttpRequest();
>```

### 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：

>```javascript
>xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>```
>
>**提示：**在下一章，我们将使用 XMLHttpRequest 对象从服务器取回 XML 信息。
>
>**实例 1**
>
>>```xml
>><script type="text/javascript">
>>var xmlhttp;
>>function loadXMLDoc(url)
>>{
>>xmlhttp=null;
>>if (window.XMLHttpRequest)
>>  {// code for all new browsers
>>  xmlhttp=new XMLHttpRequest();
>>  }
>>else if (window.ActiveXObject)
>>  {// code for IE5 and IE6
>>  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>>  }
>>if (xmlhttp!=null)
>>  {
>>  xmlhttp.onreadystatechange=state_Change;
>>  xmlhttp.open("GET",url,true);
>>  xmlhttp.send(null);
>>  }
>>else
>>  {
>>  alert("Your browser does not support XMLHTTP.");
>>  }
>>}
>
>>function state_Change()
>>{
>>if (xmlhttp.readyState==4)
>>{// 4 = "loaded"
>>if (xmlhttp.status==200)
>>{// 200 = OK
>>// ...our code here...
>>}
>>else
>>{
>>alert("Problem retrieving XML data");
>>}
>>}
>>}
>></script>
>>
>>```
>
>>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=xdom_httprequest_js)
>
>**注释：**onreadystatechange 是一个事件句柄。它的值 (state_Change) 是一个函数的名称，当 XMLHttpRequest 对象的状态发生改变时，会触发此函数。状态从 0 (uninitialized) 到 4 (complete) 进行变化。仅在状态为 4 时，我们才执行代码。

### 为什么使用 Async=true ？

>我们的实例在 open() 的第三个参数中使用了 "true"。
>
>该参数规定请求是否异步处理。
>
>True 表示脚本会在 send() 方法之后继续执行，而不等待来自服务器的响应。
>
>onreadystatechange 事件使代码复杂化了。但是这是在没有得到服务器响应的情况下，防止代码停止的最安全的方法。
>
>通过把该参数设置为 "false"，可以省去额外的 onreadystatechange 代码。如果在请求失败时是否执行其余的代码无关紧要，那么可以使用这个参数。

### XML / ASP

>您也可以把 XML 文档打开并发送到服务器上的 ASP 页面，分析此请求，然后传回结果。
>
>>```xml
>><html>
>><body>
>><script type="text/javascript">
>>xmlHttp=null;
>>if (window.XMLHttpRequest)
>>{// code for IE7, Firefox, Opera, etc.
>>xmlHttp=new XMLHttpRequest();
>>}
>>else if (window.ActiveXObject)
>>{// code for IE6, IE5
>>xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
>>}
>>if (xmlHttp!=null)
>>{
>>xmlHttp.open("GET", "note.xml", false);
>>xmlHttp.send(null);
>>xmlDoc=xmlHttp.responseText;
>>    xmlHttp.open("POST", "demo_dom_http.asp", false);
>>xmlHttp.send(xmlDoc);
>>document.write(xmlHttp.responseText);
>>}
>>else
>>{
>>alert("Your browser does not support XMLHTTP.");
>>}
>></script>
>></body>
>></html>
>
>**ASP 页面，由 VBScript 编写：**
>
>>```xml
>><%
>>set xmldoc = Server.CreateObject("Microsoft.XMLDOM")
>>xmldoc.async=false
>>xmldoc.load(request)
>>for each x in xmldoc.documentElement.childNodes
>>if x.NodeName = "to" then name=x.text
>>next
>>response.write(name)
>>%>
>
>通过使用 response.write 属性把结果传回客户端。
>
>[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=xdom_httpsend_2)

### XMLHttpRequest 对象是 W3C 的标准吗？

>任何 W3C 推荐标准均未规定 XMLHttpRequest 对象。
>
>不过，W3C DOM Level 3 的 "Load and Save" 规范包含了一些相似的功能性，但是还没有任何浏览器实现它们。

​			**参阅**

> [XML DOM 参考手册: XMLHttpRequest 对象](https://www.w3school.com.cn/xmldom/dom_http.asp)

## XML 解析器

>**所有现代浏览器都内建了供读取和操作 XML 的 XML 解析器。**
>
>**解析器把 XML 转换为 XML DOM 对象 - 可通过 JavaScript 操作的对象。**

​		**实例**

>W3School 提供的实例是独立于浏览器和平台的。这些例子可以在所有现代浏览器中运行。
>
>- [加载并解析 XML 文件](https://www.w3school.com.cn/tiy/t.asp?f=xmle_node_parsertest_1)
>- [加载并解析 XML 字符串](https://www.w3school.com.cn/tiy/t.asp?f=xmle_node_parsertest_2)

### 解析 XML

>所有现代浏览器都有读取和操作 XML 的内建 XML 解析器。
>
>解析器把 XML 载入内存，然后把它转换为可通过 JavaScript 访问的 [XML DOM 对象](https://www.w3school.com.cn/xmldom/xmldom_reference.asp)。
>
>您将在本教程的下一节中学习更多有关 XML DOM 的知识。
>
>微软的 XML 解析器与其他浏览器中的解析器之间，存在一些差异。微软的解析器支持 XML 文件和 XML 字符串（文本）的加载，而其他浏览器使用单独的解析器。不过，所有的解析器都包含遍历 XML 树、访问插入及删除节点（元素）及其属性的函数。
>
>在本教程中，我们将为您展示如何创建可同时工作于 Internet Explorer 和其他浏览器中的脚本。
>
>**注释：**当我们谈及 XML 解析，我们常常会使用有关 XML 元素的术语：[节点](https://www.w3school.com.cn/xmldom/dom_nodes.asp)。

### 解析 XML 文档

>下面的代码片段把 XML 文档解析到 XML DOM 对象中：
>
>```javascript
>if (window.XMLHttpRequest)
>  {// code for IE7+, Firefox, Chrome, Opera, Safari
>  xmlhttp=new XMLHttpRequest();
>  }
>else
>  {// code for IE6, IE5
>  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>  }
>
>xmlhttp.open("GET","books.xml",false);
>xmlhttp.send();
>xmlDoc=xmlhttp.responseXML; 
>```

#### 其他方法 1：通过微软的 XML 解析器来加载 XML

>微软的 XML 解析器内建于 Internet Explorer 5 以及更高的版本中。
>
>下面的 JavaScript 片段把一个 XML 文档载入解析器中：
>
>```javascript
>var xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
>xmlDoc.async="false";
>xmlDoc.load("note.xml");
>```
>
>1. 上面代码的第一个行创建一个空的微软 XML 文档对象。
>2. 第二行关闭异步加载，这样确保在文档完全加载之前解析器不会继续脚本的执行。
>3. 第三行告知解析器加载名为 "note.xml" 的 XML 文档。

#### 其他方法 2：在 Firefox 及其他浏览器中的 XML 解析器

>下面的 JavaScript 片段把 XML 文档 ("note.xml") 载入解析器：
>
>```javascript
>var xmlDoc=document.implementation.createDocument("","",null);
>xmlDoc.async="false";
>xmlDoc.load("note.xml");
>```
>
>1. 上面代码的第一个行创建一个空的 XML 文档对象。
>2. 第二行关闭异步加载，这样确保在文档完全加载之前解析器不会继续脚本的执行。
>3. 第三行告知解析器加载名为 "note.xml" 的 XML 文档。

### 解析 XML 字符串

>下面的 JavaScript 代码片段把 XML 字符串解析到 XML DOM 对象中（把字符串 txt 载入解析器）：
>
>```xml
>txt="<bookstore><book>";
>txt=txt+"<title>Everyday Italian</title>";
>txt=txt+"<author>Giada De Laurentiis</author>";
>txt=txt+"<year>2005</year>";
>txt=txt+"</book></bookstore>";
>
>if (window.DOMParser)
>  {
>  parser=new DOMParser();
>  xmlDoc=parser.parseFromString(txt,"text/xml");
>  }
>else // Internet Explorer
>  {
>  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
>  xmlDoc.async="false";
>  xmlDoc.loadXML(txt);
>  }
>```
>
>**注释：**Internet Explorer 使用 loadXML() 方法来解析 XML 字符串，而其他浏览器使用 [DOMParser 对象](https://www.w3school.com.cn/xmldom/dom_domparser.asp)。
>
>**注释：***[loadXML()](https://www.w3school.com.cn/xmldom/met_document_loadxml.asp)* 方法用于加载字符串（文本），*load()* 用于加载文件。

### 跨域访问

>出于安全方面的原因，现代的浏览器不允许跨域的访问。
>
>这意味着，网页以及它试图加载的 XML 文件，都必须位于相同的服务器上。
>
>W3School 的实例所打开的 XML 文件位于 W3School 的域上。
>
>假如你打算在自己的网页上使用上面的例子，则必须把 XML 文件放到自己的服务器上。否则，xmlDoc.load() 将产生错误 "Access is denied"。

## XML DOM

> **DOM （Document Object Model，文档对象模型）定义了访问和操作文档的标准方法。**

### XML DOM

>XML DOM (XML Document Object Model) 定义了访问和操作 XML 文档的标准方法。
>
>DOM 把 XML 文档作为树结构来查看。能够通过 DOM 树来访问所有元素。可以修改或删除它们的内容，并创建新的元素。元素，它们的文本，以及它们的属性，都被认为是节点。
>
>在下面的例子中，我们使用 DOM 引用从 <to> 元素中获取文本：
>
>```javascript
>xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue
>```
>
>- *xmlDoc* -由解析器创建的 XML 文档
>- *getElementsByTagName("to")[0]* - 第一个 <to> 元素
>- *childNodes[0]* - <to> 元素的第一个子元素（文本节点）
>- *nodeValue* - 节点的值（文本本身）

### HTML DOM

>HTML DOM (HTML Document Object Model) 定义了访问和操作 HTML 文档的标准方法。
>
>可以通过 HTML DOM 访问所有 HTML 元素。
>
>在下面的例子中，我们使用 DOM 引用来改变 id="to" 的 HTML 元素的文本：
>
>```javascript
>document.getElementById("to").innerHTML=
>```
>
>- *document* - HTML 文档
>- *getElementById("to")* - 其中的 id="to" 的 HTML 元素
>- *innerHTML* - HTML 元素的内部文本

### 解析 XML 文件 - 跨浏览器实例

> 下列代码把一个 XML 文档 ("note.xml") 载入 XML 解析器中：
>
> >```html
> ><html>
> ><body>
> ><h1>W3School.com.cn Internal Note</h1>
> ><p><b>To:</b> <span id="to"></span><br />
> ><b>From:</b> <span id="from"></span><br />
> ><b>Message:</b> <span id="message"></span>
> >
> ><script type="text/javascript">
> >if (window.XMLHttpRequest)
> >  {// code for IE7+, Firefox, Chrome, Opera, Safari
> >  xmlhttp=new XMLHttpRequest();
> >  }
> >else
> >  {// code for IE6, IE5
> >  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
> >  }
> >xmlhttp.open("GET","note.xml",false);
> >xmlhttp.send();
> >xmlDoc=xmlhttp.responseXML;
> >
> >document.getElementById("to").innerHTML=
> >xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
> >
> >document.getElementById("from").innerHTML=
> >xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
> >
> >document.getElementById("message").innerHTML=
> >xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
> ></script>
> >
> ></body>
> ></html>
> >```
> >
> >输出：
> >
> >```
> >W3School.com.cn Internal Note
> >
> >To: George
> >From: John
> >Message: Don't forget the meeting! 
> >```
> >
> >[亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=xmle_node_parsertest_1)

### 重要注释

>如需从 XML 中提取文本 "John"，语法是：
>
>```javascript
>getElementsByTagName("from")[0].childNodes[0].nodeValue
>```
>
>在上例中，只有一个` <from>` 标签，但是仍然需要规定数组的下标 [0]，这是因为 getElementsByTagName() 方法会返回包含所有 `<from>` 节点的数组。

### 解析 XML 字符串 - 跨浏览器实例

> 下面的代码加载并解析一个 XML 字符串：
>
> ```html
> <html>
> <body>
> <h1>W3School.com.cn Internal Note</h1>
> <p><b>To:</b> <span id="to"></span><br />
> <b>From:</b> <span id="from"></span><br />
> <b>Message:</b> <span id="message"></span></p>
> 
> <script>
> txt="<note>";
> txt=txt+"<to>George</to>";
> txt=txt+"<from>John</from>";
> txt=txt+"<heading>Reminder</heading>";
> txt=txt+"<body>Don't forget the meeting!</body>";
> txt=txt+"</note>";
> 
> if (window.DOMParser)
>   {
>   parser=new DOMParser();
>   xmlDoc=parser.parseFromString(txt,"text/xml");
>   }
> else // Internet Explorer
>   {
>   xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
>   xmlDoc.async="false";
>   xmlDoc.loadXML(txt);
>   }
> 
> document.getElementById("to").innerHTML=
> xmlDoc.getElementsByTagName("to")[0].childNodes[0].nodeValue;
> 
> document.getElementById("from").innerHTML=
> xmlDoc.getElementsByTagName("from")[0].childNodes[0].nodeValue;
> 
> document.getElementById("message").innerHTML=
> xmlDoc.getElementsByTagName("body")[0].childNodes[0].nodeValue;
> </script>
> </body>
> </html>
> ```
>
> 输出：
>
> ```
> W3School.com.cn Internal Note
> 
> To: George
> From: John
> Message: Don't forget the meeting!
> ```
>
> [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=xmle_node_parsertest_2)
>
> **注释：**Internet Explorer 使用 loadXML() 方法来解析 XML 字符串，而其他浏览器使用 [DOMParser 对象](https://www.w3school.com.cn/xmldom/dom_domparser.asp)。

## XML to HTML

> **本章讲解如何把 XML 数据显示为 HTML。**

### 在 HTML 中显示 XML 数据

>在上一节中，我们讲解了如何通过 JavaScript 来解析 XML 并访问 DOM。
>
>本例遍历一个 XML 文件 ([cd_catalog.xml](https://www.w3school.com.cn/example/xmle/cd_catalog.xml))，然后把每个 CD 元素显示为一个 HTML 表格行：
>
>```html
><html>
><body>
>
><script type="text/javascript">
>if (window.XMLHttpRequest)
>  {// code for IE7+, Firefox, Chrome, Opera, Safari
>  xmlhttp=new XMLHttpRequest();
>  }
>else
>  {// code for IE6, IE5
>  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>  }
>xmlhttp.open("GET","cd_catalog.xml",false);
>xmlhttp.send();
>xmlDoc=xmlhttp.responseXML;
>
>document.write("<table border='1'>");
>var x=xmlDoc.getElementsByTagName("CD");
>for (i=0;i<x.length;i++)
>  {
>  document.write("<tr><td>");
>  document.write(x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
>  document.write("</td><td>");
>  document.write(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
>  document.write("</td></tr>");
>  }
>document.write("</table>");
></script>
>
></body>
></html>
>```
>
>TIY：[在 HTML 表格中显示 XML 数据](https://www.w3school.com.cn/tiy/t.asp?f=xmle_display_table_1)。
>
>### 例子解释：
>
>1. 检测浏览器，然后使用合适的解析器来加载 XML
>2. 创建一个 HTML 表格（`<table border="1">`）
>3. 使用 `getElementsByTagName() `来获得所有 XML 的 CD 节点
>4. 针对每个 CD 节点，把 ARTIST 和 TITLE 中的数据显示为表格数据
>5. 用` </table>` 结束表格

### 跨域访问

>出于安全方面的原因，现代的浏览器不允许跨域的访问。
>
>这意味着，网页以及它试图加载的 XML 文件，都必须位于相同的服务器上。
>
>W3School 的实例所打开的 XML 文件位于 W3School 的域上。
>
>假如你打算在自己的网页上使用上面的例子，则必须把 XML 文件放到自己的服务器上。否则，xmlDoc.load() 将产生错误 "Access is denied"。

## XML 应用程序

> **本节演示由 HTML 和 JavaScript 构建的一个小型 XML 应用程序。**

### XML 文档实例

>请看下面这个 XML 文档 ( "cd_catalog.xml" )，它描述了一个 CD 目录：
>
>```xml
><?xml version="1.0" encoding="ISO-8859-1"?>
><CATALOG>
>  <CD>
>    <TITLE>Empire Burlesque</TITLE>
>    <ARTIST>Bob Dylan</ARTIST>
>    <COUNTRY>USA</COUNTRY>
>    <COMPANY>Columbia</COMPANY>
>    <PRICE>10.90</PRICE>
>    <YEAR>1985</YEAR>
>  </CD>
>.
>.
>... more ...
>.
>```
>
>[在您的浏览器中查看完整的 "cd_catalog.xml" 文件](https://www.w3school.com.cn/example/xmle/cd_catalog.xml)。

### 复习：加载 XML 文档

>首先，让我们复习一下之前学习过的代码。
>
>为了加载 XML 文档，我们使用了与《XML 解析器》那一节中相同的代码：
>
>```xml
>if (window.XMLHttpRequest)
>  {// code for IE7+, Firefox, Chrome, Opera, Safari
>  xmlhttp=new XMLHttpRequest();
>  }
>else
>  {// code for IE6, IE5
>  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>  }
>xmlhttp.open("GET","cd_catalog.xml",false);
>xmlhttp.send();
>xmlDoc=xmlhttp.responseXML;
>```
>
>在本代码执行后，xmlDoc 成为一个 XML DOM 对象，可由 JavaScript 访问。

#### 第一步：在任意 HTML 元素中显示 XML 数据

>XML 数据可以拷贝到任何有能力显示文本的 HTML 元素。
>
>下面这段代码从第一个` <CD>` 元素中获得 XML 数据，然后在 id="showCD" 的 HTML 元素中显示数据：
>
>```javascript
>x=xmlDoc.getElementsByTagName("CD");
>i=0;
>
>function displayCD()
>{
>artist=(x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue);
>title=(x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue);
>year=(x[i].getElementsByTagName("YEAR")[0].childNodes[0].nodeValue);
>txt="Artist: " + artist + "<br />Title: " + title + "<br />Year: "+ year;
>document.getElementById("showCD").innerHTML=txt;
>}
>```
>
>HTML 的 body 元素包含一个 onload 事件属性，它的作用是在页面已经加载时调用 display() 函数。body 元素中还包含了供接受 XML 数据的` <div id='show'>` 元素：
>
>```
><div id="show"></div>
>
></body>
>```
>
>亲自试一试：[XML 数据如何在  元素中显示](https://www.w3school.com.cn/tiy/t.asp?f=xmle_app_first)
>
>本例只能显示 XML 文档中第一个 CD 元素中的数据。为了导航到数据的下一行，我们需要使用更多的代码。

#### 第二步：添加导航脚本

> 为了向上例添加导航（功能），需要创建 next() 和 previous() 两个函数：
>
> ```javascript
> function next()
> {
> if (i<x.length-1)
>   {
>   i++;
>   displayCD();
>   }
> }
> 
> function previous()
> {
> if (i>0)
>   {
>   i--;
>   displayCD();
>   }
> }
> ```
>
> next() 函数确保已到达最后一个 CD 元素后不显示任何东西，previous () 函数确保已到达第一个 CD 元素后不显示任何东西。
>
> 通过点击 next/previous 按钮来调用 next() 和 previous() 函数：
>
> ```html
> <input type="button" onclick="previous()" value="previous" />
> <input type="button" onclick="next()" value="next" />
> ```
>
> 亲自试一试：[如何在 XML 记录中导航](https://www.w3school.com.cn/tiy/t.asp?f=xmle_app_navigate)

#### 最后：当点击 CD 时显示专辑信息

> 只需要一点点创新，您就可以创建一个完整的应用程序。
>
> 最后的例子展示如何在点击某个 CD 项目时显示专辑信息。
>
> [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=xmle_app)

# XML 高级

## XML 命名空间（XML Namespaces）

> **XML 命名空间提供避免元素命名冲突的方法。**

### 命名冲突

>在 XML 中，元素名称是由开发者定义的，当两个不同的文档使用相同的元素名时，就会发生命名冲突。
>
>这个 XML 文档携带着某个表格中的信息：
>
>```xml
><table>
>   <tr>
>   <td>Apples</td>
>   <td>Bananas</td>
>   </tr>
></table>
>```
>
>这个 XML 文档携带有关桌子的信息（一件家具）：
>
>```xml
><table>
>   <name>African Coffee Table</name>
>   <width>80</width>
>   <length>120</length>
></table>
>```
>
>假如这两个 XML 文档被一起使用，由于两个文档都包含带有不同内容和定义的 `<table>` 元素，就会发生命名冲突。
>
>XML 解析器无法确定如何处理这类冲突。

### 使用前缀来避免命名冲突

>此文档带有某个表格中的信息：
>
>```xml
><h:table>
>   <h:tr>
>   <h:td>Apples</h:td>
>   <h:td>Bananas</h:td>
>   </h:tr>
></h:table>
>```
>
>此 XML 文档携带着有关一件家具的信息：
>
>```xml
><f:table>   <f:name>African Coffee Table</f:name>   <f:width>80</f:width>   <f:length>120</f:length></f:table>
>```
>
>现在，命名冲突不存在了，这是由于两个文档都使用了不同的名称来命名它们的` <table>` 元素 (<h:table> 和 <f:table>)。
>
>通过使用前缀，我们创建了两种不同类型的` <table> `元素。

### 使用命名空间（Namespaces）

>这个 XML 文档携带着某个表格中的信息：
>
>```xml
><h:table xmlns:h="http://www.w3.org/TR/html4/">
>   <h:tr>
>   <h:td>Apples</h:td>
>   <h:td>Bananas</h:td>
>   </h:tr>
></h:table>
>```
>
>此 XML 文档携带着有关一件家具的信息：
>
>```xml
><f:table xmlns:f="http://www.w3school.com.cn/furniture">
>   <f:name>African Coffee Table</f:name>
>   <f:width>80</f:width>
>   <f:length>120</f:length>
></f:table>
>```
>
>与仅仅使用前缀不同，我们为 `<table> `标签添加了一个 xmlns 属性，这样就为前缀赋予了一个与某个命名空间相关联的限定名称。

### XML Namespace (xmlns) 属性

>XML 命名空间属性被放置于元素的开始标签之中，并使用以下的语法：
>
>```javascript
>xmlns:namespace-prefix="namespaceURI"
>```
>
>当命名空间被定义在元素的开始标签中时，所有带有相同前缀的子元素都会与同一个命名空间相关联。
>
>**注释：**用于标示命名空间的地址不会被解析器用于查找信息。其惟一的作用是赋予命名空间一个惟一的名称。不过，很多公司常常会作为指针来使用命名空间指向实际存在的网页，这个网页包含关于命名空间的信息。

### 统一资源标识符（Uniform Resource Identifier (URI)）

> *统一资源标识符*是一串可以标识因特网资源的字符。最常用的 URI 是用来标示因特网域名地址的*统一资源定位器(URL)*。另一个不那么常用的 URI 是*统一资源命名(URN)*。在我们的例子中，我们仅使用 URL。

### 默认的命名空间（Default Namespaces）

>为元素定义默认的命名空间可以让我们省去在所有的子元素中使用前缀的工作。
>
>请使用下面的语法：
>
>```javascript
>xmlns="namespaceURI"
>```
>
>这个 XML 文档携带着某个表格中的信息：
>
>```xml
><table xmlns="http://www.w3.org/TR/html4/">
>   <tr>
>   <td>Apples</td>
>   <td>Bananas</td>
>   </tr>
></table>
>```
>
>此 XML 文档携带着有关一件家具的信息：
>
>```xml
><table xmlns="http://www.w3school.com.cn/furniture">
>   <name>African Coffee Table</name>
>   <width>80</width>
>   <length>120</length>
></table>
>```

### 命名空间的实际应用

>当开始使用 XSL 时，您不久就会看到实际使用中的命名空间。XSL 样式表用于将 XML 文档转换为其他格式，比如 HTML。
>
>如果您仔细观察下面的这个 XSL 文档，就会看到大多数的标签是HTML标签。非 HTML 的标签都有前缀 xsl，并由此命名空间标示："http://www.w3.org/1999/XSL/Transform"：
>
>```xml
><?xml version="1.0" encoding="ISO-8859-1"?>
>
><xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
>
><xsl:template match="/">
><html>
><body>
>  <h2>My CD Collection</h2>
>  <table border="1">
>    <tr>
>      <th align="left">Title</th>
>      <th align="left">Artist</th>
>    </tr>
>    <xsl:for-each select="catalog/cd">
>    <tr>
>      <td><xsl:value-of select="title"/></td>
>      <td><xsl:value-of select="artist"/></td>
>    </tr>
>    </xsl:for-each>
>  </table>
></body>
></html>
></xsl:template>
>
></xsl:stylesheet>
>```

## XML CDATA

>**所有 XML 文档中的文本均会被解析器解析。**
>
>**只有 CDATA 区段（CDATA section）中的文本会被解析器忽略。**

### PCDATA

>PCDATA 指的是*被解析的字符数据*（Parsed Character Data）。
>
>XML 解析器通常会解析 XML 文档中所有的文本。
>
>当某个 XML 元素被解析时，其标签之间的文本也会被解析：
>
>```xml
><message>此文本也会被解析</message>
>```
>
>解析器之所以这么做是因为 XML 元素可包含其他元素，就像这个例子中，其中的 `<name>` 元素包含着另外的两个元素(first 和 last)：
>
>```xml
><name><first>Bill</first><last>Gates</last></name>
>```
>
>而解析器会把它分解为像这样的子元素：
>
>```xml
><name>
>   <first>Bill</first>
>   <last>Gates</last>
></name>
>```

### 转义字符

#### **非法的 XML 字符必须被替换为实体引用（entity reference）。**

>假如您在 XML 文档中放置了一个类似 "<" 字符，那么这个文档会产生一个错误，这是因为解析器会把它解释为新元素的开始。因此你不能这样写：
>
>```xml
><message>if salary < 1000 then</message>
>```
>
>为了避免此类错误，需要把字符 "<" 替换为实体引用，就像这样：
>
>```xml
><message>if salary &lt; 1000 then</message>
>```

#### 在 XML 中有 5 个预定义的实体引用：

>
>| &lt;   | <    | 小于   |
>| ------ | ---- | ------ |
>| &gt;   | >    | 大于   |
>| &amp;  | &    | 和号   |
>| &apos; | '    | 省略号 |
>| &quot; | "    | 引号   |
>
>**注释：**严格地讲，在 XML 中仅有字符 "<"和"&" 是非法的。省略号、引号和大于号是合法>的，但是把它们替换为实体引用是个好的习惯。


### CDATA

>术语 CDATA 指的是不应由 XML 解析器进行解析的文本数据（Unparsed Character Data）。
>
>在 XML 元素中，"<" 和 "&" 是非法的。
>
>"<" 会产生错误，因为解析器会把该字符解释为新元素的开始。
>
>"&" 也会产生错误，因为解析器会把该字符解释为字符实体的开始。
>
>某些文本，比如 JavaScript 代码，包含大量 "<" 或 "&" 字符。为了避免错误，可以将脚本代码定义为 CDATA。
>
>CDATA 部分中的所有内容都会被解析器忽略。
>
>CDATA 部分由 "`*<![CDATA[*" 开始，由 "*]]>`*" 结束：
>
>```html
><script>
><![CDATA[
>function matchwo(a,b)
>{
>if (a < b && a < 0) then
>  {
>  return 1;
>  }
>else
>  {
>  return 0;
>  }
>}
>]]>
></script>
>```
>
>在上面的例子中，解析器会忽略 CDATA 部分中的所有内容。

### 关于 CDATA 部分的注释：

>CDATA 部分不能包含字符串 "]]>"。也不允许嵌套的 CDATA 部分。
>
>标记 CDATA 部分结尾的 "]]>" 不能包含空格或折行。

## XML 编码

>**XML 文档可以包含非 ASCII 字符，比如法语。**
>
>**为了避免错误，需要规定 XML 编码，或者将 XML 文档存为 Unicode。**

### Windows 记事本

>Windows 记事本默认会将文件保存为单字节的 ANSI (ASCII)。
>
>如果选取文件菜单中的“另存为”命令，就可以规定双字节 Unicode (UTF-16)。
>
>将下面的 XML 文件保存为 Unicode （注意文档不包含任何 encoding 属性）：
>
>```xml
><?xml version="1.0"?>
><note>
>  <from>John</from>
>  <to>George</to>
>  <message>French: êèé</message>
></note>
>```
>
>上面的文件，[note_encode_none_u.xml](https://www.w3school.com.cn/example/xmle/note_encode_none_u.xml) 不会出错。但是如果规定了单字节编码就会出错。
>
>下面的编码（[打开它](https://www.w3school.com.cn/example/xmle/note_encode_1252_u.xml)），不会报错：
>
>```xml
><?xml version="1.0" encoding="windows-1252"?>
>```
>
>下面的编码（[打开它](https://www.w3school.com.cn/example/xmle/note_encode_8859_u.xml)），不会报错：
>
>```xml
><?xml version="1.0" encoding="ISO-8859-1"?>
>```
>
>下面的编码（[打开它](https://www.w3school.com.cn/example/xmle/note_encode_utf8_u.xml)），不会报错：
>
>```xml
><?xml version="1.0" encoding="UTF-8"?>
>```
>
>下面的编码（[打开它](https://www.w3school.com.cn/example/xmle/note_encode_utf16_u.xml)），不会报错：
>
>```xml
><?xml version="1.0" encoding="UTF-16"?>
>```

### 错误消息

> 如果您试图向 IE 中载入 XML 文档，可能会得到两种指示编码问题的错误：

#### 在文本内容中发现非法字符

>如果 XML 文档中的某个字符与编码属性不匹配，您就会得到这个错误消息。通常，当 XML 文件中含有外国字符，且当文件使用类似记事本的单字节编码编辑器保存，以及没有指定编码属性时，您就会得到这个错误消息。

#### 将当前编码切换为不被支持的指定编码

>如果您的文件被保存为 Unicode/UTF-16，但是编码属性被指定为单字节编码（比如 Windows-1252、ISO-8859-1 或者 UTF-8）时，那么您就会得到这个错误消息。或者当您的文档被保存为单字节编码，但编码属性被指定为双字节编码（比如 UTF-16）时，也会得到这个错误消息。

### 结论

>结论是：编码属性应当被指定为文档被保存时所使用的编码。我最好的避免错误的建议是：
>
>- 使用支持编码的编辑器
>- 确定编辑器使用的编码
>- 在您的 XML 文档中使用相同的编码属性