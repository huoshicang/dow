[TOC]

# AJXAX

## AJAX 基础

### AJAX 简介

> - 需重新加载整个网页的情况下，能够更新部分网页的技术。**

#### 您应当具备的基础知识

> 在继续学习之前，您需要对下面的知识有基本的了解：
> 
> >  - HTML / XHTML
> .> - CSS
>>  - JavaScript / DOM
> 
> 如果您希望首先学习这些项目，请在我们的[首页](https://www.w3school.com.cn/index.html)访问这> 些教程。

#### 什么是 AJAX ？

> AJAX = 异步 JavaScript 和 XML。
>
> AJAX 是一种用于创建快速动态网页的技术。
>
> 通过在后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加> 载整个网页的情况下，对网页的某部分进行更新。
>
> 传统的网页（不使用 AJAX）如果需要更新内容，必需重载整个网页面。
>
>
> 有很多使用 AJAX 的应用程序案例：新浪微博、Google 地图、开心网等等。

#### Google Suggest

> 在 2005 年，Google 通过其 Google Suggest 使 AJAX 变得流行起来。
> 
> Google Suggest 使用 AJAX 创造出动态性极强的 web 界面：当您在谷歌的搜索框输入关键字时，> JavaScript 会把这些字符发送到服务器，然后服务器会返回一个搜索建议的列表。

### AJAX 实例

> **为了帮助您理解 AJAX 的工作原理，我们创建了一个小型的 AJAX 应用程序。**

### AJAX 实例解释

> 上面的 AJAX 应用程序包含一个 `div` 和一个按钮。
> 
> `div` 部分用于显示来自服务器的信息。当按钮被点击时，它负责调用名为`loadXMLDoc() `的函数：
> 
> ```html
> <html>
> <body>
> 
> <div id="myDiv"><h3>Let AJAX change this text</h3></div>
> <button type="button" onclick="loadXMLDoc()">Change Content</button>
> 
> </body>
> </html>
> ```
> 
> 接下来，在页面的` head `部分添加一个` <script> `标签。该标签中包含了这个` loadXMLDoc()` 函数：
> 
> ```html
> <head>
> <script type="text/javascript">
> function loadXMLDoc()
> {
> .... AJAX script goes here ...
> }
> </script>
> </head>
> ```

## AJAX XHR

#### AJAX - 创建 XMLHttpRequest 对象

>**XMLHttpRequest 是 AJAX 的基础。**

#### XMLHttpRequest 对象

>所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。
>
>XMLHttpRequest 用于在后台与服务器交换数据。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。

#### 创建 XMLHttpRequest 对象

>所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。

##### 创建 XMLHttpRequest 对象的语法：

>```javascript
>variable=new XMLHttpRequest();
>```
>
>

##### 老版本的 Internet Explorer （IE5 和 IE6）使用 ActiveX 对象：

>```javascript
>variable=new ActiveXObject("Microsoft.XMLHTTP");
>```
>
>为了应对所有的现代浏览器，包括 IE5 和 IE6，请检查浏览器是否支持 XMLHttpRequest 对象。如果支持，则创建 XMLHttpRequest 对象。如果不支持，则创建 ActiveXObject ：
>
>```javascript
>var xmlhttp;
>if (window.XMLHttpRequest)
>  {// code for IE7+, Firefox, Chrome, Opera, Safari
>  xmlhttp=new XMLHttpRequest();
>  }
>else
>  {// code for IE6, IE5
>  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>  }
>```

### AJAX - 向服务器发送请求


> **XMLHttpRequest 对象用于和服务器交换数据。**

#### 向服务器发送请求

> 如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
>
> ```javascript
> xmlhttp.open("GET","test1.txt",true);
> xmlhttp.send();
> ```
>
> |                方法                | 描述                                                         |
> | :--------------------------------: | :----------------------------------------------------------- |
> | <br />open(*method*,*url*,*async*) | 规定请求的类型、URL 以及是否异步处理请求。<br />*method*：请求的类型；<br />GET 或 POST*url*：文件在服务器上的位置；<br />*async*：true（异步）或 false（同步） |
> |           send(*string*)           | 将请求发送到服务器。<br /> *string*：仅用于 POST 请求        |

#### GET 还是 POST？

> 与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。
> 
> 然而，在以下情况中，请使用 POST 请求：
> 
> > - 无法使用缓存文件（更新服务器上的文件或数据库）
> > - 向服务器发送大量数据（POST 没有数据量限制）
> > - 发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠

##### GET 请求

> 一个简单的 GET 请求：
> 
> ```javascript
> xmlhttp.open("GET","demo_get.asp",true);
> xmlhttp.send();
> ```
> 
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_get)
> 
> 在上面的例子中，您可能得到的是缓存的结果。
> 
> 为了避免这种情况，请向 URL 添加一个唯一的 ID：
> 
> ```javascript
> xmlhttp.open("GET","demo_get.asp?t=" + Math.random(),true);
> xmlhttp.send();
> ```
> 
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_get_unique)
> 
> 如果您希望通过 GET 方法发送信息，请向 URL 添加信息：
> 
> ```javascript
> xmlhttp.open("GET","demo_get2.asp?fname=Bill&lname=Gates",true);
> xmlhttp.send();
> ```
> 
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_get2)

