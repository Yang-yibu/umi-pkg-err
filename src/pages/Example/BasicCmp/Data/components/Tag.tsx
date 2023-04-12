import { PlusOutlined } from '@ant-design/icons';
import { Space, Tag } from 'antd';

const DataTag = function () {
  return (
    <Space direction="vertical">
      <div>
        <Tag>标签 1</Tag>
        <Tag closable>标签 2</Tag>
        <Tag className="addTag">
          <PlusOutlined /> 标签 2
        </Tag>
      </div>

      <div>
        <Tag className="bg-success">在用</Tag>
        <Tag className="bg-primary">闲置</Tag>
        <Tag className="bg-error">错误</Tag>
        <Tag className="bg-warn">警告</Tag>
        <Tag className="bg-info">作废</Tag>
      </div>

      <div>
        <Tag className="bg-success lightBg">在用</Tag>
        <Tag className="bg-primary lightBg">闲置</Tag>
        <Tag className="bg-error lightBg">错误</Tag>
        <Tag className="bg-warn lightBg">警告</Tag>
        <Tag className="bg-info lightBg">作废</Tag>
      </div>

      <div>
        <Tag className="bg-primary lightBg">低风险</Tag>
        <Tag className="bg-warn lightBg">中风险</Tag>
        <Tag className="bg-error lightBg">高风险</Tag>
      </div>

      <div>
        <Tag className="status-1">待审批</Tag>
        <Tag className="status-2">待出租</Tag>
        <Tag className="status-3">租用中</Tag>
        <Tag className="status-4">已逾期</Tag>
        <Tag className="status-5">待借入签收</Tag>
        <Tag className="status-6">待登记</Tag>
        <Tag className="status-7">已取消</Tag>
      </div>

      <div>
        <Tag className="notice-1">需求公告</Tag>
        <Tag className="notice-2">结果公告</Tag>
        <Tag className="notice-3">调剂公告</Tag>
        <Tag className="notice-4">系统公告</Tag>
        <Tag className="notice-5">其它公告</Tag>
      </div>
    </Space>
  );
};

export default DataTag;
