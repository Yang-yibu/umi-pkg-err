import ExpButton, {
  ExpBtnTheme,
  ExpButsLarge,
  ExpButsSmall,
} from '@/components/cusBasic/button/example';
import { Collapse, Switch } from 'antd';
import { useState } from 'react';
import ExpOtherEmpty from './components/Empty';
import ExpOtherTables from './components/table';
import ExpOtherTabs from './components/tabs';
const Panel = Collapse.Panel;

const ExpOtherCmp = function () {
  const [showBg, setShowBg] = useState(false);
  const handleShowBg = function () {
    setShowBg(!showBg);
  };

  return (
    <div className="expContainer">
      <Collapse defaultActiveKey={['']} expandIconPosition="end" destroyInactivePanel>
        <Panel header="按钮小尺寸" key="btn1">
          <ExpButsSmall />
        </Panel>
        <Panel header="按钮中尺寸" key="btn">
          <ExpButton />
        </Panel>
        <Panel header="按钮大尺寸" key="btn3">
          <ExpButsLarge />
        </Panel>
        <Panel header="不同主题按钮" key="btnTheme">
          <div
            style={{
              width: '100%',
              height: '100%',
              padding: '10px',
              background: showBg ? '#eee' : '',
            }}
          >
            <div>
              <Switch checked={showBg} onChange={handleShowBg} />
            </div>
            <ExpBtnTheme />
          </div>
        </Panel>
      </Collapse>

      <br />
      <ExpOtherTabs />

      <br />
      <ExpOtherEmpty />
    </div>
  );
};

export default ExpOtherCmp;
