---
title: Button
key: basicBtn
group:
  title: 自定义基础组件
sidemenu: true
---

# Button 按钮

基于 Antd Button 二次封装，扩展了主题色，点击事件防抖。

## 不同主题色

`primary_s` 是 antd 原本的 primary 主题

- theme 参数不传，默认是 `primary_s`

<code src="./demo/BtnTheme.tsx" title="普通状态"></code>

<code src="./demo/BtnThemeDis.tsx" title="禁用状态"></code>

## Sheet 按钮样式

<code src="./demo/SheetBtn.tsx"></code>

## 详情页底部新增按钮

```tsx
import React from 'react';
import { message } from 'antd';
import { ListAddBtn } from '@/components/cusBasic/button/listAddBtn';

export default () => {
  return <ListAddBtn onClick={() => message.success('新增资产卡片')}>新增资产卡片</ListAddBtn>;
};
```

## 点击事件防抖

```tsx
import React from 'react';
import { Space, message } from 'antd';
import Button from './index.tsx';

export default () => {
  const handleClick = function (ev) {
    const n = Date.now();
    console.log(n);

    console.log('data: ', ev.data);
    console.log('currentTarget: ', ev.currentTarget);
    console.log('target: ', ev.target);
    message.info('点击了按钮');
  };
  return (
    <Space>
      <Button
        type="default"
        theme="primary"
        debounceImmediate={false}
        onClick={handleClick}
        data={{ cus: 1 }}
      >
        默认 300ms
      </Button>

      <Button type="default" theme="primary" onClick={handleClick} data={{ cus: 1 }}>
        默认 300ms，立即执行一次
      </Button>

      <Button type="primary" theme="primary" debounceTime={0} onClick={handleClick} data={0}>
        关闭防抖，防抖时间为 0
      </Button>
      <Button
        type="primary"
        theme="primary"
        debounceTime={false}
        onClick={handleClick}
        data={false}
      >
        关闭防抖
      </Button>
    </Space>
  );
};
```

## API

只列出扩展的参数，其他参数与 Button 相同。

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | AntD 的原 type 属性 | `["default", "primary", "ghost", "dashed", "link", "text"]` | - |
| theme | 主题色 | `['primary_s', 'primary', 'error', 'danger', 'warning', 'info']` | `primary_s` |
| debounceTime | 防抖时间 | `number` `false` | 300 |
| debounceImmediate | 点击时是否立即触发一次 click | `boolean` | `true` |

## CusBtnPop

### 显示弹出框提示

<code src="./demo/BtnPop.tsx"></code>