##### POST 请求

> 一个简单 POST 请求：
>
> ```javascript
> xmlhttp.open("POST","demo_post.asp",true);
> xmlhttp.send();
> ```
>
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_post)
>
> 如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 > send() 方法中规定您希望发送的数据：
>
> ```javascript
> xmlhttp.open("POST","ajax_test.asp",true);
> xmlhttp.setRequestHeader("Content-type","application/x-www-form-> urlencoded");
> xmlhttp.send("fname=Bill&lname=Gates");
> ```
>
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_post2)
>
> |                    方法                    | 描述                                                         |
> | :----------------------------------------: | ------------------------------------------------------------ |
> | <br />`setRequestHeader(*header*,*value*)` | 向请求添加 HTTP 头。<br />*header*: 规定头的名称<br />*value*: 规定头的值 |

#### url - 服务器上的文件

> open() 方法的 *url* 参数是服务器上文件的地址：
>
> ```javascript
> xmlhttp.open("GET","ajax_test.asp",true);
> ```

>该文件可以是任何类型的文件，比如 .txt 和 .xml，或者服务器脚本文件，比如 .asp 和 .php （在传> 回响应之前，能够在服务器上执行任务）。

#### 异步 - True 或 False？

> AJAX 指的是异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
> 
> XMLHttpRequest 对象如果要用于 AJAX 的话，其 open() 方法的 async 参数必须设置为 true：
> 
> ```javascript
> xmlhttp.open("GET","ajax_test.asp",true);
> ```
> 
> 对于 web 开发人员来说，发送异步请求是一个巨大的进步。很多在服务器执行的任务都相当费时。> AJAX 出现之前，这可能会引起应用程序挂起或停止。
> 
> 通过 AJAX，JavaScript 无需等待服务器的响应，而是：
> 
> > - 在等待服务器响应时执行其他脚本
> > - 当响应就绪后对响应进行处理

##### Async = true

> 当使用 async=true 时，请规定在响应处于 onreadystatechange 事件中的就绪状态时执行的函数：
> 
> ```javascript
> xmlhttp.onreadystatechange=function()
>   {
>   if (xmlhttp.readyState==4 && xmlhttp.status==200)
>     {
>     document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
>     }
>   }
> xmlhttp.open("GET","test1.txt",true);
> xmlhttp.send();
> ```
> 
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_async_true)
> 
> 您将在稍后的章节学习更多有关 onreadystatechange 的内容。

##### Async = false

