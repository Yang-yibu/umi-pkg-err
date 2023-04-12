import { ProCard } from '@ant-design/pro-components';
import { Collapse, Tabs } from 'antd';
const Panel = Collapse.Panel;

const ExpOtherTabs = function () {
  const tabs = [
    { key: '1', label: '数据总览', children: 'Tab 1' },
    { key: '2', label: '在仓资产总览', children: 'Tab 2' },
    { key: '3', label: '出仓资产总览', children: 'Tab 3' },
  ];
  return (
    <>
      <Collapse
        // defaultActiveKey={['basic', 'protabs']}
        expandIconPosition="end"
        destroyInactivePanel
      >
        <Panel header="AntdTabs nav 样式" key="basic">
          <div className="border">
            <Tabs className="cusTabs" defaultActiveKey="1" items={tabs} />
          </div>
        </Panel>
        <Panel header="ProCard nav 样式" key="protabs">
          <div className="border">
            <ProCard
              title="a"
              tabs={{
                className: 'cusTabs',
                tabPosition: 'top',
                defaultActiveKey: '1',
                items: tabs,
              }}
            />
          </div>
        </Panel>
      </Collapse>
    </>
  );
};

export default ExpOtherTabs;
