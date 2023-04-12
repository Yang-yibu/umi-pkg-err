import CusRangePicker from '@/components/cusBasic/datePicker/rangePicker';
import CusInput, { CusSearchLabel, InputAntd } from '@/components/cusBasic/input';
import CusSelect from '@/components/cusBasic/select';
import { EditOutlined, SearchOutlined } from '@ant-design/icons';
import { Select, Cascader, Form, Input } from 'antd';
const Item = Form.Item;
const { Search } = InputAntd;

const options: any[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
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
];

const optionsSel: any = [
  { label: '在用', value: 'zy' },
  { label: '作废', value: 'zf' },
  { label: '闲置', value: 'xZh' },
];

const TableFilterStyle = () => {
  return (
    <>
      <div style={{ marginTop: '20px' }}>FormItem + 样式实现</div>
      <div>待优化，可能需要自定义表单组件；需要 layout + cusTableQuery 实现</div>
      <div className="cusTableQuery">
        <Form layout="vertical" style={{ padding: '18px', width: '80%' }}>
          <Item label="资产用途">
            <Input
              defaultValue={'sa'}
              placeholder="资产用途"
              allowClear
              prefix={<EditOutlined />}
            />
          </Item>
          <Item label="资产用途">
            <Cascader inputIcon={<EditOutlined />} options={options} />
          </Item>
          <Item label="资产用途" style={{ width: 'auto' }}>
            <Select
              suffixIcon={<EditOutlined />}
              mode="multiple"
              maxTagCount={'responsive'}
              allowClear
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['zy', 'zf', 'xZh']}
              options={optionsSel}
            />
          </Item>
        </Form>
      </div>
    </>
  );
};

const TableFilter: React.FC = () => {
  return (
    <div className="border">
      <TableFilterStyle />

      <div style={{ marginTop: '20px' }}>自定义组件实现</div>
      <hr />
      <Form style={{ padding: '18px', width: '80%' }}>
        <div style={{ marginBottom: 20 }}>自定义 Input</div>
        <CusInput
          label="资产用途"
          allowClear
          // placeholder="资产用途"
          prefixIcon={<EditOutlined />}
          defaultValue={'默认值'}
        />

        <div style={{ marginBottom: 20 }}>自定义 Select</div>
        <CusSelect
          prefixIcon={<EditOutlined />}
          label="资产用途"
          // placeholder="资产用途"
          mode="multiple"
          maxTagCount={'responsive'}
          allowClear
          style={{ width: '100%' }}
          options={optionsSel}
          defaultValue={['zy', 'zf', 'xZh']}
        />
        <div style={{ marginBottom: 20 }}>自定义 Select - 显示总数</div>
        <CusSelect
          showTagNum
          prefixIcon={<EditOutlined />}
          label="资产用途"
          // placeholder="资产用途"
          mode="multiple"
          maxTagCount={'responsive'}
          allowClear
          style={{ width: '100%' }}
          options={optionsSel}
          defaultValue={['zy', 'zf', 'xZh']}
        />
        <div style={{ marginBottom: 20 }}>自定义 Range</div>
        <CusRangePicker prefixIcon={<EditOutlined />} label="取得日期" />

        <div style={{ marginBottom: 20 }}>Antd 默认搜索框</div>
        <Search placeholder="对照请输入内容" allowClear enterButton="Search" />
        <div style={{ marginBottom: 20 }}>Antd 默认搜索框模拟实现</div>
        <Search
          addonBefore={
            <>
              <SearchOutlined />
              <span>资产编号/搜索</span>
            </>
          }
          placeholder="对照请输入内容"
          allowClear
          style={{ width: 304 }}
        />
        <div style={{ marginBottom: 20 }}>自定义搜索框</div>
        <CusSearchLabel
          label="资产编号/搜索"
          placeholder="请输入内容"
          allowClear
          style={{ width: 304 }}
        />
      </Form>
    </div>
  );
};

export default TableFilter;
