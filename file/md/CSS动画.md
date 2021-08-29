# CSS 动画

CSS 可实现 HTML 元素的动画效果，而不使用 JavaScript 或 Flash！

会讲到以下属性：

- @keyframes
- animation-name
- animation-duration
- animation-delay
- animation-iteration-count
- animation-direction
- animation-timing-function
- animation-fill-mode
- animation

## 第一个`@keyframes`

在 @keyframes 规则中指定了 CSS 样式，动画将在特定时间逐渐从当前样式更改为新样式。
要使动画生效，必须将动画绑定到某个元素。

``````css
/* 动画代码 */
@keyframes example {
  from {background-color: red;}
  to {background-color: yellow;}
}

/* 向此元素应用动画效果 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
``````

>`@keyframes` 后面跟着的是本次动画的名字
>动画代码需要只需指定关键帧，其中的过度浏览器会自动完成
>
>`animation-name`属性是应用动画，
>
>`animation-duration` 属性定义需要多长时间才能完成动画。如果未指定 `animation-duration` 属性，则动画不会发生，因为默认值是 0s（0秒）。

还可以通过百分比规定样式何时变化，可以添加多个样式的修改

`````css
/* 动画代码 */
@keyframes example {
  0%   {background-color: red;}
  25%  {background-color: yellow;}
  50%  {background-color: blue;}
  100% {background-color: green;}
}

/* 应用动画的元素 */
div {
  width: 100px;
  height: 100px;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
}
`````

## 第四个 `animation-delay`

`animation-delay` 属性规定动画开始的延迟时间。

``````css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: 2s;
}
``````

在页面加载完成后延迟两秒开始动画

值也可以是负的

``````css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-delay: -2s;
}
``````

在页面加载完成后，从 2 秒开始动画

## 第五个`animation-iteration-count`

`animation-iteration-count` 属性指定动画应运行的次数。

``````css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}
``````

动画会运行 3 次，如果**值为`infinite`则会一直运行下去**

## 第六个`animation-direction`

`animation-direction` 属性指定是向前播放、向后播放还是交替播放动画。

- `normal` - 动画正常播放（向前）。默认值
- `reverse` - 动画以反方向播放（向后）
- `alternate` - 动画先向前播放，然后向后
- `alternate-reverse` - 动画先向后播放，然后向前

``````css
div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: example;
  animation-duration: 4s;
  animation-direction: reverse;
}
``````

>在这里，除了正常播放外，其他的播放选项都必须和`animation-iteration-count`：运行次数 搭配
>且最小数值是 2 
>
>如果**小于 2** 那么动画只会运行 1次
>
>如果**大于 2** 那么动画会继续运行，直到播放次数用完
>	从 开始动画 到 结束动画 为 1次
>	无论他是怎么开始播放的	如果有设置动画延迟，动画延迟之作用于动画开始，并不会应用到 动画的播放方式

## 第七个`animation-timing-function`

animation-timing-function 属性规定动画的速度曲线。

- ease - 指定从慢速开始，然后加快，然后缓慢结束的动画（默认）
- linear - 规定从开始到结束的速度相同的动画
- ease-in - 规定慢速开始的动画
- ease-out - 规定慢速结束的动画
- ease-in-out - 指定开始和结束较慢的动画
- cubic-bezier(n,n,n,n) - 运行您在三次贝塞尔函数中定义自己的值

## 第八个`animation-fill-mode`

CSS 动画不会 动画开始前 或 动画播放完毕 之后影响元素。`animation-fill-mode` 属性能够覆盖这种行为。
在不播放动画时（在开始之前，结束之后，或两者都结束时），`animation-fill-mode` 属性规定目标元素的样式。
`animation-fill-mode` 属性可接受以下值：

- `none` - 默认值。动画在执行之前或之后不会对元素应用任何样式。
- `forward`s - 元素将保留由最后一个关键帧设置的样式值（依赖 animation-direction 和 animation-iteration-count）。
- `backwards` - 元素将获取由第一个关键帧设置的样式值（取决于 animation-direction），并在动画延迟期间保留该值。
- `both` - 动画会同时遵循向前和向后的规则，从而在两个方向上扩展动画属性。

> **注意**：如果没有此属性动画结束后会回到初始状态

## 第九个`animation`

`animation`是一个简写属性

``````css
div {
  animation: example 5s linear 2s infinite alternate;
}
``````

> 动画名称  播放时间  播放速度曲线  延迟时间  播放次数  播放方式



