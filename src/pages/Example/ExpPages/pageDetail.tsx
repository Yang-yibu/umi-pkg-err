import Button from '@/components/cusBasic/button';
import CusContainer, { CusPageTitle } from '@/components/CusContainer';
import { ProFormInstance, Submitter } from '@ant-design/pro-components';
import { ProForm } from '@ant-design/pro-components';
import { Col, Form, message, Row, Switch } from 'antd';
import { useRef, useState } from 'react';
import FormContent from './components/FormContent';
import FormContent2 from './components/FormContent2';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const ExpPage1 = () => {
  const [hasHeaderBorder] = useState<boolean>(true);
  const [useGrid, setUseGrid] = useState<boolean>(true);

  const formRef = useRef<
    ProFormInstance<{
      name: string;
      company?: string;
      useMode?: string;
    }>
  >();

  const formIns = Form.useFormInstance();
  // TODO: 待完善不使用 submitter 配置，怎么处理提交、重置
  const onSubmit = function () {
    formIns.submit();
  };
  const onReset = function () {
    formIns.resetFields();
  };

  return (
    <>
      <CusContainer
        headerBordered={hasHeaderBorder}
        title={<CusPageTitle titleStyleInherit title="表单项左中右可能都有" />}
        extra={
          <>
            <div>
              <span style={{ marginRight: 10 }}>使用 Gird 布局</span>
              <Switch checked={useGrid} onChange={() => setUseGrid(!useGrid)} />
            </div>
            <Button>数据维护</Button>
            <Button>属性扩展</Button>
          </>
        }
        bodyStyle={{ padding: 0 }}
        bodyClass="contentBoxVertical"
      >
        <ProForm<{
          name: string;
          company?: string;
          useMode?: string;
        }>
          {...(useGrid
            ? { className: 'formChildIsContentGrid', grid: true, rowProps: { gutter: 24 } }
            : // 类名在非 grid 模式下可以不加
              { className: 'formChildIsContent' })}
          formRef={formRef}
          submitter={false}
          // submitter={{
          //   render: (_, dom) => <div className="pageContainer-footer">{dom}</div>,
          // }}
          onFinish={async (values) => {
            await waitTime(2000);
            console.log(values);
            const val1 = await formRef.current?.validateFields();
            console.log('validateFields:', val1);
            const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
            console.log('validateFieldsReturnFormatValue:', val2);
            message.success('提交成功');
          }}
          params={{ id: '100' }}
          formKey="base-form-use-demo"
          dateFormatter={(value, valueType) => {
            console.log('---->', value, valueType);
            return value.format('YYYY/MM/DD HH:mm:ss');
          }}
          request={async () => {
            await waitTime(1000);
            return {
              name: '蚂蚁设计有限公司',
              useMode: 'chapter',
            };
          }}
          autoFocusFirstInput
          // className="contentBox"
        >
          {/* 各栏高度不一样时，内容少的样式会有问题，每行高度会变高 */}
          {/* <Row gutter={16} className="contentBox" style={{ width: '100%' }}>
            <Col className="leftExtra" style={{ width: '200px' }}>
              左侧内容
            </Col>
            <Col className="content">
              <FormContent />
            </Col>

            <div className="rightExtra colPadInline" style={{ width: '200px' }}>
              <FormContent2 />
            </div>
          </Row> */}

          {useGrid ? (
            // 容器区域内表单要想继续使用 Grid 的方式，
            // 除了 ProForm 上的必要属性外，需要使用 Row 包裹一下
            <div className="contentBox">
              <div className="leftExtra" style={{ width: '100px' }}>
                左侧内容
              </div>

              <div className="content">
                <Row gutter={16}>
                  <FormContent />
                </Row>
              </div>

              <div className="rightExtra colPadInline" style={{ width: '200px' }}>
                <Row gutter={16}>
                  <FormContent2 />
                </Row>
              </div>
            </div>
          ) : (
            <div className="contentBox">
              <div className="leftExtra" style={{ width: '100px' }}>
                左侧内容
              </div>

              <div className="content">
                <FormContent />
              </div>

              <div className="rightExtra colPadInline" style={{ width: '200px' }}>
                <FormContent2 />
              </div>
            </div>
          )}
        </ProForm>

        <div className="pageContainer-footer">
          <Button theme="primary" type="primary" onClick={() => {}}>
            确认
          </Button>
          <Button>重置</Button>
        </div>
      </CusContainer>
    </>
  );
};

export default ExpPage1;
