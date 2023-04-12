import BasicAssetInfoDrawer from '@/components/bizBasic/assetInfo/demo/basic';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const ExpBizCmp = function () {
  return (
    <div className="expContainer">
      <Collapse defaultActiveKey={['资产卡片详情']} expandIconPosition="end" destroyInactivePanel>
        <Panel header="资产卡片详情" key="资产卡片详情">
          <BasicAssetInfoDrawer />
        </Panel>
      </Collapse>
    </div>
  );
};

export default ExpBizCmp;
