---
title: 设计稿-表格样式
sidemenu: true
---

# 表格

## 表格过滤器

<code src="./components/filter.tsx"></code>

## 表格

<code src="./components/table.tsx"></code>

- 表头高度：多级表头单元格高度需要减小，在 `proTable` 组件上添加 `isMultiHeader` 类名
- 列设置：显示表格列设置功能，需要给 `ProTable` 组件添加类名（集成了 isMultiHeader 类名的功能）
  - 单行：`headerRow1`
  - 双行：`headerRow2`
  - 三行：`headerRow3`
  - 注意：表头不能出现换恒
- 表格搜索表单样式
  - 使用 `getFieldColumn` 方法，设置 `searchConf` 属性，
    - 一般只需要配置 icon 属性即可
    - 第一个表单只需要配置 `type='CusSearchLabel'`
  - 也可以单独配置 `formItemProps` 和 `renderFormItem`
  - 一般第一个表单是模糊搜索列表标题等；时间列都采用时间段搜索

## 表格交互组件

<code src="./components/interactive.tsx"></code>

## 搜索框 ICON

<code src="./components/iptIcons.tsx"></code>

如果 ICON 里没有需要的图标：

- 找相似的，合适的图标代替
- 找 UI 或产品确认，是否增加 ICON
