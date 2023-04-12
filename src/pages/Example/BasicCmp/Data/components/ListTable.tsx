import { Descriptions } from 'antd';

/** 竖向列表 */
const ExpListTable = function () {
  return (
    <Descriptions layout="vertical" column={2} bordered colon={false}>
      <Descriptions.Item label="资产编号">10100002555455</Descriptions.Item>
      <Descriptions.Item label="资产分类">轻薄笔记本</Descriptions.Item>

      <Descriptions.Item label="资产编号">10100002555455</Descriptions.Item>
      <Descriptions.Item label="资产分类">轻薄笔记本</Descriptions.Item>

      <Descriptions.Item label="资产编号">10100002555455</Descriptions.Item>
      <Descriptions.Item label="资产分类">轻薄笔记本</Descriptions.Item>
    </Descriptions>
  );
};

export default ExpListTable;
