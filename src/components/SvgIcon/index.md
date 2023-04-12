---
title: SvgIcon
group:
  title: 基础组件·Antd
sidemenu: true
---

# SvgIcon 图标组件

现在 SvgIcon 组件有待优化。

## 普通 SvgIcon

### 示例

```tsx
import React from 'react';
import { SvgIconExp } from '@/components/SvgIcon';

const ExpSvgIcon = () => {
  return (
    <div style={{ fontSize: '30px' }}>
      <SvgIconExp name="cardManage" cmpName="" />
      <SvgIconExp name="menu8" cmpName="" />
    </div>
  );
};
export default ExpSvgIcon;
```

### 添加新 ICON

以 `add.svg` 为例

- 在 `src/icons/svg` 添加 svg 文件，删除 svg 标签上的 width 和 height 属性。
- 在 `src/icons/index` 中，注册图标。
  - TODO: 优化自动注册图标

```ts
// 引入图标
import { ReactComponent as Add } from './svg/add.svg';

const IconMap = {
  // 注册 add 为 SvgIcon 使用名称；组件名必须为大驼峰，否则报错
  add: () => <Add />,
} as const;
```

## 自动生成图标组件

TODO: 还不成熟，暂不使用

依赖插件 `umi-plugin-icons`。

### 示例

由于 `@SvgIconsAuto` 配置 dumi 不识别，导致控制台报错。故使用 pure 展示内容，想看效果可以临时去掉 `pure` 配置

```tsx | pure
import React from 'react';
import { Row, Col } from 'antd';
import {
  LikeTwotone,
  LikeOutlined,
  CloseOutlined,
  CloseFilled,
  CardManageTwotone,
  CardManageFilled,
  Menu8Twotone,
} from '@SvgIconsAuto';

const ExpSvgIcon = () => {
  return (
    <div style={{ fontSize: '30px' }}>
      <Row>
        <Col>标准 SVG Like</Col>
        <Col>
          <LikeTwotone />
        </Col>
        <Col>
          <LikeOutlined />
        </Col>
      </Row>
      <Row>
        <Col>Close</Col>
        <Col>
          <CloseOutlined />
        </Col>
        <Col>
          <CloseFilled />
        </Col>
      </Row>
      <Row>
        <Col>CardManage</Col>
        <Col>
          <CardManageFilled />
        </Col>
        <Col>
          <CardManageTwotone />
        </Col>
      </Row>
      <Row>
        <Col>Menu8</Col>
        <Col>
          <Menu8Twotone />
        </Col>
      </Row>
    </div>
  );
};
export default ExpSvgIcon;
```

### 添加新 ICON

要求：

- svg 需要添加到 `src/assets/svgIcon` 下，三种类型的图标对 svg 颜色有要求，否则不能通过组件修改颜色
  - `twotone` 为双色图标
  - `filled` 为填充图标
  - `outlined` 为线性图标
- svg 的尺寸需要为 1024，即 `viewBox="0 0 1024 1024"`，否则图标可能显示不出来
