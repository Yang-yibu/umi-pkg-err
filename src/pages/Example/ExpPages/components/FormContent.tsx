// import type { ProFormInstance } from '@ant-design/pro-components';
import {
  ProForm,
  ProFormCascader,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormList,
  ProFormMoney,
  ProFormSelect,
  ProFormText,
  ProFormTreeSelect,
} from '@ant-design/pro-components';
import { Col, Switch, TreeSelect } from 'antd';
import moment from 'dayjs';
import { useState } from 'react';
// import { useRef } from 'react';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

const treeData = [
  {
    title: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        title: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      },
    ],
  },
  {
    title: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [
      {
        title: 'Child Node3',
        value: '0-1-0',
        key: '0-1-0',
      },
      {
        title: 'Child Node4',
        value: '0-1-1',
        key: '0-1-1',
      },
      {
        title: 'Child Node5',
        value: '0-1-2',
        key: '0-1-2',
      },
    ],
  },
];

export default () => {
  const [showAllForm, setShowAllForm] = useState(true);

  return (
    <>
      {/* <ProForm<{
        name: string;
        company?: string;
        useMode?: string;
      }>
        onFinish={async (values) => {
          await waitTime(2000);
          console.log(values);
          const val1 = await formRef.current?.validateFields();
          console.log('validateFields:', val1);
          const val2 = await formRef.current?.validateFieldsReturnFormatValue?.();
          console.log('validateFieldsReturnFormatValue:', val2);
          message.success('提交成功');
        }}
        formRef={formRef}
        params={{ id: '100' }}
        formKey="base-form-use-demo"
        dateFormatter={(value, valueType) => {
          console.log('---->', value, valueType);
          return value.format('YYYY/MM/DD HH:mm:ss');
        }}
        request={async () => {
          await waitTime(1500);
          return {
            name: '蚂蚁设计有限公司',
            useMode: 'chapter',
          };
        }}
        autoFocusFirstInput
      > */}

      <div>
        <Switch checked={showAllForm} onClick={() => setShowAllForm(!showAllForm)} />
        是否显示所有表单
      </div>

      <ProForm.Group style={{ display: 'none' }}>
        <ProFormText
          name="name"
          required
          dependencies={[['contract', 'name']]}
          addonBefore={<a>客户名称应该怎么获得？</a>}
          addonAfter={<a>点击查看更多</a>}
          label="签约客户名称"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          rules={[{ required: true, message: '这是必填项' }]}
        />
        <ProFormText name="company" label="我方公司名称" placeholder="请输入名称" />
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDigit name="count" label="人数" width="lg" />
      </ProForm.Group>

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
      <ProForm.Group>
        <ProFormSelect
          options={[
            {
              value: 'chapter',
              label: '盖章后生效',
            },
          ]}
          readonly
          cacheForSwr
          name="useMode"
          label="合同约定生效方式"
        />
        <ProFormSelect.SearchSelect
          options={[
            {
              value: 'time',
              label: '履行完终止',
              type: 'time',
              options: [
                {
                  value: 'time1',
                  label: '履行完终止1',
                },
                {
                  value: 'time2',
                  label: '履行完终止2',
                },
              ],
            },
          ]}
          name="unusedMode"
          label="合同约定失效方式"
        />
        <ProFormMoney
          width="md"
          name="money"
          label="合同约定金额"
          fieldProps={{
            numberPopoverRender: true,
          }}
        />
      </ProForm.Group>

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

      {showAllForm && (
        <>
          <ProFormText name="mangerName" disabled label="商务经理" initialValue="启途" />
          <ProFormCascader
            request={async () => [
              {
                value: 'zhejiang',
                label: '浙江',
                children: [
                  {
                    value: 'hangzhou',
                    label: '杭州',
                    children: [
                      {
                        value: 'xihu',
                        label: '西湖',
                      },
                    ],
                  },
                ],
              },
              {
                value: 'jiangsu',
                label: 'Jiangsu',
                children: [
                  {
                    value: 'nanjing',
                    label: 'Nanjing',
                    children: [
                      {
                        value: 'zhonghuamen',
                        label: 'Zhong Hua Men',
                      },
                    ],
                  },
                ],
              },
            ]}
            name="areaList"
            label="区域"
            initialValue={['zhejiang', 'hangzhou', 'xihu']}
            addonAfter={'qixian'}
          />
          <ProFormTreeSelect
            initialValue={['0-0-0']}
            label="树形下拉选择器"
            width={300}
            fieldProps={{
              fieldNames: {
                label: 'title',
              },
              treeData,
              treeCheckable: true,
              showCheckedStrategy: TreeSelect.SHOW_PARENT,
              placeholder: 'Please select',
            }}
          />
          <ProFormDatePicker
            name="date"
            transform={(value) => {
              return {
                date: moment(value).unix(),
              };
            }}
          />
          <ProFormList name="datas" initialValue={[{ date: '2022-10-12 10:00:00' }]}>
            {() => {
              return (
                <ProFormDatePicker
                  name="date"
                  transform={(value) => {
                    return {
                      date: moment(value).unix(),
                    };
                  }}
                />
              );
            }}
          </ProFormList>
        </>
      )}
      {/* </ProForm> */}
    </>
  );
};
