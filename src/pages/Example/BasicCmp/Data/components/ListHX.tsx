import { Descriptions, Tag } from 'antd';

/** 横向列表 */
const ExpListHx = function () {
  return (
    <Descriptions layout="horizontal" column={4}>
      <Descriptions.Item label="预警编号">2022120010000004</Descriptions.Item>
      <Descriptions.Item label="单位名称">发展和改革委员会</Descriptions.Item>
      <Descriptions.Item label="任务名称">问题类预警任务</Descriptions.Item>
      <Descriptions.Item label="预警日期">2021-02-05</Descriptions.Item>
      <Descriptions.Item label="任务类型">任务类</Descriptions.Item>
      <Descriptions.Item label="风险等级">
        <Tag className="bg-error lightBg">高风险</Tag>
      </Descriptions.Item>
      <Descriptions.Item label="触发规则">4</Descriptions.Item>
      <Descriptions.Item label="预警状态">
        <Tag className="status-3">待处理</Tag>
      </Descriptions.Item>
    </Descriptions>
  );
};

export default ExpListHx;
