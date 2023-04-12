import { Collapse } from 'antd';
import EmptyProvider from './Provider';
const Panel = Collapse.Panel;

const ExpOtherEmpty = function () {
  return (
    <>
      <Collapse defaultActiveKey={['']} expandIconPosition="end" destroyInactivePanel>
        <Panel header="Antd EmptyProvider 全局设置空状态" key="EmptyProvider">
          <div className="border">
            <EmptyProvider />
          </div>
        </Panel>
      </Collapse>
    </>
  );
};

export default ExpOtherEmpty;
