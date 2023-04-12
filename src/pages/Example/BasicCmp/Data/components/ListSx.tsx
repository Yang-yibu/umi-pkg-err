import { Descriptions } from 'antd';

/** 竖向列表 */
const ExpListSx = function () {
  return (
    <Descriptions className="cus-vertical" layout="horizontal" column={1} colon={false}>
      <Descriptions.Item label="购置日期">2020年8月16日</Descriptions.Item>
      <Descriptions.Item label="新旧程度">8成新</Descriptions.Item>
      <Descriptions.Item label="所属部门">北京市发改委</Descriptions.Item>
      <Descriptions.Item label="所在仓库">
        发改委1号仓 北京市西城区月坛南街38号2号楼
      </Descriptions.Item>
      <Descriptions.Item label="资产数量">1 件</Descriptions.Item>
    </Descriptions>
  );
};

export default ExpListSx;
