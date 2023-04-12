import { ProForm, ProFormDateRangePicker, ProFormText } from '@ant-design/pro-components';
import { Col } from 'antd';

export const MinFormItems1 = () => {
  return (
    <>
      <Col span={24} style={{ color: 'red' }}>
        这两个是在分组里，并排布局
      </Col>
      <ProForm.Group>
        <ProFormText
          colProps={{ span: 12 }}
          name={['contract', 'name']}
          label="合同名称"
          placeholder="请输入名称"
        />
        <ProFormDateRangePicker
          fieldProps={{ style: { width: '100%' } }}
          colProps={{ span: 12 }}
          name={['contract', 'createTime']}
          label="合同生效时间"
        />
      </ProForm.Group>
    </>
  );
};

export const MinFormItems2 = () => {
  return (
    <>
      <Col span={24} style={{ color: 'red' }}>
        这两个是不再分组里，并排布局
      </Col>
      <ProFormText colProps={{ span: 12 }} name="id" label="主合同编号" />
      <ProFormText
        colProps={{ span: 12 }}
        name="project"
        disabled
        label="项目名称"
        initialValue="xxxx项目"
      />
    </>
  );
};
