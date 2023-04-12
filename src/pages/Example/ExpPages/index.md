---
title: 页面容器
sidemenu: true
---

# 所有页面容器

## 基础示例

左树右表、列表页、详情页面等，详细信息可查看“钉钉文档容器组件”部分。

<code src="./index1.tsx" iframe="true" title="左树右表" description=""></code>

## 工作台、统计分析样式

在 Demo 中效果不明显

<code src="./overview.tsx" compact="false" iframe="true" title="工作台" background="#cddcff"></code>

## 内容详情区域

ProForm 在 Content 区域内

### 在 `.content` 内部

Form 在主内容区内部

<code src="./pageContent.tsx" iframe="true" title="" description=""></code>

### 在 `.contentBox` 外边

Form 在主内容区外部，表单项在左中右都会有

<code src="./pageDetail.tsx" iframe="true" title="" description=""></code>

### 使用内容小卡片组件

详情中使用内容小卡片组件布局。

- 如果在 `ProForm` 内部使用 `contentBox content` ，并开启 grid 模式时，需要注意
  1. 要添加 `formChildIsContentGrid` 类名，否则会出现横向滚动条

## Sheet 所在页面

<code src="./PageSheet.tsx" iframe="true" title="" description=""></code>

## 具有 Tab 的容器 1

Tab 只做页签

<code src="./indexTab.tsx" iframe="true" title="" description=""></code>

## 具有 Tab 的容器 2

使用 Tab 的页签和 children

<code src="./indexTab2.tsx" iframe="true" title="" description=""></code>
