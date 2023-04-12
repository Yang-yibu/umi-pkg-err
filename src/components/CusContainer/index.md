---
title: CusContainer
group:
  title: 基础组件
sidemenu: true
---

# CusContainer

## 基础容器

### 基础样式

基础示例，默认使用 CusCtnDiv ，后边不满足再调整。

```tsx
import React from 'react';
import ExpCusCtn from '@/components/CusContainer/example.tsx';

export default () => {
  return <ExpCusCtn />;
};
```

### 详情

默认表现，外部设置高 200，红边框

```tsx
import React from 'react';
import CusContainer from '@/components/CusContainer/index.tsx';

export default () => {
  return <CusContainer hasLeft style={{ height: '200px', border: '1px solid red' }} />;
};
```

### API

只列出扩展的参数，其他参数与 Button 相同。

| 参数           | 说明                             | 类型              | 默认值  |
| -------------- | -------------------------------- | ----------------- | ------- |
| 左侧区域       |
| hasLeft        | 是否显示右侧区域                 | `boolean`         | `false` |
| leftTitle      | 左侧标题                         | `React.ReactNode` | -       |
| leftChild      |                                  | `React.ReactNode` | -       |
| 右侧区域       |
| hasHeader      | 是否显示头部区域，待确定是否需要 |
| headerBordered | 是否显示 header 的下边线         | `boolean`         | `true`  |
| extra          | 右上角自定义内容区               | `React.ReactNode` | -       |
| title          |                                  | `React.ReactNode` |
| tabs           | 使用 antd Tabs 组件及属性        | `TabsProps`       | -       |
| child          |                                  | `React.ReactNode` |

## PageTitle

容器 Title 部分，支持面包屑样式。

在组件库中有些效果展示不出来，可以查看其他系统中示例组件 - 其他示例 - 页面标题

<code src="./demo/ExpPageTitle.tsx" background="#CDDCFF"></code>

## CardContent

详情内容卡片组件。

已经在 ProForm 组件开启 Grid 模式下测试，详见 `详情小卡片` 页面示例。
