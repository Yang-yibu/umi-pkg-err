import { Collapse } from 'antd';
import ExpListHx from './components/ListHX';
import ExpListSx from './components/ListSx';
import ExpListTable from './components/ListTable';
import DataTag from './components/Tag';
const Panel = Collapse.Panel;

const ExpCmpData = function () {
  return (
    <div className="expContainer">
      <Collapse defaultActiveKey={['列表表格类']} expandIconPosition="end" destroyInactivePanel>
        <Panel header="标签" key="标签">
          <DataTag />
        </Panel>
        <Panel header="列表横向" key="列表横向">
          <div className="border">
            <ExpListHx />
          </div>
        </Panel>
        <Panel header="列表纵向" key="列表纵向">
          <div className="border">
            <ExpListSx />
          </div>
        </Panel>
        <Panel header="列表表格类" key="列表表格类">
          <ExpListTable />
        </Panel>
        <Panel header="列表文件" key="列表文件">
          标签
        </Panel>
        <Panel header="文字气泡" key="文字气泡">
          标签
        </Panel>
      </Collapse>
    </div>
  );
};

export default ExpCmpData;