> 如需使用 async=false，请将 open() 方法中的第三个参数改为 false：
> 
> ```javascript
> xmlhttp.open("GET","test1.txt",false);
> ```
> 
> 我们不推荐使用 async=false，但是对于一些小型的请求，也是可以的。
> 
> 请记住，JavaScript 会等到服务器响应就绪才继续执行。如果服务器繁忙或缓慢，应用程序会挂起> 或停止。
> 
> **注释：**当您使用 async=false 时，请不要编写 onreadystatechange 函数 - 把代码放到 send() 语> 句后面即可：
> 
> ```javascript
> xmlhttp.open("GET","test1.txt",false);
> xmlhttp.send();
> document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
> ```
> 
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_async_false)

### AJAX - 服务器响应

>#### 服务器响应
>
>如需获得来自服务器的响应，请使用 `XMLHttpRequest` 对象的` responseText` 或 `responseXML` 属性。
>
>| 属性           | 描述                       |
>| :------------- | :------------------------- |
>| `responseText` | 获得字符串形式的响应数据。 |
>| `responseXML`  | 获得 XML 形式的响应数据。  |

#### responseText 属性

>如果来自服务器的响应并非 XML，请使用 responseText 属性。
>
>responseText 属性返回字符串形式的响应，因此您可以这样使用：
>
>```javascript
>document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
>```
>
>> [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_async_true)

#### responseXML 属性

>如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性：
>
>请求 [books.xml](https://www.w3school.com.cn/example/xmle/books.xml) 文件，并解析响应：
>
>```javascript
>xmlDoc=xmlhttp.responseXML;
>txt="";
>x=xmlDoc.getElementsByTagName("ARTIST");
>for (i=0;i<x.length;i++)
>  {
>  txt=txt + x[i].childNodes[0].nodeValue + "<br />";
>  }
>document.getElementById("myDiv").innerHTML=txt;
>```
>
>> [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_responsexml)

### AJAX - onreadystatechange 事件

#### onreadystatechange 事件

> 当请求被发送到服务器时，我们需要执行一些基于响应的任务。
>
> 每当 readyState 改变时，就会触发 onreadystatechange 事件。
>
> readyState 属性存有 XMLHttpRequest 的状态信息。
>
> 下面是 XMLHttpRequest 对象的三个重要的属性：
>
> | 属性                 | 描述                                                         |
> | -------------------- | ------------------------------------------------------------ |
> | `onreadystatechange` | 存储函数（或函数名），每当 readyState 属性改变时，就会调用该函数。 |
> | <br />`readyState`   | 存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。<br />0: 请求未初始化1: 服务器连接已建立<br />2: 请求已接收<br />3: 请求处理中4: 请求已完成，且响应已就绪 |
> | `status `            | 200: "OK"404: 未找到页面                                     |
>
> 在 onreadystatechange 事件中，我们规定当服务器响应已做好被处理的准备时所执行的任务。
>
> 当 readyState 等于 4 且状态为 200 时，表示响应已就绪：
>
> ```javascript
> xmlhttp.onreadystatechange=function()
> {
> if (xmlhttp.readyState==4 && xmlhttp.status==200)
>  {
>  document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
>  }
> }
> ```
>
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_async_true)
>
> **注释：**onreadystatechange 事件被触发 5 次（0 - 4），对应着 readyState 的每个变化。

#### 使用 Callback 函数

