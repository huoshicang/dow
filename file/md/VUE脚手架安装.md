# VUE 脚手架安装

## 一、安装 node.js

> 先安装 node https://nodejs.org/zh-cn/
> 默认路径	一直下一步
>
> 输入指令`node -v`，能显示版本号，说明 node 已经装好了
> 输入指令`npm -v`，能显示版本号，说明 npm 可以使用了

## 二、配置淘宝镜像

>cmd 输入指令：
>`npm install -g cnpm --registry=https://registry.npm.taobao.org`
>输入指令`cnpm -v`，能显示版本号，说明 cnpm 已经装好了

## 三、配置 VScode 终端

>右击VSCode图标，选择`属性`，选择`兼容性`，勾选`以管理员身份运行此程序`，最后点击`确定`
>
>在 VSconde 中  ctrl+shift+p 打开命令面板，输入 select ，选中 `Terminal:Select Default Shell`
>选择终端：
>	`C:\window\System32\cmd.exe`
>
>输入指令`cnpm -v`，能显示版本号，说明 cnpm 已经装好了

## 四、创建项目

>- 在终端中使用`cd`指令跳转到指定文件夹
>- 创建项目指令：`vue create ds-shop`（ds-shop是项目名，可以自己取）