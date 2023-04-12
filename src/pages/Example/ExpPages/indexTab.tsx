import { useState } from 'react';
import CusContainer from '@/components/CusContainer';
import Button from '@/components/cusBasic/button';
// import { Button } from 'antd';
import { Space, Tabs } from 'antd';

const ExpPageTab = () => {
  const tabs = [
    { key: '1', label: '数据总览' },
    { key: '2', label: '在仓资产总览' },
    { key: '3', label: '出仓资产总览' },
  ];

  const [curTab, setCurTab] = useState<(typeof tabs)[0]>(tabs[0]);

  const onTabChange = function (activeKey: string) {
    const t = tabs.find((item) => item.key === activeKey);
    if (t) {
      setCurTab(t);
    }
  };

  return (
    <CusContainer
      title={
        <Tabs
          className="cusTabs"
          defaultActiveKey="1"
          items={tabs}
          onChange={onTabChange}
          tabBarExtraContent={
            <Space size={16}>
              <Button>数据维护</Button>
              <Button>属性扩展</Button>
            </Space>
          }
        />
      }
    >
      <div style={{ height: 1000 }}>
        <div>内容区域，只用于 title 区域</div>
        <div>当前选中 Tab {curTab?.label}，只使用 Tab 页签</div>
      </div>
    </CusContainer>
  );
};

export default ExpPageTab;
