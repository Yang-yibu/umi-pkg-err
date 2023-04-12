import { Collapse } from 'antd';
import { CusCtnDiv, CusCtnPro } from './index';
const Panel = Collapse.Panel;

const ExpCusContainer = function () {
  return (
    <Collapse defaultActiveKey={['CusContainer']} expandIconPosition="end" destroyInactivePanel>
      <Panel header="容器组件 - ProCard 实现" key="CusContainer">
        <CusCtnPro hasLeft style={{ height: '200px', border: '1px solid red' }} />
      </Panel>
      <Panel header="容器组件 - Div 实现" key="CusContainer1">
        <CusCtnDiv hasLeft style={{ height: '200px', border: '1px solid red' }} />
      </Panel>
    </Collapse>
  );
};

export default ExpCusContainer;
