// import type { ProFormInstance } from '@ant-design/pro-components';
import { ProFormText } from '@ant-design/pro-components';

export default () => {
  return (
    <>
      <ProFormText name="id2" label="主合同编号2" />
      <ProFormText name="project2" disabled label="项目名称2" initialValue="xxxx项目" />
      <ProFormText name="mangerName2" disabled label="商务经理2" initialValue="启途" />
    </>
  );
};
