### 文章目录

- [一. Vue基础](#_Vue_1)
- - [认识Vue.js](#Vuejs_3)
  - [Vue安装方式](#Vue_16)
  - [Vue的MVVM](#VueMVVM_40)
- [二. Vue基础语法](#_Vue_58)
- - [生命周期](#_61)
  - [模板语法](#_66)
  - - [创建Vue, options可以放什么](#Vue_options_67)
    - [语法](#_75)
    - - [综合](#_77)
      - [v-on](#von_114)
      - [v-for遍历数组](#vfor_172)
      - [v-model表单绑定](#vmodel_199)
      - - [v-model结合radio类型使用](#vmodelradio_244)
        - [v-model结合checkbox类型使用](#vmodelcheckbox_264)
        - [v-model结合select类型使用](#vmodelselect_312)
      - [值绑定](#_338)
      - [修饰符](#_359)
      - [检测数组更新](#_379)
    - [计算属性 computed](#_computed_403)
    - - [计算属性setter和getter](#settergetter_440)
      - [computed / methods区别](#computed__methods_471)
    - [fulters过滤器](#fulters_477)
- [三. 组件化开发](#__498)
- - [组件的基本介绍](#_500)
  - - [注册组件的基本步骤](#_502)
    - [全局组件 / 局部组件](#___534)
    - [父组件 / 子组件](#___566)
    - [语法糖](#_573)
    - - [组件模板抽离写法 \(简单\)](#__606)
      - [组件可以访问VUE实例数据吗\?](#VUE_648)
      - - [组件中的data为什么必须是一个函数\?](#data_664)
  - [组件通讯](#_667)
  - - [父子组件的通讯](#_669)
    - - [父组件通过props向子组件传递数据](#props_671)
      - [子组件通过事件向父组件发送数据](#_763)
    - [父子组件通讯-双向绑定](#_825)
    - [父子组件的访问方式](#_828)
    - - [父组件访问子组件](#_830)
      - [子组件访问父组件](#_892)
    - [跨级组件通信之provide/inject](#provideinject_947)
  - [插槽slot](#slot_970)
  - - [基本使用](#_975)
    - [具名插槽](#_1014)
    - [作用域插槽](#_1044)
    - - [编译作用域](#_1046)
    - [作用域插槽使用](#_1077)
- [四. webpack](#_webpack_1132)
- - [webpack安装](#webpack_1135)
  - [webpack配置](#webpack_1171)
  - - [CSS Less Img ES6转Es5 Vue 处理](#CSS_Less_Img_ES6Es5_Vue__1234)
  - [认识Plugin](#Plugin_1255)
  - [常用插件介绍](#_1269)
  - - [添加版权的Plugin](#Plugin_1271)
    - [打包html的plugin](#htmlplugin_1291)
    - [JS压缩的plugin](#JSplugin_1319)
  - [搭建本地服务器](#_1344)
  - [webpack配置分离](#webpack_1375)
- [五. Vue CLI](#_Vue_CLI_1390)
- - [Vue CLI的使用](#Vue_CLI_1396)
  - - [Vue CLI2](#Vue__CLI2_1413)
    - - [❤ Vue build的选择-runtiome+compilter和runtiome-only 区别](#_Vue_buildruntiomecompilterruntiomeonly__1432)
      - [目录结构解析](#_1483)
      - [CLI错误](#CLI_1521)
    - [Vue CLI3](#Vue__CLI3_1527)
    - - [目录结构](#_1607)
      - [配置](#_1626)
- [六. vue-router](#_vuerouter_1637)
- - [前端渲染 + 后端渲染](#___1649)
  - - [后端路由阶段](#_1652)
    - [前端路由阶段](#_1671)
    - [综合总结提问](#_1704)
    - - [1\. 什么是前端渲染, 什么是后端渲染\?](#1___1706)
      - [2\. 什么是前后端分离](#2__1743)
      - [3\. 什么是前端路由, 什么是后端路由\?](#3___1766)
  - [vue-router基本了解](#vuerouter_1800)
  - - [认识vue-router](#vuerouter_1802)
    - [安装vue-router](#vuerouter_1814)
    - - [方法一: 创建项目时就选择路由](#__1816)
      - [方法二: 自己安装路由](#__1818)
  - [vue-router的使用](#vuerouter_1866)
  - - [router-link属性补充](#routerlink_1917)
    - [路由跳转第二种方法](#_1960)
    - [动态路由](#_1989)
    - [路由打包文件解析](#_2093)
    - [路由懒加载](#_2105)
  - [vue-router嵌套路由](#vuerouter_2167)
  - - [实现嵌套路由步骤](#_2172)
  - [vue-router参数传递](#vuerouter_2233)
  - - [传递参数的方式](#_2241)
    - [通过点击事件带参数](#_2322)
    - [r o u t e 和 route和 route和router的区别](#routerouter_2382)
  - [vue-router导航守卫](#vuerouter_2391)
  - [keep-alive](#keepalive_2467)
  - [路径配置问题补充](#_2483)
- [七. Vuex详解](#_Vuex_2509)
- - [Vuex是做什么的](#Vuex_2511)
  - [Vuex状态管理](#Vuex_2531)
  - - [创建使用](#_2549)
  - [Vuex核心概念](#Vuex_2622)
  - - [state单一状态树](#state_2624)
    - [Getters](#Getters_2633)
    - [Mutation](#Mutation_2698)
    - - [Mutation状态更新](#Mutation_2700)
      - [Mutation传递参数](#Mutation_2724)
      - [Mutation响应规则](#Mutation_2760)
      - [Mutation常量类型 – 概念](#Mutation___2797)
      - [Mutation同步函数](#Mutation_2846)
    - [Actions](#Actions_2849)
    - [Module](#Module_2907)
    - [项目结构](#_3022)
- [八. 网络封装](#__3034)
- - [网络模块的选择](#_3036)
  - [jsonp](#jsonp_3070)
  - [axios使用](#axios_3123)
  - - [axios请求方式](#axios_3125)
    - [axios发送并请求](#axios_3137)
    - - [同时发送两个请求](#_3139)
      - [全局配置](#_3159)
      - [常见的配置选项](#_3189)
  - [axios实例](#axios_3210)
  - - [axios封装](#axios_3244)
    - [axios拦截器](#axios_3277)
- [九.项目实战](#_3320)
- [十. 补充知识点](#__3322)
- - [ES6](#ES6_3324)
  - - [块级作用域](#_3325)
    - [增强写法](#_3331)
  - [JS高阶函数](#JS_3371)
  - - [编程范式: 声明式编程 or 命令式编程](#__or__3373)
    - [编程范式: 面向对象编程 or 函数式编程](#__or__3391)
  - [Promise](#Promise_3498)
  - - [Promise的基本使用](#Promise_3507)
    - [Promise三种状态](#Promise_3663)

# 一. Vue基础

## 认识Vue.js

**Vue是一个渐进式的框架**

1.  渐进式意味着你可以将Vue作为你应用的一部分嵌套其中
2.  Vue的核心库以及其生态系统
3.  Core + Vue-router + Vuex

**Vue特点和Web开发常见高级功能**

1.  解耦视图和数据
2.  可复用的组件
3.  前端路由技术
4.  状态管理
5.  虚拟DOM

## Vue安装方式

**方式一. 直接CDN引入**  
可以选择引入开发环境版本 / 生产环境版本

```
// 开发环境版本, 包含了帮助的命令行警告
<srcipt src='https://cdn.jsdeliver.net/npm/vue/dist/vue.js'></script>

// 生产环境版本, 优化了尺寸和速度
<srcipt src='https://cdn.jsdeliver.net/npm/vue'></script>
```

**方式二. 下载和引入**

```
// 开发环境
https://vuejs.org/js/vue.js

// 生产环境
https://vuejs.org/js/vue.min.js
```

**方式三. NPM安装**

通过webpack和CLI的使用

## Vue的MVVM

**M： Model 数据模型**

- 数据层
- 数据可能是固定的思数据, 更多的是来自服务器, 从网络上请求下来的数据

**V: View 视图模板**

- 视觉层
- 在前端开发中, 通常是DOM层
- 作用: 是给用户展示各种信息

**VM： View-Model 视图模型**

- 视图模型层
- 是View和Model沟通的桥梁
- 一方面实现了Data Binding \(数据绑定\), 讲Model的改变实时的反应到View中
- 另一方面实现了DOM Listener \(DOM监听\), 当DOM发生一些时间 \(点击, 滚动, touch等\) 时, 可以监听到, 并在需要的情况下改变对应的Data

# 二. Vue基础语法

语法糖: 简写

## 生命周期

事物从诞生到消亡的整个过程

## 模板语法

### 创建Vue, options可以放什么

- el
- data
- methods
- 生命周期函数  
  …

### 语法

#### 综合

**插值操作 Mustache**

- Mustache语法 \(双大括号\)
- 可以直接写变量
- 可以写简单的表达式

**v-once**  
后面不需要跟任何表达式  
表示元素和组件只渲染一次, 不会随着数据的改变而变化

**v-html**  
后面往往跟一个string类型  
会将string的html解析出来并渲染

**v-text**  
与Mustache相似, 一般不用, 不灵活

**v-pre**  
用于跳过这个元素和它子元素的编译过程, 用于显示原本的Mustache语法

**v-cloak**  
在某些情况下, 我们浏览器可能会直接显示出未编译的Mustache标签

**v-bind**  
作用: 动态绑定属性  
简写: :

**条件判断**

- v-if
- v-else-if
- v-else

**v-show**

- 当条件为false的时  
  v-if: 指令的元素, 不会渲染到dom中  
  v-show: dom增加一个行内样式display: none

#### v-on

作用: 绑定事件监听  
简写: \@  
写法:

 -    没有参数的情况下, 可以不写\(\); 如果方法本身有一个参数, 会默认将原生事件event参数传递进去
 -    如果传入某个参数, 同时需要event时, 可以通过\$event传入时间

```
<div id="app">
  <h2>点击次数: {{counter}}</h2>
  <!--情况一: 方法没有参数-->
  <button @click="btnClick1">按钮1</button>
  <button @click="btnClick1()">按钮1</button>

  <!--情况二: 如果方法有参数-->
  <!--1.调用时不传入参数,会默认将event作为第一个参数传入-->
  <button @click="btnClick2">按钮2</button>
  <!--2.调用时不传入参数,那么参数为undefined-->
  <button @click="btnClick2()">按钮2</button>

  <!--情况三: 如果方法有参数,并且希望传入event-->
  <button @click="btnClick3(10, $event)">按钮3</button>
</div>

<script src="../../js/vue.js"></script>
<script>
  const app = new Vue({
    el: '#app',
    data: {
      counter: 0
    },
    methods: {
      btnClick1() {
        console.log('按钮1被点击');
      },
      btnClick2(payload) {
        console.log('按钮2被点击', payload);
      },
      btnClick3(num, event) {
        console.log('按钮3被点击', num, event);
      }
    }
  })
</script>
```

| 修饰符                 | 作用                     | 实际调用                  |
| ---------------------- | ------------------------ | ------------------------- |
| .stop                  | 阻止事件冒泡             | event.stopPropagation\(\) |
| .prevent               | 阻止默认事件             | event.preventDefault\(\)  |
| \{keyCode I keyAlias\} | 监听某个键盘的键帽       | –                         |
| .native                | 监听组件根元素的原生事件 | –                         |
| .once                  | 只触发一次回调           | –                         |

#### v-for遍历数组

```
// 遍历过程中, 没有使用索引值
<li v-for="item in names">{{item}}</li>

// 遍历过程中, 获取索引值
<li v-for="(item, index) in names">{{index + 1}} - {{item}}</li>

// 遍历对象的时候, 只有一个值, 活得的是value

// 获取对象的key和value 
<li v-for="(value, key) in names">{{value}} - {{key}}</li>

// 获取对象的key和value和index 
<li v-for="(value, key, index) in names">{{value}} - {{key}} - {{index}}</li>

```

官方推荐, 使用v-for的时候, 加上一个 key属性  
图1  
key的作用是为了高效的更新虚拟DOM  
key要具有唯一性, 不然就没意义

```
<li v-for="(item, index) in names" :key="item">{{index + 1}} - {{item}}</li>
```

#### v-model表单绑定

实现表单元素和数据的双向绑定

```
<div id="app">
    <input type="text" v-model="message">
    {{message}}
</div>

cosnt app = new Vue({
    el: '#app',
    data: {
        message: '你好'
    }
})

// 界面的message数据改了, data里面的message就改变了, 是双向的
```

可以将v-model用于textarea元素

```
<textare v-model="message"></textare>
<p>输入内容: {{message}} </p>
```

其他方法实现双向绑定

```
// v-bind绑定一个value属性
// v-on指令给当前元素绑定input事件  
// 下面代码 等同于 使用v-model

<div id="app">
    <input type="text" :value="message" @input="message = $event.target.value">
    {{message}}
</div>

cosnt app = new Vue({
    el: '#app',
    data: {
        message: '你好'
    }
})

```

##### v-model结合radio类型使用

```
<div id="app">
    <label for="male">
        <inout type="radio" id="male" value="男" v-model="sex">男
    </label>
    <label for="male">
        <inout type="radio" id="female" value="女" v-model="sex">nv
    </label>
    <h2>您选择的性别是: {{sex}}</h2>
</div>

cosnt app = new Vue({
    el: '#app',
    data: {
        sex: '男'
    }
})
```

##### v-model结合checkbox类型使用

 -    单选框

```
// 需求: 是否同意该协议, 同意后下一步

<div id="app">
    <label for="agree">
        <inout type="checkbox" id="agree"  v-model="isAgree">同意协议
    </label>
    <buttion :disabled="!isAgree">下一步</button>
</div>

cosnt app = new Vue({
    el: '#app',
    data: {
        isAgree: false
    }
})

// 点击文字部分也可以选中
```

 -    多选框

```
<div id="app">
    <label for="agree">
        <inout type="checkbox" value="足球" v-model="hobbies">足球
    </label>
    <label for="agree">
        <inout type="checkbox" value="篮球" v-model="hobbies">篮球
    </label>
    <label for="agree">
        <inout type="checkbox" value="羽毛球" v-model="hobbies">羽毛球
    </label>
    <h2>您的爱好是: {{hobbies}}</h2>
</div>

cosnt app = new Vue({
    el: '#app',
    data: {
        isAgree: false,
        hobbies: []
    }
})

```

##### v-model结合select类型使用

**下拉框单选**

 -    v-model绑定的是一个值
 -    当选中option中一个时, 会将它对应的value赋值到mySelect中

```
<select v-model="mySelect">
    <option value="apple">苹果<option>
    <option value="orange">橘子<option>
    <option value="banana">香蕉<option>
</select>
<p>您最喜欢的水果: {{mySelect}}</p>
```

**下拉框多选**

 -    v-model绑定的是一个数组
 -    当选择多个值时,会将选中的option对应的value添加到数组mySelect中

```
<select v-model="mySelect" multiple>
    <option value="apple">苹果<option>
    <option value="orange">橘子<option>
    <option value="banana">香蕉<option>
</select>
<p>您最喜欢的水果: {{mySelect}}</p>
```

#### 值绑定

含义: 动态的给value赋值  
1 在前面的value中的值, 都是在定义input的时候直接给定的  
2 但真实开发中, input的值可能是从网络获取或定义在data中的  
3 可以通过v-bind:value动态的给value绑定值

```
<div id="app">
    <label v-for="item in nums" :for="item">
        <inout type="checkbox" value="item" :id="item" v-model="hobbies">{{item}}
    </label>
    <h2>您的爱好是: {{hobbies}}</h2>
</div>

cosnt app = new Vue({
    el: '#app',
    data: {
        hobbies: [],
        nums: ['篮球', '足球', '羽毛球']
    }
})
```

#### 修饰符

**lazy修饰符**

 -    前景: v-model默认是在input事件中实时同步输入框的数据的 \(容易同步的过于频繁 \)
 -    作用: 可以让数据只有在失去焦点或回车时才会更新

```
<input type="text" v-model.lazy="输入">
```

**number修饰符**

- 前景: 默认情况下, 在输入框中无论输入字母还是数字, 都会被当做字符串类型进行处理
- 作用: 当做数字类型进行处理

**trim修饰符**

- 前景: 输入的内容首位容易有空格
- 作用: 可以过滤掉内容左右两边的空格

#### 检测数组更新

Vue是**响应式**, 所以当数据发生变化时, Vue会自动检测数据变化, 视图会发生对应的更新.

Vue中观察数据编译的方法 – 用它们改变数组会触发视觉更新

| 数组响应式方法 | 作用                   |
| -------------- | ---------------------- |
| push\(\)       | 在数组中最后增加元素   |
| pop\(\)        | 删除数组中最后一个元素 |
| shift\(\)      | 删除数组中的第一个元素 |
| unshift\(\)    | 在数组最前面添加元素   |
| splice\(\)     | 删除 / 插入 / 替换元素 |
| sort\(\)       | xx                     |
| reverse\(\)    | xx                     |

- 

| 数组未响应 | 作用    |
| ---------- | ------- |
| filter\(\) | xxxxxxx |
| concat\(\) | xxxxxxx |
| slice\(\)  | xxxxxxx |

### 计算属性 computed

使用: 需要将多个数据结合起来进行显示的时候

```
<div id='app'>

 // 使用拼接的方法 -- 语法太过繁琐
 <h2>{{firstName + '' + lastName}}</h2>
 <h2>{{firstName}} {{lastName}}</h2>
 
 // 使用方法
 <h2>{{getFullName()}}</h2>
 
 // 使用计算属性 -- 看起来最舒服 最好
 <h2>{{fullName}}</h2>
</div>


const app = new Vue({
    el: '#app',
    data:{
        firstName: 'li',
        lastName: 'er'
    },
    // 计算属性
    computed: {
        fullName: function () {
            reture this.firstName + '' + this.lastName
        }
    },
    // 方法
    methods: {
        getFullName () {
            reture this.firstName + '' + this.lastName
        }
    }
})
```

#### 计算属性setter和getter

```
<div id='app'>
 <h2>{{fullName}}</h2>
</div>


const app = new Vue({
    el: '#app',
    data:{
        firstName: 'li',
        lastName: 'er'
    },
    // 计算属性
    computed: {
        fullName: {
            // 一般没有set方法 
            set: function (value) {
                
            },
            // 只读属性
            get: function () {
                reture this.firstName + '' + this.lastName
            }
        }
    }
})

上面案例的写法是简写. 完整写法是调用了get();
```

#### computed / methods区别

**多次使用的时候**

- methods: 每次都会调用
- computed: 计算机会缓存, 不变的情况下只调用一次

### fulters过滤器

```
<div id='app'>
 <h2 {{aaa | showA}}></h2>
</div>


const app = new Vue({
    el: '#app',
    data:{
        aaa: 'li'
    },
    // 过滤器
    fulters: {
        showA (value) {
        return;
    }
})
```

# 三. 组件化开发

## 组件的基本介绍

### 注册组件的基本步骤

 1.     调用Vue.extend\(\)方法 - 创建组件构造器
 2.     调用Vue.component\(\)方法 - 注册组件
 3.     在Vue实例的作用范围内 - 使用组件

```
<div id="app">
    //使用组件
    <my-cpm></my-cpm>
</div>

//创建组件构造器
const cpnC = Vue.extend({
    template: '
    <div>
        <h2>标题</h2>
        <p>模板</p>
    </div>'
})

//注册组件
Vue.component('my-cpn', cpmC)

const app = new Vue({
    el: '#app',
    data:{
        message: ''
    }
})

//
```

### 全局组件 / 局部组件

 -    全局组件

```
楼上的案例
```

 -    局部组件

```
<div id="app">
    <my-cpm></my-cpm>
</div>

const cpnC = Vue.extend({
    template: '
    <div>
        <h2>标题</h2>
        <p>模板</p>
    </div>'
})

const app = new Vue({
    el: '#app',
    data:{
        message: ''
    },
    components: {
        cpn: cpnC
    }
})
```

### 父组件 / 子组件

父子组件的错误用法: 以子标签的形式在Vue实例中使用

1.  因为当子组件注册到父组件的components时, Vue会编译好父组件的模块
2.  该模块的内容已经决定了父组件将要渲染的HTML \(相当于父组件中已经有子组件中的内容了\)

### 语法糖

Vue为了简化注册组件的过程, 提供了注册的语法塘, 省去了调用Vue.extend\(\)的步骤. 而是可以直接使用一个对象来代替

```
// 全局组件
Vue.component('xxx', {
    template: '
    <div>
        哈哈哈哈
    </div>
    '
})

// 内部会自动调用Vue.extend()


// 局部组件
const app = new Vue({
    el: '#app',
    data: {
        meassage: '哈哈哈'
    },
    components: {
        'cpn': {
            template: '
                <div>
                    哈哈哈哈
                </div>
            '
        }
    }
})
```

#### 组件模板抽离写法 \(简单\)

 -    方法一  
    将模板放到

```
// 注册一个全局组件  
<div id="id">
    <cpn></cpn>
</div>

<script type="text/x-tenplate" id="cpn">
    <div>
        哈哈哈哈
    </div>
</script>


Vue.component('cpn', {
    template: '#cpn'
})

```

 -    方法二  
    放入标签

```
<div id="id">
    <cpn></cpn>
</div>

<template id="cpn">
    <div>
        哈哈哈哈
    </div>
</template>


Vue.component('cpn', {
    template: '#cpn'
})
```

#### 组件可以访问VUE实例数据吗\?

不能访问  
组件是一个单独功能模块的封装 \- 这个模块有自己的HTML模板, 也应该有属性自己的数据data

```
Vue.component('cpn', {
    template: '#cpn',
    data() {
        return {
            title: '哈哈哈'
        }
    }
})

// data属性必须是一个函数, 返回必须是一个对象
```

##### 组件中的data为什么必须是一个函数\?

> https://www.bilibili.com/video/av59594689\?p=57

## 组件通讯

### 父子组件的通讯

#### 父组件通过props向子组件传递数据

 -    写法一 \(看看就行\)  
    用这种写法, 太别扭了

```
<div id="app">
    <cpm v-bind:cmovies="movies" v-bind:cmessage="message"></cpn>
</div>

<template id="cpn">
    <div>
        <li v-for="item in cmovies">{{item}}</li>
        <h2>{{cmessage}}</h2>
    </div>
</template>


const cpn = {
    template: '#cpn',
    // 把数组里的当变量来看了
    props: ['cmovies', 'cmessage'],
    data () {
        return {}
    }
}

const app = new Vue({
    el: '#app',
    data: {
        meassage: '哈哈哈',
        movies: ['哈喽', '嗨', '哟哟']
    },
    components: {
        cpn
    }
})
```

 -    写法二

```
<div id="app">
    // 在使用组件的时候绑定
    // 不支持驼峰命名  cMovies要写成c-movies
    <cpm :c-movies="movies" :c-message="message"></cpn>
</div>

<template id="cpn">
    <div>
        <li v-for="item in cMovies">{{item}}</li>
        <h2>{{cMessage}}</h2>
    </div>
</template>


const cpn = {
    template: '#cpn',
    // 把数组里的当变量来看了
    props: {
        // 类型限制 
        // cMovies: Array,
        // cMeesage: String,
        
        // 类型限制 + 提供一些默认值 or  required表示必传值,不然报错
        cMessage: {
            type: String,
            default: '哈',
            required: true
        },  
        cMovies: {
            type: Array, // 对象or数组类型的时候, 默认值必须是个函数
            default() {
                return {}
            }
        }
    }
    data () {
        return {}
    }
}

const app = new Vue({
    el: '#app',
    data: {
        meassage: '哈哈哈',
        movies: ['哈喽', '嗨', '哟哟']
    },
    components: {
        cpn
    }
})
```

#### 子组件通过事件向父组件发送数据

```
// 父组件模板
<div id="app">
    // 2.父组件监听一个事件
    // 不能写驼峰
    <cpm @itemclick="cpnClick"></cpn>
</div>

// 子组件模板
<template id="cpn">
    <div>
        <button v-for="item in categories" 
                @click="btnClick(item)">
            {{item.name}}
        </button>
    </div>
</template>


// 子组件
const cpn = {
    template: '#cpn',
    data() {
        return {
            categories: [
                {id: 'aaaa', name: '热门推荐'},
                {id: 'bbbb', name: '手机数码'},
                {id: 'cccc', name: '家用家电'},
                {id: 'dddd', name: '电脑办公'},
            ]
        }
    },
    methods: {
        btnClick(item) {
            // 要把item传给父组件
            // 1. 发送一个事件 (自定义事件)
            // 会把item当成默认的传到父组件去
            this.$emit('itemclick', item)
        ]
    }
}

// 父组件
const app = new Vue({
    el: '#app',
    data: {
        meassage: '哈哈哈'
    },
    components: {
        cpn
    },
    methods: {
        // 3. 父组件监听的事件 
        cpnClick(item) {
            console.log('成功了', item);
        }
    }
})
```

### 父子组件通讯-双向绑定

> https://www.bilibili.com/video/av59594689\?p=63

### 父子组件的访问方式

#### 父组件访问子组件

 -    \$children: 拿所有子组件
 -    \$refs: 拿指定的子组件

```
// this.$children是一个数组类型, 它包含所有子组件对象  
// 通过遍历, 取出所有子组件的message状态  

<div id="app">
    <cpm></cpn>
    <cpm></cpn>
    // 使用$refs的时候, 在想要访问的子组件上添加ref属性
    <cpm ref="aaa"></cpn>
    <buttun @click="btnClick">按钮</button>
</div>

<template id="cpn">
    <div>
        我是子组件
    </div>
</template>

const app = new Vue({
    el: '#app',
    data: {
        meassage: '哈哈哈'
    },
    methods: {
        btnClick() {
            cosole.log(this.$children);
            // $children 的使用方法, 一般用的少, 下标不固定
            // this.$children[0].showMessage();
            // this.$children[0].name;
            
            //for (let c of this.$children) {
            //    console.log(c.name); // 我是子组件的name
            //    c.showMessage(); // showMessage
            //}
            
            // $refs 的使用方法 => 对象类型, 默认是一个空的对象
            console.log(this.$refs.aaa.name); // 我是子组件的name
        }
    }
    components: {
        cpn: {
            template: "#cpn",
            data() {
                return {
                    name: '我是子组件的name'
                }
            },
            methods: {
                showMessage() {
                    cosole.log('showMessage');
                }
            }
        }
    }
})

```

#### 子组件访问父组件

 -    \$parent: 上一级父组件
 -    \$root: 根组件

```
<div id="app">
    <cpm></cpn>
</div>

<template id="cpn">
    <div>
        <ccpn></ccpn>
    </div>
</template>

<template id="ccpn">
    <div>
        <h2>我是子组件</h2>
        <button @click="btnClick">按钮</button>
    </div>
</template>

const app = new Vue({
    el: '#app',
    data: {
        meassage: '哈哈哈'
    },

    components: {
        cpn: {
            template: "#cpn",
            data() {
               return {
                   name: '我是cpn的name'
               } 
            },
            conmponents: {
                ccpn: {
                    template: '#ccpn',
                    btnClick() {
                        // 1. 访问父组件$parent
                        // 不建议这么写, 一层套一层 复用性太差
                        console.log(this.$parent);  
                        console.log(this.$parent.name);  // 我是cpn的name
                        
                        // 2. 访问根组件 $root
                        console.log(this.$root.meassage);   // 哈哈哈
                    } 
                }
            }
        }
    }
})
```

### 跨级组件通信之provide/inject

provide选项允许我们指定我们想要提供给后代组件的数据/方法。

```
provide: function () {
  return {
    fun: this.fun, //方法
    name: 'Bob', // 数据
  }
}
```

然后在任何后代组件里，我们都可以使用inject选项来接收指定的我们想要添加在这个实例上的属性：

```
//接受方法
inject: ['fun']
//接受数据
inject:['name']
```

## 插槽slot

作用:  
组件的插槽是为了让我们封装的组件更加具有扩展性  
让使用者可以决定组件内部的一些内容到底展示什么

### 基本使用

 1.     插槽的基本使用
 2.     插槽的默认值 button
 3.     如果有多个值同时放入到组件进行替换时, 一起作为替换元素

```
<div id="app">
    // 使用默认值替换
    <cpm></cpn>
    // 插槽替换的元素
    <cpm><span>这是替换的内容呀</span></cpn>
    // 多个元素
    <cpm>
        <div>第一个元素</div>
        <p>第二个元素</p>
    </cpn>
</div>

<template id="cpn">
    <div>
        <div>这个是标题</div>
        <p>这个是内容</p>
        // 放入插槽
        <slot>默认值元素</slot>
    </div>
</template>

const app = new Vue({
    el: '#app',
    data: {
        meassage: '哈哈哈'
    },
    components: {
        cpn: {
            template: '#cpn'
        }
    }
})
```

### 具名插槽

在多个插槽的情况下, 替换制定插槽的内容

```
<div id="app">
    <cpm></cpn>
    <cpm><button slot="left">返回</button></cpn>
    <cpm><span slot="center">中间标题</span></cpn>
</div>

<template id="cpn">
    <div>
        <slot name="left"><span>左边</span></slot>
        <slot name="center"><span>中间</span></slot>
        <slot name="right"><span>右边</span></slot>
    </div>
</template>

const app = new Vue({
    el: '#app',
    data: {
        meassage: '哈哈哈'
    },
    components: {
        cpn: {
            template: '#cpn'
        }
    }
})
```

### 作用域插槽

#### 编译作用域

父组件模板所有的东西都在父级作用域内编译, 子组件模板的所有东西会在子级作用域内编译

```
<div id="app">
    <cpm v-show="isShow">我是一</cpn> // true
</div>

<template id="cpn">
    <div>
        <p v-show="isShow">我是二</p> // false
    </div>
</template>

const app = new Vue({
    el: '#app',
    data: {
        isShow: true // Vue实例中的属性
    },
    components: {
        cpn: {
            template: '#cpn',
            data() {
                return {
                     isShow: false // 子组件中的属性
                }
            }
        }
    }
})
```

### 作用域插槽使用

父组件替换插槽的标签, 但是内容由子组件来提供

```
需求: 
1. 子组件中包括一组数据, num: ['1', '2', '3', '4', '5']
2. 需要在多个界面展示 
   某些界面是以水平方向展示
   某些界面是以列表形式展示
   某些界面直接展示一个数组 
3. 内容在子组件, 希望父组件告诉我们如何展示, 怎么办?
   利用slot作用域插槽就行了
   
<div id="app">
    <cpm></cpn> 
    <cpm>
        // 2. 获取子组件中的num
        <template slot-scope="slot">
            // 根据之前的起名来取  如 slot.aaa
            <span  v-for="item in slot.data">{{item}}</span>
        </template>
    </cpn> 
    <cpm></cpn> 
</div>

<template id="cpn">
    <div>
        // 1. slot定义  'data'可以随便起名 如 :aaa="num"
        <slot :data="num">
            <ul>
                <li v-for="item in num">{{item}}</li>
            </ul>
        </slot>
    </div>
</template>

const app = new Vue({
    el: '#app',
    data: {
        message: '哈哈哈'
    },
    components: {
        cpn: {
            template: '#cpn',
            data() {
                return {
                    num: ['1', '2', '3', '4', '5']
                }
            }
        }
    }
})
```

# 四. webpack

是一个JS应用的静态模块打包工具

## webpack安装

webpack依赖node环境, node环境为了可以正常执行很多代码, 必须包含各种依赖的包,npm工具是为了管理包

```
// node官网下载就行了

// 查看node版本  
npm -v  

// 全局安装webpack  (指定版本)
nom install webpack@3.6.0 -g

// 局部安装webpack  
// --save-dev 是开发时依赖, 项目打包后不需要继续使用
cd 对应目录
npm install webpack@3.6.0 --save-dev


// 查看webpack安装版本
webpack -v
```

```
// 安装webpack后错误提示 / VUE项目安装同理
webpack : 无法加载文件  C:\Users\球球\AppData\Roaming\npm\webpack.ps1，因为在此系统上禁止运行脚本。有关详细信息，请参阅 https:/go.microsoft.com/fwlink/?LinkID=135170 中的 about_Execution_Policies。        
+ webpack -v

解决方案 
（1）以管理员身份运行vs code

（2）在终端执行：get-ExecutionPolicy，显示Restricted（表示状态是禁止的）

（3）在终端执行：set-ExecutionPolicy RemoteSigned

（4）在终端执行：get-ExecutionPolicy，显示RemoteSigned
```

## webpack配置

> https://www.bilibili.com/video/av59594689\?p=77

创建: webpack.config.js 文件

```
// 为了动态获取打包后的路径, path 在node包里面 -- 看下面一段代码 装包
const path = require('path')

module.exports = {
    entry: './src/main.js', // 要打包的文件
    output: {
        path: path.resolve(__dirnmae, 'dist'), // 打包后的文件  要写绝对路径--动态获取路径
        filename: 'bundle.js'
    }
}

```

node装包

```
// 初始化--生成
npm init

// 生成的文件可能有中文 / 符号  可以改名 
meetwebpack 

... 后面全部回车, 一路通过. OK就行  
... 生成 package.json文件

// package.json文件里面也有依赖的文件  

```

package.json文件

```
"version" -- 版本号  

// 本地安装webpack (之前是全局安装)  -- 开发时依赖  运行时依赖
npm install webpack@3.6.0 --save-dev

// 开发时依赖 (本地安装webpack后, 重新打开package.json文件会出现)
"devDependencies": {  
    "webpack": "^3.6.0"  
}

// 使用vue之后, 会有 (运行时依赖)
"dependencise": {
    "webpack": "^3.6.0"  
}

---

// 执行脚本的配置
"scripts": {
    "test": '',    
    "build": "webpack" 
}

npm run test
npm run build
```

### CSS Less Img ES6转Es5 Vue 处理

webpack本身来说无法处理css, 图片, 高级ES6转化ES5的能力, 所以需要webpack扩展对应的loader就好了

**loader使用过程**

- 步骤一: 通过npm安装需要使用的loader \(查官网\)
- 步骤二: 在webpack.config.js中国年的modules关键字下配置

main.js

```
// 1. 使用commonjs的模块化规范  
const {add, mul} = require('./js/mathUtils.js')

// 2. 使用ES6的模块化的规范 
import {name, age} from "./js/info"

// 3. 依赖CSS文件  
require('./css/normal.css')
```

具体的直接看视频吧

## 认识Plugin

**plugin是什么**

- plugin是插件的意思, 用户对某个现有的架构进行扩展
- webpack中的插件就是对webpack现有功能的各种扩展, 比如打包优化, 文件压缩等

**loader和plugin区别**

- loader - 主要用户转换某些类型的模块, 它是一个转换器
- plugin - 是插件, 是对webpack本身的扩展, 它是一个扩展器

**plugin的使用过程**

- 步骤一: 通过npm安装需要使用的plugin \(某些webpack已经内置的插件不需要安装\)
- 步骤二: 在webpack.config.js中的plugins中配置插件

## 常用插件介绍

### 添加版权的Plugin

名字: BannerPlugin \(webpack自带\)

```
// 按照下面方法修改webpack.config.js文件
const path = require('path')
const webpack = require('webpack')

module.exports = {
    ...
    plugins: [
        new webpack.BannerPlugin('最终版权归coder所有')
    ]
}

// 重新打包程序, 查看bundle.js文件的头部, 看到如下信息
/*! 最终版权归coder所有 */

```

### 打包html的plugin

我们知道index.html文件是存在项目的根目录下的, 在真实发布项目是, 发布的却是dist文件夹中的内容, 所以需要将index.html文件打包到dist文件夹中.

名字: htmlWebPlugin

 1.     自动生成一个index.html文件 \(可以指定模板来生成\)
 2.     将打包的js文件, 自动通过script标签插入到body中

```
npm install html-webpack-plugin --save-dev
```

```
// 修改webpack.config.js文件
const path = require('path')
const webpack = require('webpack')
const htlmWwbPlugin = require('html-webpack-plugin')

module.exports = {
    ...
    plugins: [
        new webpack.BannerPlugin('最终版权归coder所有'),
        new htmlWebPlugin({
            template: 'index.html' // 这里的template表示根据什么模板快来生index.html
        })
    ]
}

```

### JS压缩的plugin

项目发布之前, 需要对JS等我呢渐进性压缩处理 \(代码丑化\)

名字: uglifyjs-webpack-plugin  
PS: 指定版本1.1.1 和CLI2保持一致

```
npm install uglifyjs-webpack-plugin@1.1.1 --save--dev 
```

```
// 修改webpack.config.js文件
const path = require('path')
const webpack = require('webpack')
const uglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    ...
    plugins: [
        new webpack.BannerPlugin('最终版权归coder所有'),
        new uglifyJsPlugin()
    ]
}

// 查看打包的bundle.js文件, 是已经被压缩的文件
```

## 搭建本地服务器

webpack提供一个可选的本地开发服务器\(基础node.js搭建\), 内部使用express框架, 可以实现让浏览器自动刷新显示我们修改后的结果

它是一个单独的模块, 在webpack中使用需要先安装

```
npm install --save-dev webpack-dev-server@2.9.1  
```

 -    devserver也是作为webpack中的一个选项, 选项本身可设置如下属性  
    contentBase: 为哪一个文件夹提供本地服务, 默认是根文件夹. 可填写 ./dist  
    port: 端口号  
    inline: 页面实时刷新  
    historyApiFallback: 在SPA页面中, 依赖HTML5的history模式

```
// 修改webpack.config.js文件
module.exports = {
    ...
    devServer: {
        contentBase: './dist',
        inline: true
    }
}

// package.json文件中再配置一个scripts,  open参数表示直接打开浏览器 
"scripts": {
    ...
    "dev": "webpack-dev-server --open" 
}
```

## webpack配置分离

很多配置开发时需要, 发布时不需要,反之一样, 所以要做分离

 1.     在build文件夹中, 建立一个base.config.js文件 --> 公共配置
 2.     在build文件夹中, 建立一个dev.config.js文件 --> 开发配置
 3.     在build文件夹中, 建立一个prod.config.js文件 --> 发布配置
 4.     复制webpack.config.js文件内容 -> 上面三个文件
 5.     按照区分 --> 进行文件夹内配置的删除
 6.     装一个插件

```
npm install webpack-merge --save-dev 
```

7.  https://www.bilibili.com/video/av59594689\?p=89 \(9m\)  
    …

# 五. Vue CLI

CLI 是\(Command-Line Interface\) 命令行界面, 俗称脚手架  
Vue CLI是官方发布的vue.js项目脚手架, 可以快速搭建vue开发环境以及webpack配置

Vue CLI 使用前提 \- 安装node 安装webpack

## Vue CLI的使用

```
// 安装Vue脚手架 
npm install -g @vue/cli  

// 上面安装的是Vue CLI3.0版本, 想要按照Vue CLI2的方式初始化项目时需要进行下列的命令 
// 拉取2.x模板
// 'vue init' 的运行效果将会跟 'vue-cli@2.x' 相同
npm install -g @vue/cli-init  

// Vue CLI2初始化项目  project -> 项目名称 英文
vue init webpack project

// Vue CLI3初始化项目 project -> 项目名称 英文
vue create project
```

### Vue CLI2

```
// 创建Vue CLI2项目
vue init webpack vuecli2   

? Project name vuecli2 --> 项目名字
? Project description test vue cli2 --> 项目描述  
? Author  huqinxue --> 作者
? Vue build --> 详解看下面一段
? Install vue-router? (Y/n)  Y
? Use ESlint to lint your code? (Y/n) Y
  ? Pick an ESLint preset --> 选择ESlint的规范 Standard  
? Set up unit tests (Y/n)  --> 单元测试 
? Setup e2e tests with Nightwatch? (Y/n)  --> 端对端测试 
? Yes, use NPM
  Yes, use Yarn
  
```

#### ❤ Vue build的选择-runtiome+compilter和runtiome-only 区别

> https://www.bilibili.com/video/av59594689\?p=95  
> ① runtiome+compilter 和 runtiome-only 区别  
> ② render函数的使用

```
runtiome+compilter 和 runtiome-only 区别只在 main.js文件里面

// runtiome+compilter 流程 
template -> ast (抽象语法树) -> render -> Virtual dom (虚拟DOM) -> UI

// runtiome-only 流程  (1. 性能更好  2. 代码量更少)
render -> Virtual dom (虚拟DOM) -> UI 
```

```
rebder函数的使用 (runtiome-only)

-- 使用方式一: 
return createElement('标签', '相关数据对象, 可不传', ['内容数组']) 

new Vue({
    el: "#app",
    render: (createElement) => {
        //render函数基本使用
        return createElement('div', {class: 'box'}, ['codewhy']) 
        //嵌套render函数
        return createElement('div', {class: 'box'}, ['codewhy', createElement('h2', ['标题啊'])]) 
    }
})

-- 使用方式二: 传入一个组件对象  
const cpn = Vue.component('cpn', {
    template: '<div>我是cpn组件</div>',
    data () {
        return {
            
        }
    }
})

new Vue({
    el: "#app",
    render: (createElement) => {
        return createElement(cpn) 
    }
})
```

#### 目录结构解析

> https://www.bilibili.com/video/av59594689\?p=92

```
// package.json文件  -> 查看命令的写法
"scripts": {
    "dev": --> build / webpack.dev.conf.js 
    "start":
    "lint": 
    "build":  --> build / build.js + webpack.prod.conf.js 
}  

// config文件夹  
都是定义的一些变量  

// node_moudules文件夹  
依赖的包 

// src文件夹  
开发的文件夹  

// static文件夹  
静态资源, 打包后会原封不动的放到build文件夹中


// .bobelrc文件
依赖evn的时候产生的文件

// .editorconfig文件  
快速的一些习惯, 比如空格是2个字符还是4个字符

// .eslintignore文件
eslint可以忽略的问题  

! 看视频吧, 写的..累
图2
```

#### CLI错误

```
// 安装不成功的时候, 可以清除缓存 (要从管理员权限打开)
npm clean cache --force
```

### Vue CLI3

3 是基于 webpack 4 打造，2还是 webapck 3  
3 的设计原则是“0配置”，移除的配置文件根目录下的，build和config等目录  
3 提供了 vue ui 命令，提供了可视化配置，更加人性化  
移除了static文件夹，新增了public文件夹，并且index.html移动到public中

```
// 创建Vue CLI3项目
vue create program 

? Please pick a preset:
> default (babel, eslint)
> Manually select features //手动选择功能
```

 -    default路线

```
// 用哪个下载依赖
Pick the package manager to use when installing dependencies: 
  Use Yarn
> Use NPM
  
Vue CLI v3.0.0-alpha.5
✨  reating project in E:\git\note\my-project. // 创建项目
�  Initializing git repository... // 初始化git库
⚙  Installing CLI plugins. This might take a while... // 安装脚手架插件  

其实这个过程中还会判断你对npm/yarn源的连接速度，询问你是否切换至淘宝镜像
Your connection to the the default npm registry seems to be slow.
Use https://registry.npm.taobao.org for faster installation? 
 
完成之后我们可以看到除node_modules之外的目录结构变成了
│  package-lock.json
│  package.json
├─public
│      favicon.ico
│      index.html
└─src
    │  App.vue
    │  main.js
    ├─assets
    │      logo.png
    └─components
            HelloWorld.vue
```

 -    Manually select features路线

```
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection)
>( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 ( ) Router
 ( ) Vuex
 ( ) CSS Pre-processors
 ( ) Linter / Formatter --> ESLint
 ( ) Unit Testing
 ( ) E2E Testing

PS: 空格选中/反选 回车确认 
 
看到可以自由组合现在所需的功能了。
创建的过程中会询问配置文件保存位置是config.js还是package.json，但是其中也是一些简单的配置

// 这些配置文件存放方式  
? Where do you prefer placing config for Bable, PostCSS, ESLint, etc,> (Use arrow keys)  
> In dedicated config files  --> 单独存放到一个文件   
  In package.json

// 刚刚自定义的配置是否需要保存一个模板 (下次会在创建后出现)  
// 可以删除的, 在.vuerc文件里  
// 文件后面有rc (run command 运行终端的意思)  
? Save this as a preset for future projects? (Y/n)
...

// 用哪个下载依赖
Pick the package manager to use when installing dependencies: 
  Use Yarn
> Use NPM
```

#### 目录结构

```
// public 文件夹  
相当于Vue CLI2中的 static文件夹   
存储不压缩的内容  

// .babelrc 文件 
ES语法转换

// .browserslistrc 文件  
浏览器相关支持情况  

// .gitigore 文件  
git忽略文件  

// .postcssrc.js 文件  
CSS相关转换
```

#### 配置

> https://www.bilibili.com/video/av59594689\?p=97

```
// 启动本地服务器 
vue ui 

// 自定义配置   
看视频吧~~
```

# 六. vue-router

路由是一个网络工程里面的术语  
路由（routing）就是通过互联的网络把信息从源地址传输到目的地址的活动 — 维基百科

**路由器提供了两种机制: 路由和转送**

- 路由是决定数据包从**来源到目的地**的路径
- 转送将**输入端**的数据转移到合适的**输出端**

**路由中有一个非常重要的概念叫路由表**

- 路由表本质上就是一个映射表, 决定了数据包的指向

## 前端渲染 + 后端渲染

> https://www.bilibili.com/video/av59594689\?p=100

### 后端路由阶段

**早期的网站开发整个HTML页面是由服务器来渲染**

- 服务器直接生产渲染好对应的HTML页面, 返回给客户端进行展示
- 一个页面有自己对应的网址, 也就是URL.
- URL会发送到服务器,
- 服务器会通过正则对该URL进行匹配,并且最后交给一个Controller进行处理.
- Controller进行各种处理, 最终生成HTML或者数据, 返回给前端.  
  这就完成了一个IO操作.

**上面的操作, 就是后端路由**

- 当我们页面中需要请求不同的路径内容时, 交给服务器来进行处理, 服务器渲染好整个页面, 并且将页面返回给客户顿
- 这种情况下渲染好的页面, 不需要单独加载任何的js和css, 可以直接交给浏览器展示, 这样也有利于SEO的优化

**后端路由的缺点**

- 一种情况是整个页面的模块由后端人员来编写和维护的
- 另一种情况是前端开发人员如果要开发页面,需要通过PHP和Java等语言来编写页面代码
- 而且通常情况下HTML代码和数据以及对应的逻辑会混在一起, 编写和维护都是非常糟糕的事情

### 前端路由阶段

**前后端分离阶段**

- 随着Ajax的出现, 有了前后端分离的开发模式
- 后端只提供API来返回数据, 前端通过Ajax获取数据,并且可以通过JavaScript将数据渲染到页面中
- 这样做最大的优点就是前后端责任的清晰, 后端专注于数据上,前端专注于交互和可视化上
- 当移动端\(iOS/Android\)出现后, 后端不需要进行任何处理, 依然使用之前的一套API即可
- 目前很多的网站依然采用 这种模式开发

**前端渲染**  
浏览器中显示的网页中大部分内容, 都是由前端写的JS代码在浏览器中执行,最终渲染出来

**SPA单页面富应用阶段**

- 其实SPA最主要的特点就是在前后端分离的基础上加了一层前端路由.
- 也就是前端来维护一套路由规则

**前端路由的核心**  
改变URL，但是页面不进行整体的刷新

**如何实现**

1.  URL的hash  
    URL的hash也就是锚点\(#\), 本质上是改变window.location的href属性.  
    通过直接赋值location.hash来改变href, 但页面不刷新

2.  HTML5的history模式  
    history接口是HTML5新增的, 它有五种模式改变URL而不刷新页面  
    ①. history.pushState\(\) \--> 入栈  
    ②. history.replaceState\(\)  
    ③. history.go\(\)  
    ④. history.back\(\) 等价于 history.go\(-1\) \--> 后退  
    ⑤. history.forward\(\) 等价于 history.go\(1\) \--> 前进

### 综合总结提问

#### 1\. 什么是前端渲染, 什么是后端渲染\?

**前端渲染**：

指的是后端返回JSON数据，前端利用预先写的html模板，循环读取JSON数据，拼接字符串（es6的模板字符串特性大大减少了拼接字符串的的成本），并插入页面。

- 好处：网络传输数据量小。不占用服务端运算资源（解析模板），模板在前端（很有可能仅部分在前端），改结构变交互都前端自己来了，改完自己调就行。

- 坏处：前端耗时较多，对前端工作人员水平要求相对较高。前端代码较多，因为部分以前在后台处理的交互逻辑交给了前端处理。占用少部分客户端运算资源用于解析模板。

**后端渲染**：

前端请求，后端用后台模板引擎直接生成html，前端接受到数据之后，直接插入页面。

- 好处：前端耗时少，即减少了首屏时间，模板统一在后端。前端（相对）省事，不占用客户端运算资源（解析模板）

- 坏处：占用服务器资源。

**前端渲染与后端渲染对**比：

- 后端渲染：

页面呈现速度：快，受限于用户的带宽  
流量消耗：少一点点（可以省去前端框架部分的代码）  
可维护性：差（前后端东西放一起，掐架多年，早就在闹分手啦）  
seo友好度：好  
编码效率：低（这个跟不同的团队不同，可能不对）

- 前端渲染：

页面呈现速度：主要受限于带宽和客户端机器的好坏，优化的好，可以逐步动态展开内容，感觉上会更快一点

流量消耗：多一点点（一个前端框架大概50KB）当然，有的用后端渲染的项目前端部分也有在用框架

可维护性：好，前后端分离，各施其职，代码一目明了。  
SEO友好度：差，大量使用ajax，多数浏览器不能抓取ajax数据。  
编码效率：高，前后端各自只做自己擅长的东西，后端最后只输出接口，不用管页面呈现，只要前后端人员能力不错，效率不会低

#### 2\. 什么是前后端分离

现在 Web 服务器不再处理任何业务，它接收到请求后，经过转换，发送给各个相关后端服务器，将各个后端服务器返回的，处理过的业务数据填入 HTML 模板，最后发送给浏览器。Web 服务器和后端服务器间，可以选用任何你觉得合适的通信手段，可以是 REST，可以是 RPC，选用什么样的通信手段，这是另一个议题了。

这样，前端人员和后端人员约定好接口后，前端人员彻底不用再关心业务处理是怎么回事，他只需要把界面做好就可以了，后端人员也不用再关系前端界面是什么样的，他只需要做好业务逻辑处理即可。服务的切离，代码管理，服务部署也都独立出来分别管理，系统的灵活性也获得了极大的提升。

**注意，这不是个微服务架构，那是另外一个议题了**

总结，任何系统架构设计，实际上是对组织结构在系统上进行映射，前后端分离，就是在对前端开发人员和后端开发人员的工作进行解耦，尽量减少他她们之间的交流成本，帮助他她们更能专注于自己擅长的工作。

**最后是几个常见误解的说明**：

1.  前后端分离是说浏览器和后端服务分离吗？

不是，前后端分离里的前端不是浏览器，指的是生成 HTML 的那个服务，它可以是一个仅仅生成 HTML 的 Web 服务器，也可以是在浏览器中通过 JS 动态生成 HTML 的 单页应用。实践中，有实力的团队往往在实现前后端分离里时，前端选用 node 服务器，后端选用 C#、Java 等（排名不分先后）

2.  前后端分离是种技术吗？

不是，前后端分离是种架构模式，或者说是最佳实践。所谓模式就是大家这么用了觉得不错，你可以直接抄来用的固定套路。

3.  前后端分离是最佳实践吗？

看你团队和项目的情况，如果是短平快的小项目，真的没必要。如果是面向简历开发，那绝对在任何时候都应该使用前后端分离这种架构。

#### 3\. 什么是前端路由, 什么是后端路由\?

**A. 什么是前端路由？**

很重要的一点是页面不刷新，前端路由就是把不同路由对应不同的内容或页面的任务交给前端来做，每跳转到不同的URL都是使用前端的锚点路由. 随着（SPA）单页应用的不断普及，前后端开发分离，目前项目基本都使用前端路由，在项目使用期间页面不会重新加载

**B. 什么是后端路由？**

浏览器在地址栏中切换不同的url时，每次都向后台服务器发出请求，服务器响应请求，在后台拼接html文件传给前端显示, 返回不同的页面, 意味着浏览器会刷新页面，网速慢的话说不定屏幕全白再有新内容。后端路由的另外一个极大的问题就是 前后端不分离。

优点：分担了前端的压力，html和数据的拼接都是由服务器完成。

缺点：当项目十分庞大时，加大了服务器端的压力，同时在浏览器端不能输入制定的url路径进行指定模块的访问。另外一个就是如果当前网速过慢，那将会延迟页面的加载，对用户体验不是很友好。

**C. 什么时候使用前端路由？**

在单页面应用，大部分页面结构不变，只改变部分内容的使用

**D. 前端路由有什么优点和缺点？**

优点:

- 用户体验好，和后台网速没有关系，不需要每次都从服务器全部获取，快速展现给用户

- 可以再浏览器中输入指定想要访问的url路径地址。

- 实现了前后端的分离，方便开发。有很多框架都带有路由功能模块

缺点:

- 使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存

- 单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置

## vue-router基本了解

### 认识vue-router

目前前端流行的三大框架, 都有自己的路由实现:

- Angular: ngRouter
- React: ReactRouter
- Vue: vue-router

vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用  
我们可以访问其官方网站对其进行学习: https://router.vuejs.org/zh/  
vue-router是基于路由和组件的  
路由用于设定访问路径, 将路径和组件映射起来.  
在vue-router的单页面应用中, 页面的路径的改变就是组件的切换.

### 安装vue-router

#### 方法一: 创建项目时就选择路由

#### 方法二: 自己安装路由

> https://www.bilibili.com/video/av59594689\?p=102

因为我们已经学习了webpack, 后续开发中我们主要是通过工程化的方式进行开发的.  
在后续, 我们直接使用npm来安装路由即可

 -    步骤一: 安装vue-router

```
npm install vue-router --save
```

 -    步骤二: 在模块化工程中使用它\(因为是一个插件, 可以通过Vue.use\(\)来安装路由功能\)

```
在src文件夹中创建router文件夹  
在router文件夹中创建index.js文件

-- index.js  配置路由相关的信息
// 导入路由对  
import Vue from ‘vue’
import VueRouter from ‘vue-router’

// 2. 通过Vue.use(插件)安装插件
Vue.use(VueRouter)

// 3. 创建路由实例--> VueRouter对象  
// 3.2 把router抽象出来
const routes = [
]

const app = new VueRouter({
    // 3.1 配置路由和组件之间的映射配置 
    router
})

// 4. 将router对象传入到Vue实例  
export defualt router

-- main.js 文件 
// 导入router
import router from './router'

// 挂载
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})

```

## vue-router的使用

通过和

 -    : 该标签是一个vue-router中已经内置的组件, 它会被渲染成一个标签
 -    : 该标签会根据当前的路径, 动态渲染出不同的组件
 -    网页的其他内容, 比如顶部的标题/导航, 或者底部的一些版权信息等会和处于同一个等级
 -    在路由切换时, 切换的是挂载的组件, 其他内容不会发生改变

```
-- router - index.js文件 

import Vue from ‘vue’
import VueRouter from ‘vue-router’
import Home from '../components/Home'
import About from '../components/About'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        // 页面默认的时候, redirect重定向
        redirect: './home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const app = new VueRouter({
    router,
    // 改变模式 默认是hash模式(有#号)
    mode: 'history'
})

export default router
```

```
-- App.vue文件

<div>
    <router-link to="/home"></router-link>
    <router-link to="/about"></router-link>
    <router-view></router-view>
</div>
```

### router-link属性补充

**属性 to**  
用于指定跳转的路径

```
<router-link to='/home'></router-link>
```

**属性 tag**  
可以指定之后渲染成什么组件

```
// 会被渲染成一个<li>元素
<router-link to='/home' tag='li'></router-link>
...
```

**属性 replace**  
不会留下history记录, 所以指定replace的情况下, 后退键返回不能返回到上一个页面中

```
<router-link to='/home' replace></router-link>
```

**属性 active-class**  
设置active-class可以修改默认的名称

```
// home被选中状态 
// 当<router-link>对应的路由匹配成功时, 会自动给当前元素设置一个router-link-active的class
<router-link to='/home' router-link-active></router-link>
<router-link to='/about'></router-link>

// 修改默认的名称  
<router-link to='/home' active-class="active"></router-link>
<router-link to='/about' active-class="active"></router-link>
...

// 每一个都添加太麻烦了, 可以在router - index.js中统一修改
const app = new VueRouter({
    router,
    mode: 'history',
    linkActiveClass: 'active'
})
```

### 路由跳转第二种方法

在路由跳转需要执行对应的js代码的时候, 可以使用

```
-- App.vue文件

<div>
    <router-link @click="linkToHome"></router-link>
    <router-link @click="linkToAbout></router-link>
    <router-view></router-view>
</div>

<script>
export default {
    name: 'App',
    methods: {
        // Vue-router在所有组件里都加入了$router 
        linkToHome () {
            // push => pushState 可以返回
            this.$router.push('./home')
        },
        linkToAbout () {
            // replace => replaceState 没有返回
            this.$router.replace('./about')
        }
    }
}
</script>
```

### 动态路由

某些情况下，一个页面的path路径可能是不确定的，比如我们进入用户界面时，希望是如下的路径：

 -    /user/aaaa或/user/bbbb
 -    除了有前面的/user之外，后面还跟上了用户的ID
 -    这种path和Component的匹配关系，我们称之为动态路由\(也是路由传递数据的一种方式\)

```
-- router - index.js文件 

import Vue from ‘vue’
import VueRouter from ‘vue-router’
import Home from '../components/Home'
import About from '../components/About'
import User from '../components/User'

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        redirect: './home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/user/:userId',
        component: User
    }
]

const app = new VueRouter({
    router,
    mode: 'history'
})

export default router
```

```
-- App.vue文件

<div>
    <router-link to="/home"></router-link>
    <router-link to="/about"></router-link>
    <router-link v-bind:to="'/user/' + userId"></router-link>
    <router-view></router-view>
</div>

<script>
export default {
    name: 'App',
    data () {
        return: {
            userId: '球球'
        }
    }
}
</script>
```

 -    点击进入User页面后, 想要拿到User的后缀\(userId\)  
    **this.\$route.params**  
    \$route: 谁处于活跃状态, 拿到谁

```
上面的代码照写  

-- User.vue文件  
<template>
    <div>
        <h2>{{userId}}</h2>
    </div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        userId () {
            return this.$route.params.userId
        }
    }
}
</script>
```

```
第二种写法  

<template>
    <div>
        <h2>{{$route.params.userId}}</h2>
    </div>
</template>

<script>
export default {
    name: 'User'
}
</script>
```

### 路由打包文件解析

> https://www.bilibili.com/video/av59594689\?p=108

```
-- dist - static - js文件夹

app.xxxxxx  -  当前应用程序开发的所有代码 (业务代码)  
manifest.xxxxx  -  为了打包的代码做底层支撑 
vendor.xxxx  -  提供第三方vue/vue-router/axios/bs

```

### 路由懒加载

**懒加载的方式**

 -    方式一: 结合Vue的异步组件和Webpack的代码分析

```
const Home = resolve => {  
    require.ensure(['../components/Home.vue'], () => {
        resolve(require('../components/Home.vue'))
    })
};          

不推荐使用, 最早期的写法  
```

 -    方式二: AMD写法

```
const About = resolve => require(['../components/About.vue'], resolve);
```

 -    方式三: 在ES6中, 我们可以有更加简单的写法来组织Vue异步组件和Webpack的代码分割.

```
const Home = () => import('../components/Home.vue')

最新的, 推荐  
```

**上面的案例增加路由软加载**

```
-- router - index.js文件 

import Vue from ‘vue’
import VueRouter from ‘vue-router’

const Home = () => import('../components/Home.vue')
const About = () => import('../components/About.vue')


Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        redirect: './home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    }
]

const app = new VueRouter({
    router,
    mode: 'history'
})

export default router
```

## vue-router嵌套路由

嵌套路由是一个很常见的功能  
比如在home页面中, 我们希望通过/home/news和/home/message访问一些内容.  
一个路径映射一个组件, 访问这两个路径也会分别渲染两个组件.

### 实现嵌套路由步骤

 1.     创建对应的子组件, 并且在路由映射中配置对应的子路由.

```
-- router - index.js文件 

import Vue from ‘vue’
import VueRouter from ‘vue-router’

const Home = () => import('../components/Home.vue')
const HomeNews = () => import('../components/HomeNews.vue')
const About = () => import('../components/About.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        redirect: './home'
    },
    {
        path: '/home',
        component: Home,
        children: {
            {
                path: 'news',
                component: HomeNews
            }
        }
    },
    {
        path: '/about',
        component: About
    }
]

const app = new VueRouter({
    router,
    mode: 'history'
})

export default router
```

 2.     在嵌套组件内部使用\< router-view>标签.

```
-- Home.vue文件

<div>
    <h2>我是首页</h2>
    // 要写完整的路径
    <router-link to="/home/news"></router-link>
    <router-view></router-view>
</div>

<script>
export default {
    name: 'App'
}
</script>
```

## vue-router参数传递

**准备工作**  
为了演示传递参数, 我们这里再创建一个组件, 并且将其配置好

- 第一步: 创建新的组件Profile.vue
- 第二步: 配置路由映射
- 第三步: 添加跳转的\< router-link>

### 传递参数的方式

传递参数主要有两种类型: params和query

**params的类型**

 1.     配置路由格式: /router/:id
 2.     传递的方式: 在path后面跟上对应的值
 3.     传递后形成的路径: /router/123, /router/ab

```
就是动态路由的传递方式 ^^ 往上看
```

**query的类型**

 1.     配置路由格式: /router, 也就是普通配置

```
-- index.js文件 

import Vue from ‘vue’
import VueRouter from ‘vue-router’

const Home = () => import('../components/Home.vue')
const User = () => import('../components/User.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        redirect: './home'
    },
    {
        path: '/user', 
        component: User
    }
]

const app = new VueRouter({
    router,
    mode: 'history'
})

export default router
```

 2.     传递的方式: 对象中使用query的key作为传递方式

```
-- User.vue文件

<div>
    <router-link to="/home"></router-link>
    <router-link :to="{path: '/user', query: {name: 'qiuqiu', age: 18}}"></router-link>
    <router-view></router-view>
</div>

<script>
export default {
    name: 'App',
    data () {
        return: {
            userId: '球球'
        }
    }
}
</script>
```

 3.     传递后形成的路径: /router\?id=123, /router\?id=abc

```
<template>
    <div>
        <h2>{{$route.query}}</h2>
        <p>{{$route.query.name}}</p>
    </div>
</template>

<script>
export default {
    name: 'User'
}
</script>
```

### 通过点击事件带参数

参考上面写的动态跳转的第二个方法

```
-- index.js文件 

import Vue from ‘vue’
import VueRouter from ‘vue-router’

const Home = () => import('../components/Home.vue')
const User = () => import('../components/User.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/', 
        redirect: './home'
    },
    {
        path: '/user', 
        component: User
    }
]

const app = new VueRouter({
    router,
    mode: 'history'
})

export default router
```

```
-- User.vue文件

<div>
    <router-link to="/home"></router-link>
    <button #click="userClick"></button>
    <router-view></router-view>
</div>

<script>
export default {
    name: 'App',
    methods: {
        userClick () {
            // 跳转 带参数
            this.$router.push({
                path: '/user',
                query: {
                    name: 'qiuqiu',
                    age: '18'
                }
            })
        }
    }
}
</script>
```

### r o u t e 和 route和 route和router的区别

- \$router为VueRouter实例，想要导航到不同URL，则使用router.push方法
- \$route为当前router\(选中状态\)跳转对象里面可以获取name、path、query、params等

> route的由来–看源码  
> https://www.bilibili.com/video/av59594689\?p=113

## vue-router导航守卫

**为什么使用导航守卫\?**  
我们来考虑一个需求: 在一个SPA应用中, 如何改变网页的标题呢\?

- 网页标题是通过来显示的, 但SPA只有一个固定的HTML, 切换不同页面时, 标题并不会改变
- 可以通过JS来修改的内容 window.document.title = “新的标题”

**更好的办法-使用导航守卫**  
vue-router提供的导航守卫主要用来监听监听路由的进入和离开的.  
vue-router提供了beforeEach和afterEach的钩子函数, 它们会在路由即将改变前和改变后触发.

**导航守卫使用**  
我们可以利用beforeEach来完成标题的修改.  
首先, 我们可以在钩子当中定义一些标题, 可以利用meta来定义  
其次, 利用导航守卫,修改我们的标题.

```
-- index.js文件 

import Vue from ‘vue’
import VueRouter from ‘vue-router’

const Home = () => import('../components/Home.vue')
const User = () => import('../components/User.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/home', 
        redirect: './home',
        // 元数据 (描述数据的数据)
        meta: {
            title: '首页'
        }
    },
    {
        path: '/user', 
        component: User,
        meta: {
            title: '用户'
        }
    }
]

const app = new VueRouter({
    router,
    mode: 'history'
})

// 前置守卫(guard)
router.beforeEach((to, from, next) => {
    // 从from跳转到to
    window.document.title = to.matched[0].meta.title;
    next();
})

export default router
```

**导航钩子的三个参数解析**:

- to: 即将要进入的目标的路由对象
- from: 当前导航即将要离开的路由对象
- next: 调用该方法后, 才能进入下一个钩子

**导航守卫补充**

 -    如果是后置钩子, 也就是afterEach, 不需要主动调用next\(\)函数.
 -    上面我们使用的导航守卫, 被称之为全局守卫  
    路由独享的守卫  
    组件内的守卫

```
// 后置守卫(guard)
router.afterEach((to, from) => {
    
})
```

## keep-alive

keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染

_它们有两个非常重要的属性_:

- include - 字符串或正则表达，只有匹配的组件会被缓存
- exclude - 字符串或正则表达式，任何匹配的组件都不会被缓存

router-view 也是一个组件，如果直接被包在 keep-alive 里面，所有路径匹配到的视图组件都会被缓存

```
<keep-alive>
    <router-view>
        // 所有路径匹配到的视图组件都会被缓存
    </router-view>
</keep-alive>
```

## 路径配置问题补充

图片等静态资源引用路径,如果修改太麻烦了. 可以统一做配置.

```
-- build 文件夹 - webpack.base.config.js文件  

resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
        '@': resolve('src'),
        'assets': resolve('src/assets'),
        'components': resolve('src/components'),
        'views': resolve('src/views')
    }
}

使用: 
import xxx from './components/xxx'  
--> 
import xxx from 'components/xxx'  

<img src="../../assets/img/xxx.jpg">
-->
<img src="~assets/img/xxx.jpg">  
在html增加需要加~号
```

# 七. Vuex详解

## Vuex是做什么的

**Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式**

- 它采用 集中式存储管理 应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
- Vuex 也集成到 Vue 的官方调试工具 devtools extension，提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能

**状态管理到底是什么**

- 状态管理模式、集中式存储管理
- 可以简单的将其看成把需要多个组件共享的变量全部存储在一个对象里面
- 然后将这个对象放在顶层的Vue实例中，让其他组件可以使用
- 那么多个组件是不是就可以共享这个对象中的所有变量属性了呢

**管理什么状态呢**  
如果你做过大型开放，你一定遇到过多个状态，在多个界面间的共享问题。  
比如用户的登录状态、用户名称、头像、地理位置信息等等。  
比如商品的收藏、购物车中的物品等等。  
这些状态信息，我们都可以放在统一的地方，对它进行保存和管理，而且它们还是响应式的

## Vuex状态管理

**单界面的状态管理**

State：状态。（你姑且可以当做就是data中的属性）  
View：视图层，可以针对State的变化，显示不同的信息。（这个好理解吧？）  
Actions：这里的Actions主要是用户的各种操作：点击、输入等等，会导致状态的改变

```
官方看图 

View->Actions->State->View
```

**多界面的状态管理**

```
官方看图 
```

### 创建使用

**需求: 一个数字, 二个按钮, 加减**

 1.     需要在某个地方存放我们的Vuex代码, 先创建一个文件夹store，并且在其中创建一个index.js文件  
    在index.js文件中写入如下代码

```
import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)  

const store = new Vuex.store({
    state: {
        count: 0
    },
    mutations: {
        // state是默认的参数 
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        }
    }
})

export default store
```

 2.     挂载到Vue实例中, 让所有的Vue组件都可以使用这个store对象 - 来到main.js文件，导入store对象，并且放在new Vue中, 这样在其他Vue组件中，我们就可以通过this.\$store的方式，获取到这个store对象了

```
import Vue from 'vue'
import App from './App'
impotr store from './store'

new Vue({
    e;: '#app',
    stroe,
    render: h => h(App)
})
```

 3.     使用Vuex的count

```
<template>
    <dov id="app">
        <p>{{count}}</p>
        <button @click="increment">+1</button>
        <button @click="decrement">-1</button>
    </div>
</template>

<script>
export default {
    name: 'App',
    computed: {
        count: function () {
            return this.$store.state.count
        }
    },
    methods: {
        increment: function 90 {
            this.$store.commit('increment');
        },
        decrement: function 90 {
            this.$store.commit('decrement');
        }
    }
}
</script>
```

4.  总结

- 通过this.\$store.state.属性的方式来访问状态
- 通过this.\$store.commit\(‘mutation中方法’\)来修改状态

## Vuex核心概念

### state单一状态树

Vuex提出使用单一状态树, 即单一数据源

**应用开发中**

- 如果你的状态信息是保存到多个Store对象中的，那么之后的管理和维护等等都会变得特别困难。
- 所以Vuex也使用了单一状态树来管理应用层级的全部状态。
- 单一状态树能够让我们最直接的方式找到某个状态的片段，而且在之后的维护和调试过程中，也可以非常方便的管理和维护

### Getters

类似于computed  
需要从store中获取一些state变异后的状态

案例: 获取学生年龄大于20的个数

```
const store = new Vuex.store({
    state: {
        students: [
            {id: 100, name: 'aaa', age: 10},
            {id: 100, name: 'bbb', age: 12},
            {id: 100, name: 'ccc', age: 11},
            {id: 100, name: 'ddd', age: 12},
        ]
    },
    getters: {
        // state是默认参数
        getAgesCount (state) {
            return state.students.filter(s => s.age > 10)
        }
    }
})
```

 -    computed的写法

```
computed: {
    getAgesCount () {
        return this.$store.state.students.filter(s => s.age > 10)
    }
}
```

**Getters作为参数和传递参数**  
需求; 如果我们已经有了一个获取所有年龄大于20岁学生列表的getters, 那么代码可以这样来写  
需求2: getters默认是不能传递参数的, 如果希望传递参数, 那么只能让getters本身返回另一个函数.  
比如上面的案例中,我们希望根据ID获取用户的信息

```
const store = new Vuex.store({
    state: {
        students: [
            {id: 100, name: 'aaa', age: 10},
            {id: 100, name: 'bbb', age: 12},
            {id: 100, name: 'ccc', age: 11},
            {id: 100, name: 'ddd', age: 12},
        ]
    },
    getters: {
        getAgesCount (state) {
            return state.students.filter(s => s.age > 10)
        },
        // 需求1
        getAgesCountLength(state, getters) {
            return getters.getAgesCount.length
        },
        // 需求2
        // 在调用的时候 传入了参数
        getAges(state) {
            return function (age) {
                renturn stage.students.filter(s => s.id === id)
            }
        }
    }
})
```

### Mutation

#### Mutation状态更新

Vuex的store状态的更新唯一方式：提交Mutation

**Mutation主要包括两部分**

- 字符串的事件类型（type）
- 一个回调函数（handler）,该回调函数的第一个参数就是state

**Mutation定义方式**

```
mutations: {
    aaa(state) {
        state.xx++
    }
}
```

**通过Mutation更新**

```
bbb: function () {
    this.$store.commit('aaa')
}
```

#### Mutation传递参数

 1.     Mutation提交风格一  
    在通过mutation更新数据的时候, 有可能我们希望携带一些额外的参数  
    参数被称为是mutation的载荷\(Payload\)

```
aaa(state, n) {
    state.count -= n;
}

bbb: function () {
    this.$store.commit('aaa', 1);
}
```

有很多参数需要传递.  
通常会以对象的形式传递, 也就是payload是一个对象

```
aaa(state, payload) {
    state.count -= payload.count;
}

bbb: function () {
    this.$store.commit('aaa', {count: 0});
}
```

 2.     Mutation提交风格二  
    通过commit进行提交是一种普通的方式  
    Vue还提供了另外一种风格, 它是一个包含type属性的对象

```
this.$store.commit({
    type: 'aaa',
    count: 100
})
```

#### Mutation响应规则

Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新.

**必须遵守一些Vuex对应的规则**:

 1.     提前在store中初始化好所需的属性.
 2.     当给state中的对象添加新属性时, 使用下面的方式:
    - 方式一: 使用Vue.set\(obj, ‘newProp’, 123\)
    - 方式二: 用心对象给旧对象重新赋值

```
// 以下的方式, 修改了数据, 但是界面未更新, 不是响应式 
const store = new Vuex.store({
    state: {
        info: {
            nameL: 'qiuqiu',
            age: 18
        }
    },
    mutations: {
        upInfo(state, payload) {
            state.info('sex') = payload.sex;
        }
    }
})

// 需要数据实时更新界面的写法 
mutations: {
    upInfo(state, payload) {
        // 方法一: Vue.set()
        Vue.set(state.info, 'sex', payload.sex);
        // 方法二: 给info赋值一个新的对象  
        state.info = {...state.info, 'sex': payload,sex};
    }
}

// 属性删除  Vue.delete(obj, 'newProp')
```

#### Mutation常量类型 – 概念

**考虑下面的问题**

- 在mutation中, 我们定义了很多事件类型\(也就是其中的方法名称\).  
  当我们的项目增大时, Vuex管理的状态越来越多, 需要更新状态的情况越来越多, 那么意味着Mutation中的方法越来越多.
- 方法过多, 使用者需要花费大量的经历去记住这些方法, 甚至是多个文件间来回切换, 查看方法名称, 甚至如果不是复制的时候, 可能还会出现写错的情况.

**如何避免上述的问题**  
在各种Flux实现中, 一种很常见的方案就是使用常量替代Mutation事件的类型.  
我们可以将这些常量放在一个单独的文件中, 方便管理以及让整个app所有的事件类型一目了然.

**具体怎么做**  
我们可以创建一个文件: mutation-types.js, 并且在其中定义我们的常量.  
定义常量时, 我们可以使用ES2015中的风格, 使用一个常量来作为函数的名称.

```
-- mutation-types.js 
export const UPDATE_INFO = 'UPDATE_INFO'
```

```
-- store - index.js
import * as type from './mutation-types'

Vue.use(Vuex)

const store = new Vuxe.Store({
    state: {
        info: {
            name: 'qiuqiu', age: 18
        }
    },
    mutations: {
        [UPDATE_INFO] (state, payload) {
            state.info = {...state.info, 'sex': payload.sex}
        }
    }
})
```

```
-- App.vue
import {UPDATE_INFO} from './mutation-types'

export default {
    name: 'App',
    methods: {
        this.$store.commit(UPDATE_INFO, {sex: '女'});
    }
}
```

#### Mutation同步函数

使用谷歌插件–devtools

### Actions

不要再Mutation中进行异步操作.  
Action类似于Mutation, 但是是用来代替Mutation进行异步操作的.

**Actions基本操作**

```
const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        addCount (state) {
            state.count++
        }
    },
    actions: {
        // 默认参数 context 上下文
        // 所用数据修改都要在mutations中, 所以在actions中异步后, 也要去mutations中修改 
        // 在mutations中修改, 才能被devtools监控到
        addCount (context) {
            context.commit('addCount');
        }
    }
})
```

```
methods: {
    addCount () {
        // 调用actions中的方法, 使用的是 dispatch
        this.$store.dispatch('addCount');
    })
}
```

**Action返回的Promise**

```
actions: {
    addCount (context) {
        return new Promise((resolve) => {
            setTimout (() => {
                context.commit('addCount');
                resolve();
            }, 1000)
        })
    }
}

```

```
methods: {
    addCount () {
        this.$store.dispatch('addCount').then(res => {
            console.log('完成了接口的操作')
        })
    }
}
```

### Module

Vue使用单一状态树,那么也意味着很多状态都会交给Vuex来管理.  
当应用变得非常复杂时,store对象就有可能变得相当臃肿.  
为了解决这个问题, Vuex允许我们将store分割成模块\(Module\), 而每个模块拥有自己的state、mutation、action、getters等

```
const moduleA = {
    state: {...},
    mutations: {...},
    actions: {...},
    getters: {...}
}

const moduleB = {
    state: {...},
    mutations: {...},
    actions: {...},
    getters: {...}
}

const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})

store.state.a // mouduleA的state的状态
store.state.b // mouduleB的state的状态
```

**Module局部状态**  
上面的代码中, 我们已经有了整体的组织结构, 下面我们来看看具体的局部模块中的代码如何书写.  
我们在moduleA中添加state、mutations、getters  
mutation和getters接收的第一个参数是局部状态对象

```
const moduleA = {
    state: {
        count: 0
    },
    mutations: {
        addCount (state) {
            state.count++;
        }
    },
    getters: {
        doubleCount (state) {
            return state.count * 2;
        }
    }
}

const moduleB = {
}

const store = new Vuex.Store({
    state: {
        gCount: 111
    },
    modules: {
        a: moduleA,
        b: moduleB
    }
})
```

```
<script>
    export default {
        name: 'App',
        computed: {
            count () {
                return this.$store.getters.doubleCount;
            }
        },
        methods: {
            addCount () {
                this.$store.commit('addCount');
            }
        }
    }
</script>  


注意:
虽然, 我们的doubleCount和increment都是定义在对象内部的.
但是在调用的时候, 依然是通过this.$store来直接调用的.
```

**Actions的写法**  
接收一个context参数对象  
局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState

```
const muduleA = {
    //...
    actions: {
        addCountSum ({state, commit, rootState}) {
            if ((state.count + rootState.count) / 2 === 1) {
                commit('addCount');
            }
        }
    }
}
```

**getters的写法**

```
const moduleA = {
    // ...
    getters: {
        sunRootCount (state, getters, rootState) {
            return state.count + rootState.count;
        }
    }
}
```

### 项目结构

```
components文件夹  
store文件夹
  - index.js        -> 组装模块并导出 store的文件
  - actions.js      -> 根级别的 actions
  - mutations.js    -> 根级别的 mutations
  - modules            
      - aaaa.js     -> a模块  
      - bbbb.js     -> b模块 
```

# 八. 网络封装

## 网络模块的选择

**选择一: 传统的Ajax是基于XMLHttpRequest\(XHR\)**  
为什么不用它呢\?  
非常好解释, 配置和调用方式等非常混乱.  
编码起来看起来就非常蛋疼.  
所以真实开发中很少直接使用, 而是使用jQuery-Ajax

**选择二: 在前面的学习中, 我们经常会使用jQuery-Ajax**  
相对于传统的Ajax非常好用.  
为什么不选择它呢\?  
首先, 我们先明确一点: 在Vue的整个开发中都是不需要使用jQuery了.  
那么, 就意味着为了方便我们进行一个网络请求, 特意引用一个jQuery, 你觉得合理吗\?  
jQuery的代码1w+行.  
Vue的代码才1w+行.  
完全没有必要为了用网络请求就引用这个重量级的框架.

**选择三: 官方在Vue1.x的时候, 推出了Vue-resource.不在维护了**  
Vue-resource的体积相对于jQuery小很多.  
另外Vue-resource是官方推出的.  
为什么不选择它呢\?  
在Vue2.0退出后, Vue作者就在GitHub的Issues中说明了去掉vue-resource, 并且以后也不会再更新.  
那么意味着以后vue-reource不再支持新的版本时, 也不会再继续更新和维护.  
对以后的项目开发和维护都存在很大的隐患.

**选择四: 作者推荐了框架axios**  
优点:

1.  在浏览器中发送XMLHttpRequests请求
2.  在node.js中发送http请求
3.  支持Promise API
4.  拦截请求和响应
5.  转换请求和相应数据
6.  等等

## jsonp

在前端开发中, 我们一种常见的网络请求方式就是JSONP  
使用JSONP最主要的原因往往是为了解决跨域访问的问题.  
JSONP的原理是什么呢\?  
JSONP的核心在于通过script标签的src来帮助我们请求数据.  
原因是我们的项目部署在domain1.com服务器上时, 是不能直接访问domain2.com服务器上的资料的.  
这个时候, 我们利用script标签的src帮助我们去服务器请求到数据, 将数据当做一个javascript的函数来执行, 并且执行的过程中传入我们需要的json.  
所以, 封装jsonp的核心就在于我们监听window上的jsonp进行回调时的名称.

JSONP如何封装呢  
我们一起自己来封装一个处理JSONP的代码吧.

```
let count = 1;
export default function originPJSONP (option) {
    // 1. 从传入的option中提取URL
    const url = option.url;
    
    // 2. 在body中添加script标签  
    const body = document.getElementsByTagName('body')[0];
    const script = document.createElement('script);
    
    // 3. 内部生成一个不重复的callback
    const callback = 'jsonp' + count++
    
    // 4. 监听window上的jsonp调用 
    return new Promise((resolve, reject) => {
        try {
            window[callback] = function (result) {
                body.removeChild(script);
                resolve(result);
            }
            const params = handleParam(option.data);
            script.src = url + '?callback=' + callback + params;
            body.appendChild(script);
        } catch (e) {
            body.removeChild(script);
            reject(e);
        } 
    }) 
}
```

```
funciton handleParam (data) {
    let url = '';
    for (let key in data) {
        let value = data[key] !== undefinded ? data[key] : 
        url += '&${key}=${encodeURIComponent(value)}'
    }
    return url
}
```

## axios使用

### axios请求方式

支持多种请求方式:

- axios\(config\)
- axios.request\(config\)
- axios.get\(url, \[config\]\)
- axios.delete\(url, \[config\]\)
- axios.head\(url, \[ config\]\)
- axios.post\(url, \[data, \[config\]\]\)
- axios.put\(url, \[data, \[config\]\]\)
- axios.patch\(url, \[ data, \[ config\]\]\)

### axios发送并请求

#### 同时发送两个请求

使用axios.all, 可以放入多个请求的数组.  
axios.all\(\[\]\) 返回的结果是一个数组，使用 axios.spread 可将数组 \[res1,res2\] 展开为 res1, res2

```
import axios from 'axios'

export default {
    name: 'app',
    created () {
        // 发送并发请求  
        axios.all([axios.get('tp://000.000/xxxx'), 
            axios.get('tp://000.000/xxxx', {params: {type: 'sell', page: 1}})])
        .then(axios.spread((rea1, res2) => {
            console.log(res1);
            console.log(res2);
        }))    
    }
}
```

#### 全局配置

开发中,很多参数是固定的. 可以进行一些抽取, 也可以利用axiox的全局配置

```
axios.defaults.baseURL = 'tp://000.000'
axios.defaults.headers.post['Content-Type'] = 'xxxxx'


export default {
    name: 'app',
    created () {
        // 提取全局的配置
        axios.defaults.baseURL = 'http://000.000'
        
        // 发送并发请求  
        axios.all([
            axios.get('/xxxx'), 
            axios.get('/xxxxx', {
                params: {
                    type: 'sell', 
                    page: 1
                }}
            )
        ]).then(axios.spread((rea1, res2) => {
            console.log(res1);
            console.log(res2);
        }))    
    }
}
```

#### 常见的配置选项

```
请求地址   url: ‘/user’,
请求类型   method: ‘get’,
请根路径   baseURL: ‘http://www.mt.com/api’,
请求前的数据处理   transformRequest:[function(data){}],
请求后的数据处理   transformResponse: [function(data){}],
自定义的请求头   headers:{‘x-Requested-With’:‘XMLHttpRequest’},
URL查询对象   params:{ id: 12 },
查询对象序列化函数 
paramsSerializer: function(params){ }
request body
data: { key: ‘aa’},
超时设置s   timeout: 1000,
跨域是否带Token   withCredentials: false,
自定义请求处理   adapter: function(resolve, reject, config){},
身份验证信息   auth: { uname: ‘’, pwd: ‘12’},
响应的数据格式 json / blob /document /arraybuffer / text / stream
responseType: ‘json’,
```

## axios实例

**为什么要创建axios的实例**

 -    当我们从axios模块中导入对象时, 使用的实例是默认的实例.
 -    当给该实例设置一些默认配置时, 这些配置就被固定下来了.
 -    但是后续开发中, 某些配置可能会不太一样.
 -    比如某些请求需要使用特定的baseURL或者timeout或者content-Type等.
 -    这个时候, 我们就可以创建新的实例, 并且传入属于该实例的配置信息.

```
const inatancel = axios.create({
    baseURL: 'http: //111.2222',
    timeout: 5000
})

instancel({
    url: '/home/mutidata'
}).then(res => {
    console.log(res);
})

instancel({
    url: '/home/index'
}).then(res => {
    console.log(res);
})


const other = axios.create({
    baseURL: 'http: //111.2222',
    timeout: 5000,
    // header: {}
})
```

### axios封装

> https://www.bilibili.com/video/av59594689\?p=145  
> 简化的比较复杂 看视频吧

 1.     建立一个network文件夹, 在里面建立一个request.js文件

```
export function request (config) {
    // 1. 创建axios的实例 
    const instance = axios.create({
        baseURL: 'http://111.222.33.44',
        timeout: 5000
    })
    
    // 2. 发送真正的网络请求
    // 返回的 instancel(config)就是一个promise
    return instancel(config)
}
```

 2.     在使用的文件中. 封装request模块

```
import {request} from './network/request';

request({
    url: '/home/multidata'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
```

### axios拦截器

axios提供了拦截器，用于我们在发送每次请求或者得到相应后，进行对应的处理

```
export function request (config) {
    // 1. 创建axios的实例 
    const instance = axios.create({
        baseURL: 'http://111.222.33.44',
        timeout: 5000
    })
    
    // 2. axios拦截器 
    // config可以随便命名
    instance.interceptiors.request.use(config => {
        // 不返回, 调用的时候会进入err
        return config
    }, err => {      // 发送都没成功
        console.log(err);
    })
    
    // 3. 发送真正的网络请求
    return instancel(config)
}
```

**拦截器中做什么**

- 请求成功

1.  过滤一些信息
2.  每次请求后, 会展示loding图标
3.  某些网络请求\(登录的token\), 必须携带某一些特殊的信息

 -    响应拦截

```
instance.interceptors.resques.use(res => {
    return config
}, err => {
    console.log(err);
})
```

# 九.项目实战

# 十. 补充知识点

## ES6

### 块级作用域

变量作用域: 交叠在什么范围内是可用

ES5之前因为if和for都没有块级作用域的概念, 在很多时候, 我们必须借助于function的作用域来解决应用外变量的问题  
ES6中, 加入了let.let它有if和for的块级作用域

### 增强写法

属性的增强写法

```
// ES5  对象字面量  
const name = 'why';
const age = 18;
const obj = {
    name: name,
    age: age
}

// ES6
const obj = {
    name,
    age
}
```

函数的增强写法

```
// ES5 
const obj = {
    run: function () {
        
    }
}

// ES6
const obj = {
    run() {
        
    }
}
```

## JS高阶函数

### 编程范式: 声明式编程 or 命令式编程

```
// vue 编程范式: 声明式编程
<div id='app'>{{message}}</div>

const app = new Vue({
    el: 'app', // 用户挂载要管理的元素
    data: { // 定义数据
        message: '你好啊'
    }
})

// 元素JS的做法: 命令式编程 
1. 创建div元素, 设置id属性
2. 定义一个变量叫message
3. 将message变量放在前面的div元素中显示
```

### 编程范式: 面向对象编程 or 函数式编程

面向对象编程 \(第一公民: 对象\) or 函数式编程 \(第一公民: 函数\)

> https://www.bilibili.com/video/av59594689\?p=44

**高阶函数** filter / map / reduce

案例详细讲解:

 1.     一般的JS写法  
    缺点: 一步一步, 代码太多

```
const nums = [10, 20, 111, 222, 444, 40, 50];

// 需求一: 取出所有小于的数字
let newNums = [];
for (let n of nums) {
    if (n < 100) {
        newNums.push(n);
    }
}

// 需求二: 将所有小于100的数字进行转化 - 全部 *2
let newNums2 = [];
for (let n of newNums) {
    newNums2.push(n * 2);
}

// 需求三: 将所有newNums2的数字相加, 得到最终的结果
let total = 0; 
for (let n of newNums2) {
    total += n;
}
```

2.  单个需求, 高阶函数写法

**filter** \- 回调函数有一个要求: 必须返回一个boolean值  
true: 返回true时, 函数内部会自动将这次回调的n加入到新的数组中  
false: 返回false时, 函数内部会过滤掉这次的n

```
const nums = [10, 20, 111, 222, 444, 40, 50];

// 需求一: filter
let newNums = nums.filter(functcion (n) {
    return n < 100;
})

// 遍历出数组中的每一个是否<100来判断true / false, 然后为true加入新数组newNums中

```

**map**

```
// 需求二: map
let newNums2 = newNums.map(functcion (n) {
    return n * 2;
})

```

**reduce**  
作用: 对数组中所有的内容进行汇总

```
// reduce原理解释
let total = newNums2.reduce(function (preValue, n) {
    return 100;
}, 0);

// reduce (参数一, 参数二) 参数二是第一个preValue值
// 第一次: preValue 0   n  20   
// 第二次: preValue 100   n  40
// 第三次: preValue 100   n  80
// 第四次: preValue 100   n  100
```

```
// 需求三: reduce
let total = newNums2.reduce(function (preValue, n) {
    return preValue + n;
}, 0);

// 第一次: preValue 0   n  20   
// 第二次: preValue 20   n  40
// 第三次: preValue 60   n  80
// 第四次: preValue 140   n  100
```

 3.     高阶函数-链式连接的写法

```
const nums = [10, 20, 111, 222, 444, 40, 50];

let total = nums.filter(function (n) {
    return n < 100;
}).map(function (n) {
    return n * 2;
}).reduce(function (preValue, n) {
    return preValue + n;
}, 0);

// 240
```

## Promise

ES6中一个非常重要和好用的特性就是Promise

**Promise做什么的**  
Promise是异步编程的一种解决方案

**Promise什么时候用来处理异步事件**  
常见的场景: 一般在有异步操作-比如网络请求时

### Promise的基本使用

调接口的时候用Promise封装一遍, 成功的时候走then, 失败走catch函数里的代码

```
需求: 以定时器为例
setTimeout(() => {
    console.log('哈哈哈');
}, 1000) 
```

 -    第一种写法

```
// 参数-> 函数  
// resolve, reject本身也是函数
// 成功的时候
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 1000) 
}).then(() => {
    console.log('哈哈哈');
}) 

// 失败的时候
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
        reject('error message');
    }, 1000) 
}).then(() => {
    console.log('哈哈哈');
}).catch(error => {
    console.log(error);
})
```

 -    第二种写法

```
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(data);
        reject('error message');
    }, 1000) 
}).then(data => {
    console.log(data);
}, err => {
    console.log(err);  
})
```

**定时器异步事件解析**

1.  new Promise很明显是创建一个Promise对象
2.  小括号中\(\(resolve, reject\) => \{\}\)也很明显就是一个函数，而且我们这里用的是之前刚刚学习过的箭头函数

- 但是resolve, reject它们是什么呢？
- 我们先知道一个事实：在创建Promise时，传入的这个箭头函数是固定的（一般我们都会这样写）
- resolve和reject它们两个也是函数，通常情况下，我们会根据请求数据的成功和失败来决定调用哪一个

3.  成功还是失败？

- 如果是成功的，那么通常我们会调用resolve\(messsage\)，这个时候，我们后续的then会被回调
- 如果是失败的，那么通常我们会调用reject\(error\)，这个时候，我们后续的catch会被回调

**需求:**

1.  网络请求: 等到数据aaa -> 自己处理 \(10行\)
2.  处理: aaa111 -> 自己处理\(10行\)
3.  处理: aaa111222 -> 自己处理

 -    链式链接的写法

```
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('aaa');
    }, 1000)
}).then(res => {
    // 1. 自己处理10行代码 
    console.log(res, '第一层的10行处理代码');
    
    // 2. 对结果进行第一次的处理
    return new Promise(resolve => {
        resolve(res + '111');
    })
}).then(res => {
    console.log(res, '第二层的10行处理代码');
    
    return new Promise(resolve => {
        resolve(res + '222');
    })
}).then(res +> {
    console.log(res, '第三层的处理代码')
})
```

 -    链式链接的简写

```
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('aaa');
    }, 1000)
}).then(res => {
    console.log(res, '第一层的10行处理代码');
    
    // 简写
    return Promise.resolve(res+ '111');
}).then(res => {
    console.log(res, '第二层的10行处理代码');
    
    return Promise.resolve(res+ '222');
}).then(res +> {
    console.log(res, '第三层的处理代码')
})
```

 -    链式链接的简写2

```
new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('aaa');
    }, 1000)
}).then(res => {
    console.log(res, '第一层的10行处理代码');
    
    // 简写
    return res+ '111';
}).then(res => {
    console.log(res, '第二层的10行处理代码');
    
    return res+ '222';
}).then(res +> {
    console.log(res, '第三层的处理代码')
})
```

\*\*需求: \*\*

 1.     调用第一个接口, 等到数据aaa
 2.     调用第二个接口, 得到数据bbb
 3.     需要aaa bbb都有了在操作

```
Promise.all({
    new Promise((resolve, reject) => {
        $ajax({
            url: '',
            success: function (data) {
                resolve(data);
            }
        }),
        $ajax({
            url: '',
            success: function (data) {
                resolve(data);
            }
        })
    }).then(results => {
        console.log(results[0]);  // aaa
        console.log(results[1]);  // bbb
        ...
    })
}) 
```

### Promise三种状态

异步操作后会有三种状态

- pending：等待状态，比如正在进行网络请求，或者定时器没有到时间。
- fulfill：满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then\(\)
- reject：拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch\(\)