> callback 函数是一种以参数形式传递给另一个函数的函数。
> 
> 如果您的网站上存在多个 AJAX 任务，那么您应该为创建 XMLHttpRequest 对象编写一个*标准*的函数，并为每个 AJAX 任务调用该函数。
> 该函数调用应该包含 URL 以及发生 onreadystatechange 事件时执行的任务（每次调用可能不尽相同）：
> 
> ```javascript
> function myFunction()
> {
> loadXMLDoc("ajax_info.txt",function()
>   {
>   if (xmlhttp.readyState==4 && xmlhttp.status==200)
>     {
>     document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
>     }
>   });
> }
> ```
> 
> > [亲自试一试](https://www.w3school.com.cn/tiy/t.asp?f=ajax_callback)

## AJAX 高级

### AJAX ASP/PHP 请求实例

> **AJAX 用于创造动态性更强的应用程序。**

#### AJAX ASP/PHP 实例

>当用户在输入框中键入字符时，网页如何与 web 服务器进行通信
>
>[亲自试一下源代码](https://www.w3school.com.cn/tiy/t.asp?f=ajax_suggest)

####  实例解释—showHint() 函数

> 当用户在上面的输入框中键入字符时，会执行函数 "showHint()" 。该函数由 "onkeyup" 事件触发：
>
> ```javascript
> function showHint(str)
> {
> var xmlhttp;
> if (str.length==0)
>   {
>   document.getElementById("txtHint").innerHTML="";
>   return;
>   }
> if (window.XMLHttpRequest)
>   {// code for IE7+, Firefox, Chrome, Opera, Safari
>   xmlhttp=new XMLHttpRequest();
>   }
> else
>   {// code for IE6, IE5
>   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>   }
> xmlhttp.onreadystatechange=function()
>   {
>   if (xmlhttp.readyState==4 && xmlhttp.status==200)
>     {
>     document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
>     }
>   }
> xmlhttp.open("GET","gethint.asp?q="+str,true);
> xmlhttp.send();
> }
> ```
>
>**源代码解释**：
>
>如果输入框为空 (str.length==0)，则该函数清空 txtHint 占位符的内容，并退出函数。
>
>如果输入框不为空，showHint() 函数执行以下任务：
>
>- 创建 XMLHttpRequest 对象
>- 当服务器响应就绪时执行函数
>- 把请求发送到服务器上的文件
>- 请注意我们向 URL 添加了一个参数 q （带有输入框的内容）
### AJAX 服务器页面 - ASP 和 PHP

>由上面的 JavaScript 调用的服务器页面是 ASP 文件，名为 "gethint.asp"。
>
>下面，我们创建了两个版本的服务器文件，一个用 ASP 编写，另一个用 PHP 编写。

##### ASP 文件

> "gethint.asp" 中的源代码会检查一个名字数组，然后向浏览器返回相应的名字：
>
> ```asp
> <%
> response.expires=-1
> dim a(30)
> '用名字来填充数组
> a(1)="Anna"
> a(2)="Brittany"
> a(3)="Cinderella"
> a(4)="Diana"
> a(5)="Eva"
> a(6)="Fiona"
> a(7)="Gunda"
> a(8)="Hege"
> a(9)="Inga"
> a(10)="Johanna"
> a(11)="Kitty"
> a(12)="Linda"
> a(13)="Nina"
> a(14)="Ophelia"
> a(15)="Petunia"
> a(16)="Amanda"
> a(17)="Raquel"
> a(18)="Cindy"
> a(19)="Doris"
> a(20)="Eve"
> a(21)="Evita"
> a(22)="Sunniva"
> a(23)="Tove"
> a(24)="Unni"
> a(25)="Violet"
> a(26)="Liza"
> a(27)="Elizabeth"
> a(28)="Ellen"
> a(29)="Wenche"
> a(30)="Vicky"
> 
> '获得来自 URL 的 q 参数
> q=ucase(request.querystring("q"))
> 
> '如果 q 大于 0，则查找数组中的所有提示
> if len(q)>0 then
>   hint=""
>   for i=1 to 30
>     if q=ucase(mid(a(i),1,len(q))) then
>       if hint="" then
>         hint=a(i)
>       else
>         hint=hint & " , " & a(i)
>       end if
>     end if
>   next
> end if
> 
> '如果未找到提示，则输出 "no suggestion"
> '否则输出正确的值
> if hint="" then
>   response.write("no suggestion")
> else
>   response.write(hint)
> end if
> %>
> ```
>
> 

##### PHP 文件

> 下面的代码用 PHP 编写，与上面的 ASP 代码作用是一样的。
>
> **注释：**如需在 PHP 中运行这个例子，请将 url 变量的值（Javascript 代码中）由 "gethint.asp" 改为 "gethint.php"。
>
> ```php
> <?php
> // 用名字来填充数组
> $a[]="Anna";
> $a[]="Brittany";
> $a[]="Cinderella";
> $a[]="Diana";
> $a[]="Eva";
> $a[]="Fiona";
> $a[]="Gunda";
> $a[]="Hege";
> $a[]="Inga";
> $a[]="Johanna";
> $a[]="Kitty";
> $a[]="Linda";
> $a[]="Nina";
> $a[]="Ophelia";
> $a[]="Petunia";
> $a[]="Amanda";
> $a[]="Raquel";
> $a[]="Cindy";
> $a[]="Doris";
> $a[]="Eve";
> $a[]="Evita";
> $a[]="Sunniva";
> $a[]="Tove";
> $a[]="Unni";
> $a[]="Violet";
> $a[]="Liza";
> $a[]="Elizabeth";
> $a[]="Ellen";
> $a[]="Wenche";
> $a[]="Vicky";
> 
> //获得来自 URL 的 q 参数
> $q=$_GET["q"];
> 
> //如果 q 大于 0，则查找数组中的所有提示
> if (strlen($q) > 0)
>   {
>   $hint="";
>   for($i=0; $i<count($a); $i++)
>     {
>     if (strtolower($q)==strtolower(substr($a[$i],0,strlen($q))))
>       {
>       if ($hint=="")
>         {
>         $hint=$a[$i];
>         }
>       else
>         {
>         $hint=$hint." , ".$a[$i];
>         }
>       }
>     }
>   }
> 
> // 如果未找到提示，则把输出设置为 "no suggestion"
> // 否则设置为正确的值
> if ($hint == "")
>   {
>   $response="no suggestion";
>   }
> else
>   {
>   $response=$hint;
>   }
> 
> //输出响应
> echo $response;
> ?>
> ```

### AJAX 数据库

##### AJAX 数据库实例

> **AJAX 可用来与数据库进行动态通信。**

##### AJAX 数据库实例

>下面的例子将演示网页如何通过 AJAX 从数据库读取信息：
>
>请在下面的下拉列表中选择一个客户：
>
>请选择一位客户： Apple Computer, Inc. BAIDU, Inc Canon USA, Inc. Google, Inc. Nokia Corporation Sony Corporation of America 
>
>客户信息将在此处列出。
>
>> [亲自试一下源代码](https://www.w3school.com.cn/tiy/t.asp?f=ajax_database)

##### 实例解释—showCustomer() 函数

> 当用户在上面的下拉列表中选择某个客户时，会执行名为 "showCustomer()" 的函数。该函数由 "onchange" 事件触发：
>
> ```javascript
> function showCustomer(str)
> {
> var xmlhttp;
> if (str=="")
>   {
>   document.getElementById("txtHint").innerHTML="";
>   return;
>   }
> if (window.XMLHttpRequest)
>   {// code for IE7+, Firefox, Chrome, Opera, Safari
>   xmlhttp=new XMLHttpRequest();
>   }
> else
>   {// code for IE6, IE5
>   xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>   }
> xmlhttp.onreadystatechange=function()
>   {
>   if (xmlhttp.readyState==4 && xmlhttp.status==200)
>     {
>     document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
>     }
>   }
> xmlhttp.open("GET","getcustomer.asp?q="+str,true);
> xmlhttp.send();
> }
> ```
>
> showCustomer() 函数执行以下任务：
>
> - 检查是否已选择某个客户
> - 创建 XMLHttpRequest 对象
> - 当服务器响应就绪时执行所创建的函数
> - 把请求发送到服务器上的文件
> - 请注意我们向 URL 添加了一个参数 q （带有输入域中的内容）

##### AJAX 服务器页面

> 由上面的 JavaScript 调用的服务器页面是 ASP 文件，名为 "getcustomer.asp"。
>
> 用 PHP 编写服务器文件也很容易，或者用其他服务器语言。请看[用 PHP 编写的相应的例子](https://www.w3school.com.cn/php/php_ajax_database.asp)。
>
> "getcustomer.asp" 中的源代码负责对数据库进行查询，然后用 HTML 表格返回结果：
>
> ```asp
> <%
> response.expires=-1
> sql="SELECT * FROM CUSTOMERS WHERE CUSTOMERID="
> sql=sql & "'" & request.querystring("q") & "'"
> 
> set conn=Server.CreateObject("ADODB.Connection")
> conn.Provider="Microsoft.Jet.OLEDB.4.0"
> conn.Open(Server.Mappath("/db/northwind.mdb"))
> set rs=Server.CreateObject("ADODB.recordset")
> rs.Open sql,conn
> 
> response.write("<table>")
> do until rs.EOF
>   for each x in rs.Fields
>     response.write("<tr><td><b>" & x.name & "</b></td>")
>     response.write("<td>" & x.value & "</td></tr>")
>   next
>   rs.MoveNext
> loop
> response.write("</table>")
> %>
> ```

### AJAX XML 文件

#### AJAX XML 实例

> **AJAX 可用来与 XML 文件进行交互式通信。**

AJAX XML 实例

> 下面的例子将演示网页如何使用 AJAX 来读取来自 XML 文件的信息：
>
> 获得 CD 信息
>
> [亲自试一下源代码](https://www.w3school.com.cn/tiy/t.asp?f=ajax_xml)

#### 实例解释 - loadXMLDoc() 函数

>当用户点击上面的“获得 CD 信息”这个按钮，就会执行 loadXMLDoc() 函数。
>
>loadXMLDoc() 函数创建 XMLHttpRequest 对象，添加当服务器响应就绪时执行的函数，并将请求发送到服务器。
>
>当服务器响应就绪时，会构建一个 HTML 表格，从 XML 文件中提取节点（元素），最后使用已经填充了 XML 数据的 HTML 表格来更新 txtCDInfo 占位符：
>
>```javascript
>function loadXMLDoc(url)
>{
>var xmlhttp;
>var txt,xx,x,i;
>if (window.XMLHttpRequest)
>  {// code for IE7+, Firefox, Chrome, Opera, Safari
>  xmlhttp=new XMLHttpRequest();
>  }
>else
>  {// code for IE6, IE5
>  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
>  }
>xmlhttp.onreadystatechange=function()
>  {
>  if (xmlhttp.readyState==4 && xmlhttp.status==200)
>    {
>    txt="<table border='1'><tr><th>Title</th><th>Artist</th></tr>";
>    x=xmlhttp.responseXML.documentElement.getElementsByTagName("CD");
>    for (i=0;i<x.length;i++)
>      {
>      txt=txt + "<tr>";
>      xx=x[i].getElementsByTagName("TITLE");
>        {
>        try
>          {
>          txt=txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
>          }
>        catch (er)
>          {
>          txt=txt + "<td> </td>";
>          }
>        }
>    xx=x[i].getElementsByTagName("ARTIST");
>      {
>        try
>          {
>          txt=txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
>          }
>        catch (er)
>          {
>          txt=txt + "<td> </td>";
>          }
>        }
>      txt=txt + "</tr>";
>      }
>    txt=txt + "</table>";
>    document.getElementById('txtCDInfo').innerHTML=txt;
>    }
>  }
>xmlhttp.open("GET",url,true);
>xmlhttp.send();
>}
>```

## AJAX 服务器页面

> 上面这个例子中使用的服务器页面实际上是一个 XML 文件，名为 "[cd_catalog.xml](https://www.w3school.com.cn/example/xmle/cd_catalog.xml)"。