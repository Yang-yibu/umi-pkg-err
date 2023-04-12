import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const ExpCmpForm = function () {
  return (
    <div className="expContainer">
      <Collapse defaultActiveKey={['']} expandIconPosition="end" destroyInactivePanel>
        <Panel header="单选多选" key="单选多选">
          标签
        </Panel>
        <Panel header="开关" key="开关">
          标签
        </Panel>
        <Panel header="下拉菜单" key="下拉菜单">
          标签
        </Panel>
        <Panel header="上传图片上传" key="上传图片">
          标签
        </Panel>
        <Panel header="上传文件上传" key="文件上传">
          标签
        </Panel>
      </Collapse>
    </div>
  );
};

export default ExpCmpForm;
