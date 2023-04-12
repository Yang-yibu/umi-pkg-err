import { useState } from 'react';
import CusContainer from '@/components/CusContainer';

const TabChild: React.FC<{ id: string }> = function (props) {
  console.log('TabChild: ', props.id);
  return <>{props.children}</>;
};

const ExpPageTab = () => {
  const tabs = [
    {
      key: '1',
      label: '数据总览',
      children: <TabChild id="1">内容1, 使用原生 Tab Child</TabChild>,
    },
    { key: '2', label: '在仓资产总览', children: <TabChild id="2">内容 2</TabChild> },
    // eslint-disable-next-line react/no-children-prop
    { key: '3', label: '出仓资产总览', children: <TabChild id="3" children="内容 3" /> },
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
      hasHeader={false}
      tabs={{
        className: 'cusTabs',
        defaultActiveKey: '1',
        items: tabs,
        onChange: onTabChange,
      }}
    />

    //   <div className="pageContainer">
    //   <Tabs
    //     className="cusTabs isContainerTabs noPad"
    //     defaultActiveKey="1"
    //     items={tabs}
    //     onChange={onTabChange}
    //   />
    // </div>
  );
};

export default ExpPageTab;
