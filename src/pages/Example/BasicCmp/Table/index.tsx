import { Collapse } from 'antd';
import TableFilter from './components/filter';
import TableInteractive from './components/interactive';
import IptIcons from './components/iptIcons';
import TableComplete from './components/table';
import TableDynamic from './components/tableDynamic';
import TableDynamicPro from './components/tableProTable';
const Panel = Collapse.Panel;

const ExpTableCmp = function () {
  return (
    <div className="expContainer">
      <Collapse defaultActiveKey={['']} expandIconPosition="end" destroyInactivePanel>
        <Panel header="过滤器" key="过滤器">
          <TableFilter />
        </Panel>
        <Panel header="表单图标" key="表单图标">
          <IptIcons />
        </Panel>
        <Panel header="表格组件" key="表格组件">
          <TableComplete />
        </Panel>
        <Panel header="表格交互组件" key="表格交互组件">
          <TableInteractive />
        </Panel>

        <Panel header="AntdTable dynamic" key="dynamic">
          <div className="border">
            <TableDynamic />
          </div>
        </Panel>
        <Panel header="ProAntdTable dynamic" key="dynamicPro">
          <div className="border">
            <TableDynamicPro />
          </div>
        </Panel>
      </Collapse>
    </div>
  );
};

export default ExpTableCmp;
