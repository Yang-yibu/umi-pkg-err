// import CusButton from '@/components/cusBasic/button';
import CusInput from '@/components/cusBasic/input';
import CusTableActions from '@/components/cusBasic/table/actions';
import SvgIcon from '@/components/SvgIcon';
import { sleep } from '@/utils';
import FieldConfig from '@/utils/public/bizFieldConf';
import { SettingFilled } from '@ant-design/icons';
import type { ProColumns } from '@ant-design/pro-components';
import { ProTable } from '@ant-design/pro-components';
import { Form } from 'antd';
// import { Space } from 'antd';

type DataItem = {
  code: string;
  // [key: string]: string;
};

const fcIns = new FieldConfig<any, DataItem, any>([]);

export const getFieldColumn = fcIns.getTableField;

const TableComplete: React.FC = () => {
  const columns: ProColumns<DataItem, 'text' | 'select'>[] = [
    {
      title: '编号',
      dataIndex: 'code',
      fixed: 'left',
      hideInSearch: true,
    },
    getFieldColumn(
      {
        title: '单位名称',
        field: 'unitName',
        searchConf: { type: 'CusSearchLabel', label: '报送单位', placeholder: '報送单位/Code' },
        tooltip: '单位名称提示信息',
      },
      {
        // 自定义 icon，Icon 内置
        // tooltip: { icon: <QuestionCircleOutlined />, title: '单位名称提示信息' },
        // formItemProps: { label: false },
        // renderFormItem: (_, { type, defaultRender, ...rest }) => {
        //   if (type === 'form') {
        //     return null;
        //   }
        //   // const val = form.getFieldValue('unitName');
        //   return (
        //     // value 和 onchange 会通过 form 自动注入。
        //     <CusSearchLabel {...rest} label="报送单位" placeholder="请输入" />
        //   );
        //   // return defaultRender(_);
        // },
      },
    ),
    getFieldColumn(
      {
        title: '日期时间',
        field: 'dateTime',
        searchConf: { icon: 'typeYw', type: 'CusRangePicker' },
      },
      {
        // formItemProps: { label: false },
        // renderFormItem: () => <CusRangePicker label="日期时间" prefixIcon={<EditOutlined />} />,
      },
    ),
    getFieldColumn(
      {
        title: '创建时间',
        field: 'createTime',
        searchConf: {},
      },
      { valueType: 'date' },
    ),
    getFieldColumn(
      {
        title: '审批单位',
        field: 'approvalUnit',
      },
      // {
      // formItemProps: { label: false },
      // renderFormItem: () => <CusInput label="审批单位" allowClear prefixIcon={<EditOutlined />} />,
      // },
    ),
    {
      title: '面积范围',
      dataIndex: 'area',
      formItemProps: { label: false },
      renderFormItem(schema, config) {
        return (
          <div className="ipt-compact iptRange">
            <Form.Item noStyle name="moneyMin">
              <CusInput
                prefixIcon={<SvgIcon name="otherCk" />}
                className="ipt-compact-left"
                label="最小金额"
                allowClear
              />
            </Form.Item>
            <Form.Item noStyle name="moneyMax">
              <CusInput className="ipt-compact-right" label="最大金额" allowClear />
            </Form.Item>
          </div>
        );
      },
    },
    {
      title: '金额数字（万元）',
      dataIndex: 'amount',
      // formItemProps: { label: '金额数字' },
      formItemProps: { label: false },
      valueType: { type: 'money', moneySymbol: false },
      renderFormItem(schema, config) {
        return (
          <div className="ipt-compact iptRange">
            <Form.Item noStyle name="moneyMin">
              <CusInput
                prefixIcon={<SvgIcon name="otherCk" />}
                className="ipt-compact-left"
                label="最小金额"
                allowClear
              />
            </Form.Item>
            <CusInput className="ipt-compact-center" placeholder="~" disabled />
            <Form.Item noStyle name="moneyMax">
              <CusInput className="ipt-compact-right" label="最大金额" allowClear />
            </Form.Item>
          </div>
        );
      },
    },
    {
      title: '资产用途',
      dataIndex: 'assetsUse',
      children: [
        { title: '用途 1', dataIndex: 'assetsUse1' },
        { title: '用途 2', dataIndex: 'assetsUse2' },
      ],
      hideInSearch: true,
    },
    getFieldColumn(
      {
        title: '资产状态单选',
        field: 'assetStatuSingle',
        searchConf: { type: 'CusSelect', icon: 'otherCk', single: true },
      },
      {
        valueEnum: {
          v1: '在用',
          v2: '闲置',
        },
      },
    ),
    getFieldColumn(
      {
        title: '资产状态',
        field: 'assetStatus',
        searchConf: { icon: 'typeYw' },
      },
      {
        valueType: 'select',
        valueEnum: {
          v1: '在用',
          v2: '闲置',
        },
        // formItemProps: {
        //   label: false,
        // },
        // renderFormItem: (schema, config) => {
        //   return (
        //     <CusSelect
        //       label="资产状态"
        //       mode="multiple"
        //       showTagNum
        //       allowClear
        //       options={config.options}
        //       prefixIcon={<EditOutlined />}
        //     />
        //   );
        // },
      },
    ),
    {
      title: '操作',
      hideInSearch: true,
      width: 180,
      render: () => (
        <CusTableActions
          btns={[
            { field: '1', label: '查看详情' },
            { field: '2', label: '拆分', theme: 'warning' },
            { field: '3', label: '删除', theme: 'error', sureTitle: '确认删除此项？' },
          ]}
        />
      ),
      // render: () => (
      //   <Space size={16} className="operateBtns">
      //     <CusButton key="1" type="text" theme="primary">
      //       查看详情
      //     </CusButton>
      //     <CusButton key="2" type="text" theme="primary">
      //       拆分
      //     </CusButton>
      //     <CusButton key="3" type="text" theme="primary">
      //       删除
      //     </CusButton>
      //   </Space>
      // ),
    },
  ];

  return (
    <div className="border">
      <ProTable
        className="headerRow2"
        rowKey={'code'}
        scroll={{ x: 1300 }}
        form={{ labelWidth: 0 }}
        search={{
          // 默认展开
          defaultCollapsed: false,
          // 一个表单项占用个数
          // span: 6,
        }}
        columns={columns}
        // dataSource={data}
        request={async function (params, sort, filter) {
          console.log('查询参数: ', params, sort, filter);
          const data = [
            {
              code: Date.now() + '',
              unitName: '国管局资产司二处',
              dateTime: '2021-02-05 9:33:00',
              createTime: '2021-02-05 9:33:00',
              approvalUnit: '北京市经济和信息化局',
              amount: '192231.09',
              assetsUse1: '医疗',
              assetsUse2: '医疗 2',
              assetStatus: 'v1',
            },
          ];
          await sleep(1000);
          return { data: data };
        }}
        options={{
          density: false,
          setting: {
            children: <SettingFilled />,
          },
        }}
      />
    </div>
  );
};

export default TableComplete;
